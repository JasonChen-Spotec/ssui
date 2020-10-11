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
