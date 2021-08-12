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

  return <NumberInput placeholder="Basic usage" onChange={onChange} />;
};

export default Demo;
