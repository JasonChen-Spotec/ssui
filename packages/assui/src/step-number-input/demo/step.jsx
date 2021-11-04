/**
 * title: step 步进
 * desc: int/float 输入框, 可以通过step控制步进
 */

import React from 'react';
import { StepNumberInput } from 'assui';
import { Descriptions } from 'antd';

const Demo = () => {
  const onChange = (values) => {
    console.log('Received values: ', values);
  };

  return (
    <Descriptions layout="vertical" column={8}>
      <Descriptions.Item label="float usage" span={8}>
        <StepNumberInput placeholder="step 2" onChange={onChange} />
      </Descriptions.Item>
      <Descriptions.Item label="int usage" span={8}>
        <StepNumberInput placeholder="step 0.1" onChange={onChange} numberType="float" step="0.1" />
      </Descriptions.Item>
    </Descriptions>
  );
};

export default Demo;
