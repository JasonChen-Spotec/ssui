/**
 * title: 基本
 * desc: int 输入框
 */

import React from 'react';
import { NumberInput } from 'assui';

const Demo = () => {
  const TRef = React.useRef();
  const onChange = (values) => {
    console.log('22', TRef);
    console.log('Received values: ', values);
  };

  return (
    <NumberInput
      ref={TRef}
      maxLength={4}
      placeholder="Basic usage"
      enableMinus
      onChange={onChange}
    />
  );
};

export default Demo;
