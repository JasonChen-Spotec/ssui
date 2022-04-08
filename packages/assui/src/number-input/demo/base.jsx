/**
 * title: 基本
 * desc: int 输入框
 */

import React from 'react';
import { NumberInput } from 'assui';

const Demo = () => {
  const TRef = React.useRef();
  const onChange = (value) => {
    console.log('22', TRef);
    console.log(typeof value);
  };

  return (
    <NumberInput
      ref={TRef}
      maxLength={4}
      numberType="float"
      dataType="string"
      placeholder="Basic usage"
      enableMinus
      onChange={onChange}
    />
  );
};

export default Demo;
