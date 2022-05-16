import React from 'react';
import LocaleContext from './context';
import zhCN from '../messages/zh_CN';
import enUS from '../messages/en_US';

interface ProviderChildrenProps {
  children?: React.ReactNode;
  locale: 'en-US' | 'zh-CN';
}

const ConfigProvider: React.FC<ProviderChildrenProps> = (props) => {
  const { children, locale } = props;
  const messages = {
    'en-US': enUS,
    'zh-CN': zhCN,
  };

  return (
    <LocaleContext.Provider value={messages[locale]}>{children}</LocaleContext.Provider>
  );
};

export default ConfigProvider;
