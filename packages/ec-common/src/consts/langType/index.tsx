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
export const ZH = 'zh-CN' as const;
/** 🇪🇸 西班牙语 */
export const ES = 'es' as const;
/** 🇯🇵 日语 */
export const JA = 'ja' as const;
/** 🇫🇷 法语 */
export const FR = 'fr' as const;
/** 🇵🇹 葡萄牙语 */
export const PT = 'pt' as const;
/** 🇹🇭 泰语 */
export const TH = 'th' as const;
/** 🇰🇷 韩国语 */
export const KO = 'ko' as const;
/** 马来西亚语 */
export const MS = 'ms-MY' as const;
/** 🇻🇳 越南语 */
export const VI = 'vi' as const;
/** 🇬🇧 英语 */
export const EN = 'en-US' as const;
/** 🇨🇳 中文繁体 */
export const TW = 'zh-TW' as const;
/** 🇸🇦 阿拉伯语 */
export const AR = 'ar' as const;
/** 🇮🇩 印度尼西亚语 */
export const ID = 'id' as const;

export const antI18nMap = {
  [ZH]: zhCN,
  [EN]: enUS,
  [TW]: zhTW,
  [ES]: esES,
  [FR]: frFR,
  [ID]: idID,
  [JA]: jaJP,
  [KO]: koKR,
  [PT]: ptPT,
  [AR]: arEG,
  [TH]: thTH,
  [VI]: viVN,
  [MS]: msMY,
};

export const languages = {
  [EN]: EN,
  [TW]: TW,
  [ZH]: ZH,
  [ES]: ES,
  [FR]: FR,
  [ID]: ID,
  [JA]: JA,
  [KO]: KO,
  [PT]: PT,
  [AR]: AR,
  [TH]: TH,
  [VI]: VI,
  [MS]: MS,
};

export type Languages = keyof typeof languages;

export const I18NList = [
  {
    code: EN,
    iso: EN,
    name: 'English',
  },
  {
    code: TW,
    iso: TW,
    name: '繁體中文',
  },
  {
    code: ZH,
    iso: ZH,
    name: '简体中文',
  },
  {
    code: ES,
    iso: ES,
    name: 'Español',
  },
  {
    code: FR,
    iso: FR,
    name: 'Français',
  },
  {
    code: ID,
    iso: ID,
    name: 'Bahasa Indonesia',
  },
  {
    code: JA,
    iso: JA,
    name: '日本語',
  },
  {
    code: KO,
    iso: KO,
    name: '한국어',
  },
  {
    code: PT,
    iso: PT,
    name: 'Português',
  },
  {
    code: AR,
    iso: AR,
    name: 'العربية',
  },
  {
    code: TH,
    iso: TH,
    name: 'ภาษาไทย',
  },
  {
    code: VI,
    iso: VI,
    name: 'Tiếng Việt',
  },
  {
    code: MS,
    iso: MS,
    name: 'Bahasa Melayu',
  },
] as const;
