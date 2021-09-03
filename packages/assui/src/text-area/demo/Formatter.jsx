/**
 * title: formatter
 * desc: 通过`formatter`让输入框始终未大写
 */

import React from 'react';
import { TextArea } from 'assui';

const onChange = (value) => {
  console.log(value);
};

export default () => (
  <TextArea
    placeholder="textarea with clear icon"
    allowClear
    onChange={onChange}
    formatter={(value) => value.toUpperCase()}
  />
);
