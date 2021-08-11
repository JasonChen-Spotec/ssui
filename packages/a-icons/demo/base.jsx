import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { InputNumber, message } from 'antd';
import { SketchPicker } from 'react-color';
import iconsList from './iconsList';
import './index.less';

export default () => {
  const [color, setColor] = useState('#000000');
  const [width, setWidth] = useState(24);
  return (
    <div>
      <div className="icon-params">
        <SketchPicker
          className="color-input"
          onChange={(value) => setColor(value.hex)}
          color={color}
        />
        <div>
          <span className="label">宽度</span>
          <InputNumber value={width} onChange={(value) => setWidth(value)} />
        </div>
      </div>
      <h3>Outline</h3>
      <div className="icons-container">
        {iconsList
          .filter(({ displayName }) => displayName.indexOf('Outline') !== -1)
          .map((Icon, index) => (
            <CopyToClipboard
              key={index}
              text={Icon.displayName}
              onCopy={() => message.info(`copy <${Icon.displayName} /> success`)}
            >
              <div className="icons-item">
                <Icon style={{ width, color, fill: 'red' }} />
                <span>{Icon.displayName}</span>
              </div>
            </CopyToClipboard>
          ))}
      </div>
      <h3>filled</h3>
      <div className="icons-container">
        {iconsList
          .filter(({ displayName }) => displayName.indexOf('Outline') === -1)
          .map((Icon, index) => (
            <CopyToClipboard
              key={index}
              text={`<${Icon.displayName} />`}
              onCopy={() => message.info(`copy <${Icon.displayName} /> success`)}
            >
              <div className="icons-item">
                <Icon style={{ width, color, fill: 'red' }} />
                <span>{Icon.displayName}</span>
              </div>
            </CopyToClipboard>
          ))}
      </div>
    </div>
  );
};
{
  /* <CircleListOutlined /> */
}
