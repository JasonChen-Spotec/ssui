import React from 'react';
import { LabelDescItem } from 'assui';

const Demo = () => {
  return (
    <>
      <LabelDescItem label="币种" value="USDT" />
      <br />
      <LabelDescItem label="到账金额" value="500000000000000000000000000000000.00" suffix="CNY" />
    </>
  );
};

export default Demo;
