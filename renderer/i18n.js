/* eslint-disable camelcase */
import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import {loadPersistentStateValue} from './shared/utils/persist'

import en_translation from '../locales/en/translation.json'
import en_error from '../locales/en/error.json'
import ri_translation from '../locales/id/translation.json'
import ri_error from '../locales/id/error.json'
import fr_translation from '../locales/fr/translation.json'
import fr_error from '../locales/fr/error.json'
import de_translation from '../locales/de/translation.json'
import de_error from '../locales/de/error.json'
import es_translation from '../locales/es/translation.json'
import es_error from '../locales/es/error.json'
import ru_translation from '../locales/ru/translation.json'
import ru_error from '../locales/ru/error.json'
import zh_translation from '../locales/zh/translation.json'
import zh_error from '../locales/zh/error.json'
import ko_translation from '../locales/ko/translation.json'
import ko_error from '../locales/ko/error.json'
import hr_translation from '../locales/hr/translation.json'
import hr_error from '../locales/hr/error.json'
import uk_translation from '../locales/uk/translation.json'
import uk_error from '../locales/uk/error.json'
import sr_translation from '../locales/sr/translation.json'
import sr_error from '../locales/sr/error.json'
import ro_translation from '../locales/ro/translation.json'
import ro_error from '../locales/ro/error.json'
import it_translation from '../locales/it/translation.json'
import it_error from '../locales/it/error.json'
import pt_translation from '../locales/pt/translation.json'
import pt_error from '../locales/pt/error.json'
import sl_translation from '../locales/sl/translation.json'
import sl_error from '../locales/sl/error.json'
import hi_translation from '../locales/hi/translation.json'
import hi_error from '../locales/hi/error.json'
import pl_translation from '../locales/pl/translation.json'
import pl_error from '../locales/pl/error.json'
import tr_translation from '../locales/tr/translation.json'
import tr_error from '../locales/tr/error.json'
import bg_translation from '../locales/bg/translation.json'
import bg_error from '../locales/bg/error.json'
import sv_translation from '../locales/sv/translation.json'
import sv_error from '../locales/sv/error.json'
import ja_translation from '../locales/ja/translation.json'
import ja_error from '../locales/ja/error.json'

export const AVAILABLE_LANGS = [
  'en',
  'id',
  'fr',
  'de',
  'es',
  'ru',
  'zh',
  'ko',
  'hr',
  'hi',
  'uk',
  'sr',
  'ro',
  'it',
  'pt',
  'pl',
  'sl',
  'tr',
  'bg',
  'sv',
  'ja',
]

