import React from 'react';
import EnFlag from '../../assets/language/enFlag.svg';
import CNFlag from '../../assets/language/cnFlag.svg';

export const EN = 'en-US' as const;
export const ZH = 'zh-CN' as const;

export type LanguagesType = typeof EN | typeof ZH;

export const languages = {
  [EN]: EN,
  [ZH]: ZH,
} as Record<string, string>;

export type Languages = keyof typeof languages;

export const languagesFlagMap = {
  [ZH]: <CNFlag />,
  [EN]: <EnFlag />,
};

export const I18NList = [
  {
    code: EN,
    iso: EN,
    name: 'EN',
  },
  {
    code: ZH,
    iso: ZH,
    name: '中文',
  },
] as const;
