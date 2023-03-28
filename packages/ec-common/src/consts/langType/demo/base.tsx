import React from 'react';
import { Space } from 'antd';
import { languages } from '../index';

const Base = () => {
  return (
    <div>
      <Space>
        {Object.keys(languages).map((key) => {
          return (
            <div>
              <div>{key}</div>
              <div>{languages[key]}</div>
            </div>
          );
        })}
      </Space>
    </div>
  );
};

export default Base;
