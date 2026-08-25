"use strict";

var _exports$antI18nMap, _exports$languages;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18NList = exports.languages = exports.antI18nMap = exports.ID = exports.AR = exports.TW = exports.EN = exports.VI = exports.MS = exports.KO = exports.TH = exports.PT = exports.FR = exports.JA = exports.ES = exports.ZH = void 0;
var tslib_1 = require("tslib");
var ar_EG_1 = tslib_1.__importDefault(require("antd/lib/locale/ar_EG"));
var en_US_1 = tslib_1.__importDefault(require("antd/lib/locale/en_US"));
var es_ES_1 = tslib_1.__importDefault(require("antd/lib/locale/es_ES"));
var fr_FR_1 = tslib_1.__importDefault(require("antd/lib/locale/fr_FR"));
var id_ID_1 = tslib_1.__importDefault(require("antd/lib/locale/id_ID"));
var ja_JP_1 = tslib_1.__importDefault(require("antd/lib/locale/ja_JP"));
var ko_KR_1 = tslib_1.__importDefault(require("antd/lib/locale/ko_KR"));
var ms_MY_1 = tslib_1.__importDefault(require("antd/lib/locale/ms_MY"));
var pt_PT_1 = tslib_1.__importDefault(require("antd/lib/locale/pt_PT"));
var th_TH_1 = tslib_1.__importDefault(require("antd/lib/locale/th_TH"));
var vi_VN_1 = tslib_1.__importDefault(require("antd/lib/locale/vi_VN"));
var zh_CN_1 = tslib_1.__importDefault(require("antd/lib/locale/zh_CN"));
var zh_TW_1 = tslib_1.__importDefault(require("antd/lib/locale/zh_TW"));
/** 🇨🇳 中文简体 */
exports.ZH = 'zh-CN';
/** 🇪🇸 西班牙语 */
exports.ES = 'es';
/** 🇯🇵 日语 */
exports.JA = 'ja';
/** 🇫🇷 法语 */
exports.FR = 'fr';
/** 🇵🇹 葡萄牙语 */
exports.PT = 'pt';
/** 🇹🇭 泰语 */
exports.TH = 'th';
/** 🇰🇷 韩国语 */
exports.KO = 'ko';
/** 马来西亚语 */
exports.MS = 'ms-MY';
/** 🇻🇳 越南语 */
exports.VI = 'vi';
/** 🇬🇧 英语 */
exports.EN = 'en-US';
/** 🇨🇳 中文繁体 */
exports.TW = 'zh-TW';
/** 🇸🇦 阿拉伯语 */
exports.AR = 'ar';
/** 🇮🇩 印度尼西亚语 */
exports.ID = 'id';
exports.antI18nMap = (_exports$antI18nMap = {}, _exports$antI18nMap[exports.ZH] = zh_CN_1["default"], _exports$antI18nMap[exports.EN] = en_US_1["default"], _exports$antI18nMap[exports.TW] = zh_TW_1["default"], _exports$antI18nMap[exports.ES] = es_ES_1["default"], _exports$antI18nMap[exports.FR] = fr_FR_1["default"], _exports$antI18nMap[exports.ID] = id_ID_1["default"], _exports$antI18nMap[exports.JA] = ja_JP_1["default"], _exports$antI18nMap[exports.KO] = ko_KR_1["default"], _exports$antI18nMap[exports.PT] = pt_PT_1["default"], _exports$antI18nMap[exports.AR] = ar_EG_1["default"], _exports$antI18nMap[exports.TH] = th_TH_1["default"], _exports$antI18nMap[exports.VI] = vi_VN_1["default"], _exports$antI18nMap[exports.MS] = ms_MY_1["default"], _exports$antI18nMap);
exports.languages = (_exports$languages = {}, _exports$languages[exports.EN] = exports.EN, _exports$languages[exports.TW] = exports.TW, _exports$languages[exports.ZH] = exports.ZH, _exports$languages[exports.ES] = exports.ES, _exports$languages[exports.FR] = exports.FR, _exports$languages[exports.ID] = exports.ID, _exports$languages[exports.JA] = exports.JA, _exports$languages[exports.KO] = exports.KO, _exports$languages[exports.PT] = exports.PT, _exports$languages[exports.AR] = exports.AR, _exports$languages[exports.TH] = exports.TH, _exports$languages[exports.VI] = exports.VI, _exports$languages[exports.MS] = exports.MS, _exports$languages);
exports.I18NList = [{
  code: exports.EN,
  iso: exports.EN,
  name: 'English'
}, {
  code: exports.TW,
  iso: exports.TW,
  name: '繁體中文'
}, {
  code: exports.ZH,
  iso: exports.ZH,
  name: '简体中文'
}, {
  code: exports.ES,
  iso: exports.ES,
  name: 'Español'
}, {
  code: exports.FR,
  iso: exports.FR,
  name: 'Français'
}, {
  code: exports.ID,
  iso: exports.ID,
  name: 'Bahasa Indonesia'
}, {
  code: exports.JA,
  iso: exports.JA,
  name: '日本語'
}, {
  code: exports.KO,
  iso: exports.KO,
  name: '한국어'
}, {
  code: exports.PT,
  iso: exports.PT,
  name: 'Português'
}, {
  code: exports.AR,
  iso: exports.AR,
  name: 'العربية'
}, {
  code: exports.TH,
  iso: exports.TH,
  name: 'ภาษาไทย'
}, {
  code: exports.VI,
  iso: exports.VI,
  name: 'Tiếng Việt'
}, {
  code: exports.MS,
  iso: exports.MS,
  name: 'Bahasa Melayu'
}];