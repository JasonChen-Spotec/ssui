import React from 'react';
import { IntlProvider } from 'react-intl';
import messages from './locales/zh-CN.json';

export function rootContainer(container: any) {
  console.log('-----');
  return (
    <IntlProvider locale={'zh-CN'} messages={messages}>
      {container}
    </IntlProvider>
  );
}
