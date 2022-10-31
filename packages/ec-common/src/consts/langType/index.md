---
mobile: false
title: langType
nav:
  title: ec-common
  path: /ec-common
group:
  title: consts
  path: /consts
  order: 1
---


<code inline=true hideActions='["CSB"]' src="./demo/base.tsx" />


## langType

## code

```ts
import React from 'react';
import zhCN from 'antd/lib/locale/zh_CN';
import enUS from 'antd/lib/locale/en_US';
import zhTW from 'antd/lib/locale/zh_TW';
import bgBG from 'antd/lib/locale/bg_BG';
import csCZ from 'antd/lib/locale/cs_CZ';
import deDE from 'antd/lib/locale/de_DE';
import esES from 'antd/lib/locale/es_ES';
import frFR from 'antd/lib/locale/fr_FR';
import fiFI from 'antd/lib/locale/fi_FI';
import itIT from 'antd/lib/locale/it_IT';
import idID from 'antd/lib/locale/id_ID';
import jaJP from 'antd/lib/locale/ja_JP';
import koKR from 'antd/lib/locale/ko_KR';
import nlNL from 'antd/lib/locale/nl_NL';
import nbNO from 'antd/lib/locale/nb_NO';
import ruRU from 'antd/lib/locale/ru_RU';
import svSE from 'antd/lib/locale/sv_SE';
import ptPT from 'antd/lib/locale/pt_PT';
import arEG from 'antd/lib/locale/ar_EG';
import thTH from 'antd/lib/locale/th_TH';
import roRO from 'antd/lib/locale/ro_RO';
import viVN from 'antd/lib/locale/vi_VN';
import EnFlag from '../../icons/EnFlag';
import CNFlag from '../../icons/CnFlag';
import BGFlag from '../../icons/BgFlag';
import CSFlag from '../../icons/CsFlag';
import DEFlag from '../../icons/DeFlag';
import ESFlag from '../../icons/EsFlag';
import FIFlag from '../../icons/FiFlag';
import FRFlag from '../../icons/FrFlag';
import IDFlag from '../../icons/IdFlag';
import ITFlag from '../../icons/ItFlag';
import JAFlag from '../../icons/JaFlag';
import KOFlag from '../../icons/KoFlag';
import NLFlag from '../../icons/NlFlag';
import NOFlag from '../../icons/NoFlag';
import PTFlag from '../../icons/PtFlag';
import RUFlag from '../../icons/RuFlag';
import ARFlag from '../../icons/ArFlag';
import SVFlag from '../../icons/SvFlag';
import ROFlag from '../../icons/RoFlag';
import THFlag from '../../icons/ThFlag';
import VIFlag from '../../icons/ViFlag';

/** 🇬🇧 英语 */
export const EN = 'en-US' as const;
/** 🇨🇳 中文简体 */
export const ZH = 'zh-CN' as const;
/** 🇨🇳 中文繁体 */
export const TW = 'zh-TW' as const;
/** 🇧🇬 保加利亚语 */
export const BG = 'bg' as const;
/** 🇨🇿 捷克语 */
export const CS = 'cs' as const;
/** 🇩🇪 德语 */
export const DE = 'de' as const;
/** 🇪🇸 西班牙语 */
export const ES = 'es' as const;
/** 🇫🇷 法语 */
export const FR = 'fr' as const;
/** 🇫🇮 芬兰语 */
export const FI = 'fi' as const;
/** 🇮🇹 意大利语 */
export const IT = 'it' as const;
/** 🇮🇩 印度尼西亚语 */
export const ID = 'id' as const;
/** 🇯🇵 日语 */
export const JA = 'ja' as const;
/** 🇰🇷 韩国语 */
export const KO = 'ko' as const;
/** 🇳🇱 荷兰语 */
export const NL = 'nl' as const;
/** 🇳🇴 挪威书面语 */
export const NO = 'nb-NO' as const;
/** 🇷🇺 俄语 */
export const RU = 'ru' as const;
/** 🇸🇪 瑞典语 */
export const SV = 'sv' as const;
/** 🇵🇹 葡萄牙语 */
export const PT = 'pt' as const;
/** 🇸🇦 阿拉伯语 */
export const AR = 'ar' as const;
/** 🇹🇭 泰语 */
export const TH = 'th' as const;
/** 🇷🇴 罗马尼亚 */
export const RO = 'ro' as const;
/** 🇻🇳 越南语 */
export const VI = 'vi' as const;

export const antI18nMap = {
  [ZH]: zhCN,
  [EN]: enUS,
  [TW]: zhTW,
  [BG]: bgBG,
  [CS]: csCZ,
  [DE]: deDE,
  [ES]: esES,
  [FR]: frFR,
  [FI]: fiFI,
  [IT]: itIT,
  [ID]: idID,
  [JA]: jaJP,
  [KO]: koKR,
  [NL]: nlNL,
  [NO]: nbNO,
  [RU]: ruRU,
  [SV]: svSE,
  [PT]: ptPT,
  [AR]: arEG,
  [TH]: thTH,
  [RO]: roRO,
  [VI]: viVN,
};

export const languages = {
  [EN]: EN,
  [TW]: TW,
  [ZH]: ZH,
  [BG]: BG,
  [CS]: CS,
  [DE]: DE,
  [ES]: ES,
  [FR]: FR,
  [FI]: FI,
  [IT]: IT,
  [ID]: ID,
  [JA]: JA,
  [KO]: KO,
  [NL]: NL,
  [NO]: NO,
  [RU]: RU,
  [SV]: SV,
  [PT]: PT,
  [AR]: AR,
  [TH]: TH,
  [RO]: RO,
  [VI]: VI,
};

export type Languages = keyof typeof languages;

export const languagesFlagMap = {
  [EN]: <EnFlag />,
  [TW]: <CNFlag />,
  [ZH]: <CNFlag />,
  [BG]: <BGFlag />,
  [CS]: <CSFlag />,
  [DE]: <DEFlag />,
  [ES]: <ESFlag />,
  [FR]: <FRFlag />,
  [FI]: <FIFlag />,
  [IT]: <ITFlag />,
  [ID]: <IDFlag />,
  [JA]: <JAFlag />,
  [KO]: <KOFlag />,
  [NL]: <NLFlag />,
  [NO]: <NOFlag />,
  [RU]: <RUFlag />,
  [SV]: <SVFlag />,
  [PT]: <PTFlag />,
  [AR]: <ARFlag />,
  [TH]: <THFlag />,
  [RO]: <ROFlag />,
  [VI]: <VIFlag />,
};

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
    code: BG,
    iso: BG,
    name: 'български',
  },
  {
    code: CS,
    iso: CS,
    name: 'Čeština',
  },
  {
    code: DE,
    iso: DE,
    name: 'Deutsch',
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
    code: FI,
    iso: FI,
    name: 'Suomi',
  },
  {
    code: IT,
    iso: IT,
    name: 'Italiano',
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
    code: NL,
    iso: NL,
    name: 'Nederlands',
  },
  {
    code: NO,
    iso: NO,
    name: 'Norsk',
  },
  {
    code: RU,
    iso: RU,
    name: 'Русский',
  },
  {
    code: SV,
    iso: SV,
    name: 'Svenska',
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
    code: RO,
    iso: RO,
    name: 'Română',
  },
  {
    code: VI,
    iso: VI,
    name: 'Tiếng Việt',
  },
] as const;

```
