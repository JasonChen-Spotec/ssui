import React from 'react';
import { Space } from 'antd';
import { languagesFlagMap } from '../index';

const Base = () => {
  return (
    <div>
      <Space>
        {Object.keys(languagesFlagMap).map((key) => {
          return (
            <div>
              <div>{key}</div>
              <div>{languagesFlagMap[key]}</div>
            </div>
          );
        })}
      </Space>
    </div>
  );
};

export default Base;
