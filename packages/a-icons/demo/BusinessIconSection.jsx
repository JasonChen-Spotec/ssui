/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { InputNumber, message } from 'antd';
import iconsList from './iconsList';
import './index.less';

export default () => {
  const [width, setWidth] = useState(40);
  return (
    <div>
      <div className="icon-params">
        <span className="label">宽度</span>
        <InputNumber value={width} onChange={(value) => setWidth(value)} />
      </div>
      <div className="icons-container">
        {iconsList
          .filter(
            ({ displayName }) =>
              displayName.indexOf('Outline') === -1 && displayName.indexOf('Filled') === -1,
          )
          .map((Icon, index) => (
            <CopyToClipboard
              key={index}
              text={`<${Icon.displayName} />`}
              onCopy={() => message.info(`copy <${Icon.displayName} /> success`)}
            >
              <div className="icons-item icons-item--business">
                <Icon style={{ width, fill: 'red' }} />
                <span>{Icon.displayName}</span>
              </div>
            </CopyToClipboard>
          ))}
      </div>
    </div>
  );
};
