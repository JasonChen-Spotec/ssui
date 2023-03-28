import React from 'react';
import LocaleContext from './context';
import zhCN from '../messages/zh_CN';
import enUS from '../messages/en_US';
import zhTW from '../messages/zh_TW';
import bgBG from '../messages/bg_BG';
import csCZ from '../messages/cs_CZ';
import deDE from '../messages/de_DE';
import esES from '../messages/es_ES';
import frFR from '../messages/fr_FR';
import fiFI from '../messages/fi_FI';
import itIT from '../messages/it_IT';
import idID from '../messages/id_ID';
import jaJP from '../messages/ja_JP';
import koKR from '../messages/ko_KR';
import nlNL from '../messages/nl_NL';
import nbNO from '../messages/nb_NO';
import ruRU from '../messages/ru_RU';
import svSE from '../messages/sv_SE';
import ptPT from '../messages/pt_PT';
import arEG from '../messages/ar_EG';
import thTH from '../messages/th_TH';
import roRO from '../messages/ro_RO';
import viVN from '../messages/vi_VN';
import ugUG from '../messages/ug_UG';

export type LocaleType =
  | 'en-US'
  | 'zh-CN'
  | 'zh-TW'
  | 'bg'
  | 'cs'
  | 'de'
  | 'es'
  | 'fr'
  | 'fi'
  | 'it'
  | 'id'
  | 'ja'
  | 'ko'
  | 'nl'
  | 'nb-NO'
  | 'ru'
  | 'sv'
  | 'pt'
  | 'ar'
  | 'th'
  | 'ro'
  | 'vi'
  | 'ug';

export interface ConfigProviderProps {
  children?: React.ReactNode;
  locale: LocaleType;
}

const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  const { children, locale } = props;
  const messagesMap = {
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
  };

  return (
    <LocaleContext.Provider value={messagesMap[locale]}>
      {children}
    </LocaleContext.Provider>
  );
};

export default ConfigProvider;