export const isoLangs = {
  ab: {
    name: 'Abkhaz',
    nativeName: '??????????',
  },
  aa: {
    name: 'Afar',
    nativeName: 'Afaraf',
  },
  af: {
    name: 'Afrikaans',
    nativeName: 'Afrikaans',
  },
  ak: {
    name: 'Akan',
    nativeName: 'Akan',
  },
  sq: {
    name: 'Albanian',
    nativeName: 'Shqip',
  },
  am: {
    name: 'Amharic',
    nativeName: '????????????',
  },
  ar: {
    name: 'Arabic',
    nativeName: '??????????????',
  },
  an: {
    name: 'Aragonese',
    nativeName: 'Aragon??s',
  },
  hy: {
    name: 'Armenian',
    nativeName: '??????????????',
  },
  as: {
    name: 'Assamese',
    nativeName: '?????????????????????',
  },
  av: {
    name: 'Avaric',
    nativeName: '???????? ????????, ???????????????? ????????',
  },
  ae: {
    name: 'Avestan',
    nativeName: 'avesta',
  },
  ay: {
    name: 'Aymara',
    nativeName: 'aymar aru',
  },
  az: {
    name: 'Azerbaijani',
    nativeName: 'az??rbaycan dili',
  },
  bm: {
    name: 'Bambara',
    nativeName: 'bamanankan',
  },
  ba: {
    name: 'Bashkir',
    nativeName: '?????????????? ????????',
  },
  eu: {
    name: 'Basque',
    nativeName: 'euskara, euskera',
  },
  be: {
    name: 'Belarusian',
    nativeName: '????????????????????',
  },
  bn: {
    name: 'Bengali',
    nativeName: '???????????????',
  },
  bh: {
    name: 'Bihari',
    nativeName: '?????????????????????',
  },
  bi: {
    name: 'Bislama',
    nativeName: 'Bislama',
  },
  bs: {
    name: 'Bosnian',
    nativeName: 'bosanski jezik',
  },
  br: {
    name: 'Breton',
    nativeName: 'brezhoneg',
  },
  bg: {
    name: 'Bulgarian',
    nativeName: '?????????????????? ????????',
  },
  my: {
    name: 'Burmese',
    nativeName: '???????????????',
  },
  ca: {
    name: 'Catalan; Valencian',
    nativeName: 'Catal??',
  },
  ch: {
    name: 'Chamorro',
    nativeName: 'Chamoru',
  },
  ce: {
    name: 'Chechen',
    nativeName: '?????????????? ????????',
  },
  ny: {
    name: 'Chichewa; Chewa; Nyanja',
    nativeName: 'chiChe??a, chinyanja',
  },
  zh: {
    name: 'Chinese',
    nativeName: '?????? (Zh??ngw??n), ??????, ??????',
  },
  cv: {
    name: 'Chuvash',
    nativeName: '?????????? ??????????',
  },
  kw: {
    name: 'Cornish',
    nativeName: 'Kernewek',
  },
  co: {
    name: 'Corsican',
    nativeName: 'corsu, lingua corsa',
  },
  cr: {
    name: 'Cree',
    nativeName: '?????????????????????',
  },
  hr: {
    name: 'Croatian',
    nativeName: 'hrvatski',
  },
  cs: {
    name: 'Czech',
    nativeName: '??esky, ??e??tina',
  },
  da: {
    name: 'Danish',
    nativeName: 'dansk',
  },
  dv: {
    name: 'Divehi; Dhivehi; Maldivian;',
    nativeName: '????????????',
  },
  nl: {
    name: 'Dutch',
    nativeName: 'Nederlands, Vlaams',
  },
  en: {
    name: 'English',
    nativeName: 'English',
  },
  eo: {
    name: 'Esperanto',
    nativeName: 'Esperanto',
  },
  et: {
    name: 'Estonian',
    nativeName: 'eesti, eesti keel',
  },
  ee: {
    name: 'Ewe',
    nativeName: 'E??egbe',
  },
  fo: {
    name: 'Faroese',
    nativeName: 'f??royskt',
  },
  fj: {
    name: 'Fijian',
    nativeName: 'vosa Vakaviti',
  },
  fi: {
    name: 'Finnish',
    nativeName: 'suomi, suomen kieli',
  },
  fr: {
    name: 'French',
    nativeName: 'fran??ais, langue fran??aise',
  },
  ff: {
    name: 'Fula; Fulah; Pulaar; Pular',
    nativeName: 'Fulfulde, Pulaar, Pular',
  },
  gl: {
    name: 'Galician',
    nativeName: 'Galego',
  },
  ka: {
    name: 'Georgian',
    nativeName: '?????????????????????',
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
  },
  el: {
    name: 'Greek, Modern',
    nativeName: '????????????????',
  },
  gn: {
    name: 'Guaran??',
    nativeName: 'Ava??e???',
  },
  gu: {
    name: 'Gujarati',
    nativeName: '?????????????????????',
  },
  ht: {
    name: 'Haitian; Haitian Creole',
    nativeName: 'Krey??l ayisyen',
  },
  ha: {
    name: 'Hausa',
    nativeName: 'Hausa, ????????????',
  },
  he: {
    name: 'Hebrew (modern)',
    nativeName: '??????????',
  },
  hz: {
    name: 'Herero',
    nativeName: 'Otjiherero',
  },
  hi: {
    name: 'Hindi',
    nativeName: '??????????????????, ???????????????',
  },
  ho: {
    name: 'Hiri Motu',
    nativeName: 'Hiri Motu',
  },
  hu: {
    name: 'Hungarian',
    nativeName: 'Magyar',
  },
  ia: {
    name: 'Interlingua',
    nativeName: 'Interlingua',
  },
  id: {
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
  },
  ie: {
    name: 'Interlingue',
    nativeName: 'Originally called Occidental; then Interlingue after WWII',
  },
  ga: {
    name: 'Irish',
    nativeName: 'Gaeilge',
  },
  ig: {
    name: 'Igbo',
    nativeName: 'As???s??? Igbo',
  },
  ik: {
    name: 'Inupiaq',
    nativeName: 'I??upiaq, I??upiatun',
  },
  io: {
    name: 'Ido',
    nativeName: 'Ido',
  },
  is: {
    name: 'Icelandic',
    nativeName: '??slenska',
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
  },
  iu: {
    name: 'Inuktitut',
    nativeName: '??????????????????',
  },
  ja: {
    name: 'Japanese',
    nativeName: '????????? (??????????????????????????????)',
  },
  jv: {
    name: 'Javanese',
    nativeName: 'basa Jawa',
  },
  kl: {
    name: 'Kalaallisut, Greenlandic',
    nativeName: 'kalaallisut, kalaallit oqaasii',
  },
  kn: {
    name: 'Kannada',
    nativeName: '???????????????',
  },
  kr: {
    name: 'Kanuri',
    nativeName: 'Kanuri',
  },
  ks: {
    name: 'Kashmiri',
    nativeName: '?????????????????????, ???????????????',
  },
  kk: {
    name: 'Kazakh',
    nativeName: '?????????? ????????',
  },
  km: {
    name: 'Khmer',
    nativeName: '???????????????????????????',
  },
  ki: {
    name: 'Kikuyu, Gikuyu',
    nativeName: 'G??k??y??',
  },
  rw: {
    name: 'Kinyarwanda',
    nativeName: 'Ikinyarwanda',
  },
  ky: {
    name: 'Kirghiz, Kyrgyz',
    nativeName: '???????????? ????????',
  },
  kv: {
    name: 'Komi',
    nativeName: '???????? ??????',
  },
  kg: {
    name: 'Kongo',
    nativeName: 'KiKongo',
  },
  ko: {
    name: 'Korean',
    nativeName: '????????? (?????????), ????????? (?????????)',
  },
  ku: {
    name: 'Kurdish',
    nativeName: 'Kurd??, ?????????????',
  },
  kj: {
    name: 'Kwanyama, Kuanyama',
    nativeName: 'Kuanyama',
  },
  la: {
    name: 'Latin',
    nativeName: 'latine, lingua latina',
  },
  lb: {
    name: 'Luxembourgish, Letzeburgesch',
    nativeName: 'L??tzebuergesch',
  },
  lg: {
    name: 'Luganda',
    nativeName: 'Luganda',
  },
  li: {
    name: 'Limburgish, Limburgan, Limburger',
    nativeName: 'Limburgs',
  },
  ln: {
    name: 'Lingala',
    nativeName: 'Ling??la',
  },
  lo: {
    name: 'Lao',
    nativeName: '?????????????????????',
  },
  lt: {
    name: 'Lithuanian',
    nativeName: 'lietuvi?? kalba',
  },
  lu: {
    name: 'Luba-Katanga',
    nativeName: '',
  },
  lv: {
    name: 'Latvian',
    nativeName: 'latvie??u valoda',
  },
  gv: {
    name: 'Manx',
    nativeName: 'Gaelg, Gailck',
  },
  mk: {
    name: 'Macedonian',
    nativeName: '???????????????????? ??????????',
  },
  mg: {
    name: 'Malagasy',
    nativeName: 'Malagasy fiteny',
  },
  ms: {
    name: 'Malay',
    nativeName: 'bahasa Melayu, ???????? ?????????????',
  },
  ml: {
    name: 'Malayalam',
    nativeName: '??????????????????',
  },
  mt: {
    name: 'Maltese',
    nativeName: 'Malti',
  },
  mi: {
    name: 'M??ori',
    nativeName: 'te reo M??ori',
  },
  mr: {
    name: 'Marathi (Mar?????h??)',
    nativeName: '???????????????',
  },
  mh: {
    name: 'Marshallese',
    nativeName: 'Kajin M??aje??',
  },
  mn: {
    name: 'Mongolian',
    nativeName: '????????????',
  },
  na: {
    name: 'Nauru',
    nativeName: 'Ekakair?? Naoero',
  },
  nv: {
    name: 'Navajo, Navaho',
    nativeName: 'Din?? bizaad, Din??k??eh????',
  },
  nb: {
    name: 'Norwegian Bokm??l',
    nativeName: 'Norsk bokm??l',
  },
  nd: {
    name: 'North Ndebele',
    nativeName: 'isiNdebele',
  },
  ne: {
    name: 'Nepali',
    nativeName: '??????????????????',
  },
  ng: {
    name: 'Ndonga',
    nativeName: 'Owambo',
  },
  nn: {
    name: 'Norwegian Nynorsk',
    nativeName: 'Norsk nynorsk',
  },
  no: {
    name: 'Norwegian',
    nativeName: 'Norsk',
  },
  ii: {
    name: 'Nuosu',
    nativeName: '????????? Nuosuhxop',
  },
  nr: {
    name: 'South Ndebele',
    nativeName: 'isiNdebele',
  },
  oc: {
    name: 'Occitan',
    nativeName: 'Occitan',
  },
  oj: {
    name: 'Ojibwe, Ojibwa',
    nativeName: '????????????????????????',
  },
  cu: {
    name:
      'Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic',
    nativeName: '?????????? ????????????????????',
  },
  om: {
    name: 'Oromo',
    nativeName: 'Afaan Oromoo',
  },
  or: {
    name: 'Oriya',
    nativeName: '???????????????',
  },
  os: {
    name: 'Ossetian, Ossetic',
    nativeName: '???????? ??????????',
  },
  pa: {
    name: 'Panjabi, Punjabi',
    nativeName: '??????????????????, ???????????????',
  },
  pi: {
    name: 'P??li',
    nativeName: '????????????',
  },
  fa: {
    name: 'Persian',
    nativeName: '??????????',
  },
  pl: {
    name: 'Polish',
    nativeName: 'polski',
  },
  ps: {
    name: 'Pashto, Pushto',
    nativeName: '????????',
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Portugu??s',
  },
  qu: {
    name: 'Quechua',
    nativeName: 'Runa Simi, Kichwa',
  },
  rm: {
    name: 'Romansh',
    nativeName: 'rumantsch grischun',
  },
  rn: {
    name: 'Kirundi',
    nativeName: 'kiRundi',
  },
  ro: {
    name: 'Romanian, Moldavian, Moldovan',
    nativeName: 'rom??n??',
  },
  ru: {
    name: 'Russian',
    nativeName: '?????????????? ????????',
  },
  sa: {
    name: 'Sanskrit (Sa???sk???ta)',
    nativeName: '???????????????????????????',
  },
  sc: {
    name: 'Sardinian',
    nativeName: 'sardu',
  },
  sd: {
    name: 'Sindhi',
    nativeName: '??????????????????, ?????????? ?????????????',
  },
  se: {
    name: 'Northern Sami',
    nativeName: 'Davvis??megiella',
  },
  sm: {
    name: 'Samoan',
    nativeName: 'gagana faa Samoa',
  },
  sg: {
    name: 'Sango',
    nativeName: 'y??ng?? t?? s??ng??',
  },
  sr: {
    name: 'Serbian',
    nativeName: '???????????? ??????????',
  },
  gd: {
    name: 'Scottish Gaelic; Gaelic',
    nativeName: 'G??idhlig',
  },
  sn: {
    name: 'Shona',
    nativeName: 'chiShona',
  },
  si: {
    name: 'Sinhala, Sinhalese',
    nativeName: '???????????????',
  },
  sk: {
    name: 'Slovak',
    nativeName: 'sloven??ina',
  },
  sl: {
    name: 'Slovene',
    nativeName: 'sloven????ina',
  },
  so: {
    name: 'Somali',
    nativeName: 'Soomaaliga, af Soomaali',
  },
  st: {
    name: 'Southern Sotho',
    nativeName: 'Sesotho',
  },
  es: {
    name: 'Spanish; Castilian',
    nativeName: 'espa??ol, castellano',
  },
  su: {
    name: 'Sundanese',
    nativeName: 'Basa Sunda',
  },
  sw: {
    name: 'Swahili',
    nativeName: 'Kiswahili',
  },
  ss: {
    name: 'Swati',
    nativeName: 'SiSwati',
  },
  sv: {
    name: 'Swedish',
    nativeName: 'svenska',
  },
  ta: {
    name: 'Tamil',
    nativeName: '???????????????',
  },
  te: {
    name: 'Telugu',
    nativeName: '??????????????????',
  },
  tg: {
    name: 'Tajik',
    nativeName: '????????????, to??ik??, ???????????????',
  },
  th: {
    name: 'Thai',
    nativeName: '?????????',
  },
  ti: {
    name: 'Tigrinya',
    nativeName: '????????????',
  },
  bo: {
    name: 'Tibetan Standard, Tibetan, Central',
    nativeName: '?????????????????????',
  },
  tk: {
    name: 'Turkmen',
    nativeName: 'T??rkmen, ??????????????',
  },
  tl: {
    name: 'Tagalog',
    nativeName: 'Wikang Tagalog, ??????????????? ??????????????????',
  },
  tn: {
    name: 'Tswana',
    nativeName: 'Setswana',
  },
  to: {
    name: 'Tonga (Tonga Islands)',
    nativeName: 'faka Tonga',
  },
  tr: {
    name: 'Turkish',
    nativeName: 'T??rk??e',
  },
  ts: {
    name: 'Tsonga',
    nativeName: 'Xitsonga',
  },
  tt: {
    name: 'Tatar',
    nativeName: '??????????????, tatar??a, ?????????????????',
  },
  tw: {
    name: 'Twi',
    nativeName: 'Twi',
  },
  ty: {
    name: 'Tahitian',
    nativeName: 'Reo Tahiti',
  },
  ug: {
    name: 'Uighur, Uyghur',
    nativeName: 'Uy??urq??, ???????????????????',
  },
  uk: {
    name: 'Ukrainian',
    nativeName: '????????????????????',
  },
  ur: {
    name: 'Urdu',
    nativeName: '????????',
  },
  uz: {
    name: 'Uzbek',
    nativeName: 'zbek, ??????????, ???????????????',
  },
  ve: {
    name: 'Venda',
    nativeName: 'Tshiven???a',
  },
  vi: {
    name: 'Vietnamese',
    nativeName: 'Ti???ng Vi???t',
  },
  vo: {
    name: 'Volap??k',
    nativeName: 'Volap??k',
  },
  wa: {
    name: 'Walloon',
    nativeName: 'Walon',
  },
  cy: {
    name: 'Welsh',
    nativeName: 'Cymraeg',
  },
  wo: {
    name: 'Wolof',
    nativeName: 'Wollof',
  },
  fy: {
    name: 'Western Frisian',
    nativeName: 'Frysk',
  },
  xh: {
    name: 'Xhosa',
    nativeName: 'isiXhosa',
  },
  yi: {
    name: 'Yiddish',
    nativeName: '????????????',
  },
  yo: {
    name: 'Yoruba',
    nativeName: 'Yor??b??',
  },
  za: {
    name: 'Zhuang, Chuang',
    nativeName: 'Sa?? cue????, Saw cuengh',
  },
}

