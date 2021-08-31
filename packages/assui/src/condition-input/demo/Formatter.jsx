/**
 * title: formatter
 * desc: 通过`formatter`让输入框始终未大写
 */

import React from 'react';
import { Descriptions } from 'antd';
import { ConditionInput } from 'assui';

const Demo = () => {
  const onChange = (value) => {
    console.log('Received value: ', value);
  };

  return (
    <Descriptions layout="vertical" column={8}>
      <Descriptions.Item label="formatter格式化value" span={8}>
        <ConditionInput
          regexp={/[^A-Za-z]+/g}
          formatter={(value) => value.toUpperCase()}
          onChange={onChange}
        />
      </Descriptions.Item>
    </Descriptions>
  );
};

export default Demo;
