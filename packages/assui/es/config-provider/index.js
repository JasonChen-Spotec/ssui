import { jsx as _jsx } from "react/jsx-runtime";
import arEG from '../messages/ar_EG';
import bgBG from '../messages/bg_BG';
import csCZ from '../messages/cs_CZ';
import deDE from '../messages/de_DE';
import enUS from '../messages/en_US';
import esES from '../messages/es_ES';
import fiFI from '../messages/fi_FI';
import frFR from '../messages/fr_FR';
import idID from '../messages/id_ID';
import itIT from '../messages/it_IT';
import jaJP from '../messages/ja_JP';
import koKR from '../messages/ko_KR';
import msMY from '../messages/ms_MY';
import nbNO from '../messages/nb_NO';
import nlNL from '../messages/nl_NL';
import ptPT from '../messages/pt_PT';
import roRO from '../messages/ro_RO';
import ruRU from '../messages/ru_RU';
import svSE from '../messages/sv_SE';
import thTH from '../messages/th_TH';
import ugUG from '../messages/ug_UG';
import viVN from '../messages/vi_VN';
import zhCN from '../messages/zh_CN';
import zhTW from '../messages/zh_TW';
import LocaleContext from './context';
var ConfigProvider = function ConfigProvider(props) {
  var children = props.children,
    locale = props.locale;
  var messagesMap = {
    'en-US': enUS.lang,
    'zh-CN': zhCN.lang,
    'zh-TW': zhTW.lang,
    'bg': bgBG.lang,
    'cs': csCZ.lang,
    'de': deDE.lang,
    'es': esES.lang,
    'fr': frFR.lang,
    'fi': fiFI.lang,
    'it': itIT.lang,
    'id': idID.lang,
    'ja': jaJP.lang,
    'ko': koKR.lang,
    'nl': nlNL.lang,
    'nb-NO': nbNO.lang,
    'ru': ruRU.lang,
    'sv': svSE.lang,
    'pt': ptPT.lang,
    'ar': arEG.lang,
    'th': thTH.lang,
    'ro': roRO.lang,
    'vi': viVN.lang,
    'ug': ugUG.lang,
    'ms-MY': msMY.lang
  };
  return _jsx(LocaleContext.Provider, {
    value: messagesMap[locale],
    children: children
  });
};
export default ConfigProvider;