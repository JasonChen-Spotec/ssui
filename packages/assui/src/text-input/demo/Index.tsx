import React from 'react';
import { TextInput } from 'assui';

const onChange = (value) => {
  console.log(value);
};

export default () => <TextInput placeholder="input text" onChange={onChange} />;
