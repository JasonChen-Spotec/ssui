/**
 * title: 基本
 * desc: int 输入框
 */

import React from 'react';
import { NumberInput } from 'assui';

const Demo = () => {
  const onChange = (values) => {
    console.log('Received values: ', values);
  };

  return (
    <NumberInput
      numberType="float"
      maxLength={4}
      placeholder="Basic usage"
      enableMinus
      onChange={onChange}
    />
  );
};

export default Demo;
