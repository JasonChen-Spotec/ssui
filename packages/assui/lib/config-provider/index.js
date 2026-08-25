"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var ar_EG_1 = tslib_1.__importDefault(require("../messages/ar_EG"));
var bg_BG_1 = tslib_1.__importDefault(require("../messages/bg_BG"));
var cs_CZ_1 = tslib_1.__importDefault(require("../messages/cs_CZ"));
var de_DE_1 = tslib_1.__importDefault(require("../messages/de_DE"));
var en_US_1 = tslib_1.__importDefault(require("../messages/en_US"));
var es_ES_1 = tslib_1.__importDefault(require("../messages/es_ES"));
var fi_FI_1 = tslib_1.__importDefault(require("../messages/fi_FI"));
var fr_FR_1 = tslib_1.__importDefault(require("../messages/fr_FR"));
var id_ID_1 = tslib_1.__importDefault(require("../messages/id_ID"));
var it_IT_1 = tslib_1.__importDefault(require("../messages/it_IT"));
var ja_JP_1 = tslib_1.__importDefault(require("../messages/ja_JP"));
var ko_KR_1 = tslib_1.__importDefault(require("../messages/ko_KR"));
var ms_MY_1 = tslib_1.__importDefault(require("../messages/ms_MY"));
var nb_NO_1 = tslib_1.__importDefault(require("../messages/nb_NO"));
var nl_NL_1 = tslib_1.__importDefault(require("../messages/nl_NL"));
var pt_PT_1 = tslib_1.__importDefault(require("../messages/pt_PT"));
var ro_RO_1 = tslib_1.__importDefault(require("../messages/ro_RO"));
var ru_RU_1 = tslib_1.__importDefault(require("../messages/ru_RU"));
var sv_SE_1 = tslib_1.__importDefault(require("../messages/sv_SE"));
var th_TH_1 = tslib_1.__importDefault(require("../messages/th_TH"));
var ug_UG_1 = tslib_1.__importDefault(require("../messages/ug_UG"));
var vi_VN_1 = tslib_1.__importDefault(require("../messages/vi_VN"));
var zh_CN_1 = tslib_1.__importDefault(require("../messages/zh_CN"));
var zh_TW_1 = tslib_1.__importDefault(require("../messages/zh_TW"));
var context_1 = tslib_1.__importDefault(require("./context"));
var ConfigProvider = function ConfigProvider(props) {
  var children = props.children,
    locale = props.locale;
  var messagesMap = {
    'en-US': en_US_1["default"].lang,
    'zh-CN': zh_CN_1["default"].lang,
    'zh-TW': zh_TW_1["default"].lang,
    'bg': bg_BG_1["default"].lang,
    'cs': cs_CZ_1["default"].lang,
    'de': de_DE_1["default"].lang,
    'es': es_ES_1["default"].lang,
    'fr': fr_FR_1["default"].lang,
    'fi': fi_FI_1["default"].lang,
    'it': it_IT_1["default"].lang,
    'id': id_ID_1["default"].lang,
    'ja': ja_JP_1["default"].lang,
    'ko': ko_KR_1["default"].lang,
    'nl': nl_NL_1["default"].lang,
    'nb-NO': nb_NO_1["default"].lang,
    'ru': ru_RU_1["default"].lang,
    'sv': sv_SE_1["default"].lang,
    'pt': pt_PT_1["default"].lang,
    'ar': ar_EG_1["default"].lang,
    'th': th_TH_1["default"].lang,
    'ro': ro_RO_1["default"].lang,
    'vi': vi_VN_1["default"].lang,
    'ug': ug_UG_1["default"].lang,
    'ms-MY': ms_MY_1["default"].lang
  };
  return (0, jsx_runtime_1.jsx)(context_1["default"].Provider, {
    value: messagesMap[locale],
    children: children
  });
};
exports["default"] = ConfigProvider;