i18n.use(initReactI18next).init({
  debug: global.isDev,
  resources: {
    en: {translation: en_translation, error: en_error},
    id: {translation: ri_translation, error: ri_error},
    fr: {translation: fr_translation, error: fr_error},
    de: {translation: de_translation, error: de_error},
    es: {translation: es_translation, error: es_error},
    ru: {translation: ru_translation, error: ru_error},
    zh: {translation: zh_translation, error: zh_error},
    ko: {translation: ko_translation, error: ko_error},
    hr: {translation: hr_translation, error: hr_error},
    hi: {translation: hi_translation, error: hi_error},
    uk: {translation: uk_translation, error: uk_error},
    sr: {translation: sr_translation, error: sr_error},
    ro: {translation: ro_translation, error: ro_error},
    it: {translation: it_translation, error: it_error},
    pt: {translation: pt_translation, error: pt_error},
    pl: {translation: pl_translation, error: pl_error},
    sl: {translation: sl_translation, error: sl_error},
    tr: {translation: tr_translation, error: tr_error},
    bg: {translation: bg_translation, error: bg_error},
    sv: {translation: sv_translation, error: sv_error},
    ja: {translation: ja_translation, error: ja_error},
  },
  lng: loadPersistentStateValue('settings', 'lng'),
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
