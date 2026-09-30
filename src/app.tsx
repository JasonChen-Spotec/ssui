import React from 'react';
import { IntlProvider } from 'react-intl';
import messages from './locales/zh-CN.json';
import 'antd/dist/reset.css';
import '../packages/assui/src/single-img-upload/style/index.less';
import '../packages/assui/src/rc-split-view/style/index.less';
import '../packages/assui/src/highlight-textarea/style/index.less';
import '../packages/assui/src/a-select/style/index.less';
import '../packages/assui/src/area-text/style/index.less';
import '../packages/assui/src/color-select/style/index.less';

export { modifyCodeSandboxData, modifyStackBlitzData } from './react19-demo';

export function rootContainer(container: any) {
  console.log('-----');
  return (
    <IntlProvider locale={'zh-CN'} messages={messages}>
      {container}
    </IntlProvider>
  );
}
