/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state
 *
 * title.zh-CN: 基本用法
 * desc.zh-CN: 默认切换布尔值状态，也可以接收一个参数作为新的值。
 */

import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { message } from 'antd';
import iconsList from './iconsList';
import './index.less';

export default () => {
  return (
    <div className="icons-container">
      {
        iconsList.map((Icon, index)=>(
          <CopyToClipboard
            key={index}
            text={`<${Icon.name} />`}
            onCopy={() => message.info(`copy <${Icon.name} /> success`)}
          >
            <div className="icons-item">
              <Icon style={{ width: 24 }} />
              <span>
                {Icon.name}
              </span>
            </div>
          </CopyToClipboard>
        ))
      }
    </div>
  );
};
