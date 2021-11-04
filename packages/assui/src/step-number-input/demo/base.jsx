/**
 * title: 基本
 * desc: int 输入框
 */

import React from 'react';
import { StepNumberInput } from 'assui';

const Demo = () => {
  const onChange = (values) => {
    console.log('Received values: ', values);
  };

  return (
    <StepNumberInput
      min={0}
      max={10}
      maxLength={4}
      placeholder="Basic usage"
      enableMinus
      onChange={onChange}
    />
  );
};

export default Demo;
