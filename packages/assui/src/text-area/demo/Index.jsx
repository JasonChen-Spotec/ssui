import React from 'react';
import { TextArea } from 'assui';

const onChange = (value) => {
  console.log(value);
};

export default () => (
  <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
);
