import React, {useState, useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import {FiX} from 'react-icons/fi'
import CreateFlipStep from './flip-step'
import {Box, SubHeading, Text, Absolute} from '../../../../../shared/components'
import Flex from '../../../../../shared/components/flex'
import theme from '../../../../../shared/theme'
import FlipPics from './flip-pics'
import FlipShuffle from './flip-shuffle'
import FlipHint from './flip-hint'
import {getRandomHint} from '../utils/hints'
import SubmitFlip from './submit-flip'
import {
  NotificationContext,
  NotificationType,
} from '../../../../../shared/providers/notification-provider'
import {hasDataUrl, composeHint} from '../../../shared/utils/flip'
import useFlips from '../../../../../shared/utils/useFlips'
import useIdentity from '../../../../../shared/utils/useIdentity'
import useCoinbaseAddress from '../../../../../shared/utils/useCoinbaseAddress'

function FlipMaster({id}) {
  const address = useCoinbaseAddress()
  const {canSubmitFlip} = useIdentity(address)
  const {getDraft, saveDraft, submitFlip} = useFlips()

  const {addNotification} = useContext(NotificationContext)

  const [flip, setFlip] = useState({
    pics: [
      `https://placehold.it/480?text=1`,
      `https://placehold.it/480?text=2`,
      `https://placehold.it/480?text=3`,
      `https://placehold.it/480?text=4`,
    ],
    order: Array.from({length: 4}, (_, i) => i),
    hint: getRandomHint(),
  })

  const [step, setStep] = useState(0)
  const [submitResult, setSubmitResult] = useState()

  useEffect(() => {
    const draft = getDraft(id)
    if (draft) {
      setFlip(draft)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    if (flip.pics.some(hasDataUrl)) {
      saveDraft({id, ...flip})
    }
  }, [id, flip, saveDraft])

  const handleSubmitFlip = async () => {
    try {
      const {result, error} = await submitFlip(flip)
      addNotification({
        title: error ? 'Error while uploading flip' : 'Flip saved!',
        body: error ? error.message : `Hash ${result.hash}`,
        type: error ? NotificationType.Error : NotificationType.Info,
      })
      Router.push('/flips')
    } catch ({response: {status}}) {
      setSubmitResult(
        status === 413
          ? 'Maximum image size exceeded'
          : 'Unexpected error occurred'
      )
    }
  }

  const handleClose = () => {
    addNotification({
      title: 'Flip has been saved to drafts',
    })
    Router.push('/flips')
  }

  const canPublish = true || (flip.pics.every(hasDataUrl) && canSubmitFlip)

  const steps = [
    {
      title: 'Choose the hint',
      desc: 'Choose key words',
      children: (
        <FlipHint
          {...flip}
          onChange={() => setFlip({...flip, hint: getRandomHint()})}
        />
      ),
    },
    {
      title: 'Create a story',
      desc: flip
        ? `Select ${
            flip.pics.length
          } images to create a story with words: ${composeHint(flip.hint)}`
        : '',
      children: (
        <FlipPics
          {...flip}
          onUpdateFlip={nextPics => {
            setFlip({...flip, pics: nextPics})
          }}
        />
      ),
    },
    {
      title: 'Shuffle images',
      children: (
        <FlipShuffle
          {...flip}
          onShuffleFlip={order => {
            setFlip({...flip, order})
          }}
        />
      ),
    },
    {
      title: 'Submit story',
      children: <SubmitFlip {...flip} submitFlipResult={submitResult} />,
    },
  ]

  return (
    <Box>
      <Flex>
        {steps.map(({title}, idx) => (
          <Flex
            key={title}
            align="center"
            css={{
              borderBottom: `solid 2px ${
                idx <= step ? theme.colors.primary : theme.colors.gray3
              }`,
              padding: theme.spacings.normal,
              paddingLeft: idx === 0 ? 0 : '',
            }}
            onClick={() => setStep(idx)}
          >
            <Text
              color={theme.colors.white}
              fontWeight={600}
              css={{
                background: theme.colors.primary,
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                textAlign: 'center',
                verticalAlign: 'middle',
                marginRight: theme.spacings.small,
              }}
            >
              {idx + 1}
            </Text>
            <SubHeading>{title}</SubHeading>
          </Flex>
        ))}
      </Flex>
      {
        steps.map(({title, desc, children}) => (
          <CreateFlipStep
            key={title}
            desc={desc}
            onPrev={() => setStep(step - 1)}
            onNext={() => {
              setStep(step + 1)
            }}
            onClose={handleClose}
            onSubmit={handleSubmitFlip}
            last={step === steps.length - 1}
            allowSubmit={canPublish}
          >
            {children}
          </CreateFlipStep>
        ))[step]
      }
      <Absolute top="1em" right="2em">
        <FiX onClick={handleClose} />
      </Absolute>
    </Box>
  )
}

FlipMaster.propTypes = {
  id: PropTypes.string,
}

export default FlipMaster