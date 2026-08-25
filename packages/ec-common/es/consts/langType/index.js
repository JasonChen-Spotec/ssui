var _antI18nMap, _languages;
import arEG from 'antd/lib/locale/ar_EG';
import enUS from 'antd/lib/locale/en_US';
import esES from 'antd/lib/locale/es_ES';
import frFR from 'antd/lib/locale/fr_FR';
import idID from 'antd/lib/locale/id_ID';
import jaJP from 'antd/lib/locale/ja_JP';
import koKR from 'antd/lib/locale/ko_KR';
import msMY from 'antd/lib/locale/ms_MY';
import ptPT from 'antd/lib/locale/pt_PT';
import thTH from 'antd/lib/locale/th_TH';
import viVN from 'antd/lib/locale/vi_VN';
import zhCN from 'antd/lib/locale/zh_CN';
import zhTW from 'antd/lib/locale/zh_TW';
/** 🇨🇳 中文简体 */
export var ZH = 'zh-CN';
/** 🇪🇸 西班牙语 */
export var ES = 'es';
/** 🇯🇵 日语 */
export var JA = 'ja';
/** 🇫🇷 法语 */
export var FR = 'fr';
/** 🇵🇹 葡萄牙语 */
export var PT = 'pt';
/** 🇹🇭 泰语 */
export var TH = 'th';
/** 🇰🇷 韩国语 */
export var KO = 'ko';
/** 马来西亚语 */
export var MS = 'ms-MY';
/** 🇻🇳 越南语 */
export var VI = 'vi';
/** 🇬🇧 英语 */
export var EN = 'en-US';
/** 🇨🇳 中文繁体 */
export var TW = 'zh-TW';
/** 🇸🇦 阿拉伯语 */
export var AR = 'ar';
/** 🇮🇩 印度尼西亚语 */
export var ID = 'id';
export var antI18nMap = (_antI18nMap = {}, _antI18nMap[ZH] = zhCN, _antI18nMap[EN] = enUS, _antI18nMap[TW] = zhTW, _antI18nMap[ES] = esES, _antI18nMap[FR] = frFR, _antI18nMap[ID] = idID, _antI18nMap[JA] = jaJP, _antI18nMap[KO] = koKR, _antI18nMap[PT] = ptPT, _antI18nMap[AR] = arEG, _antI18nMap[TH] = thTH, _antI18nMap[VI] = viVN, _antI18nMap[MS] = msMY, _antI18nMap);
export var languages = (_languages = {}, _languages[EN] = EN, _languages[TW] = TW, _languages[ZH] = ZH, _languages[ES] = ES, _languages[FR] = FR, _languages[ID] = ID, _languages[JA] = JA, _languages[KO] = KO, _languages[PT] = PT, _languages[AR] = AR, _languages[TH] = TH, _languages[VI] = VI, _languages[MS] = MS, _languages);
export var I18NList = [{
  code: EN,
  iso: EN,
  name: 'English'
}, {
  code: TW,
  iso: TW,
  name: '繁體中文'
}, {
  code: ZH,
  iso: ZH,
  name: '简体中文'
}, {
  code: ES,
  iso: ES,
  name: 'Español'
}, {
  code: FR,
  iso: FR,
  name: 'Français'
}, {
  code: ID,
  iso: ID,
  name: 'Bahasa Indonesia'
}, {
  code: JA,
  iso: JA,
  name: '日本語'
}, {
  code: KO,
  iso: KO,
  name: '한국어'
}, {
  code: PT,
  iso: PT,
  name: 'Português'
}, {
  code: AR,
  iso: AR,
  name: 'العربية'
}, {
  code: TH,
  iso: TH,
  name: 'ภาษาไทย'
}, {
  code: VI,
  iso: VI,
  name: 'Tiếng Việt'
}, {
  code: MS,
  iso: MS,
  name: 'Bahasa Melayu'
}];