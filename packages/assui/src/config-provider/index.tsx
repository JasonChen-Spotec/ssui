import React from 'react';
import LocaleContext from './context';
import zhCN from '../messages/zh_CN';
import enUS from '../messages/en_US';

export type LocaleType = 'en-US' | 'zh-CN';

export interface ConfigProviderProps {
  children?: React.ReactNode;
  locale: LocaleType;
}

const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  const { children, locale } = props;
  const messagesMap = {
    'en-US': enUS.lang,
    'zh-CN': zhCN.lang,
  };

  return (
    <LocaleContext.Provider value={messagesMap[locale]}>
      {children}
    </LocaleContext.Provider>
  );
};

export default ConfigProvider;
