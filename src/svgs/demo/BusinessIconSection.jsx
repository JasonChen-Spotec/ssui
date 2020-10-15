import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { InputNumber } from 'antd';
import { message } from 'antd';
import iconsList from './businessIconList';
import './index.less';

export default () => {
  const [ width, setWidth ] = useState(124)
  return (
    <div>
      <div className="icon-params">
        <span className="label">宽度</span>
        <InputNumber value={width} onChange={(value)=> setWidth(value)} />
      </div>
      <div className="icons-container">
        {
          iconsList.map((Icon, index)=>(
            <CopyToClipboard
              key={index}
              text={`<${Icon.name} />`}
              onCopy={() => message.info(`copy <${Icon.name} /> success`)}
            >
              <div className="icons-item icons-item--business">
                <Icon style={{ width, fill: 'red'}} />
                <span>
                  {Icon.name}
                </span>
              </div>
            </CopyToClipboard>
          ))
        }
      </div>
    </div>
  );
};
