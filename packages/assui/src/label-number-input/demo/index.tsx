/**
 * title: 基本
 * desc: int 输入框
 */

import React from 'react';
import { LabelNumberInput } from 'assui';

const Demo = () => {
  const onChange = (value) => {
    console.log(value, 'value');
    console.log(typeof value);
  };

  return (
    <LabelNumberInput label="我是标题" maxLength={4} enableMinus onChange={onChange} />
  );
};

export default Demo;
