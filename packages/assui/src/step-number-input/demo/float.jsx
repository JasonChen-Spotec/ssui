/**
 * title: float
 * desc: float 输入框, 可以通过precision设置精度
 */

import React from 'react';
import { StepNumberInput } from 'assui';
import { Descriptions } from 'antd';

const Demo = () => {
  const onChange = (values) => {
    console.log('Received values: ', values);
  };

  return (
    <>
      <Descriptions layout="vertical" column={8}>
        <Descriptions.Item label="base" span={8}>
          <StepNumberInput placeholder="float base usage" onChange={onChange} numberType="float" />
        </Descriptions.Item>
        <Descriptions.Item label="precision(设置4位精度)" span={8}>
          <StepNumberInput
            placeholder="float precision usage"
            precision={4}
            onChange={onChange}
            numberType="float"
          />
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default Demo;
