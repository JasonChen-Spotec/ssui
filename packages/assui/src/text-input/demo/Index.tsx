import React from 'react';
import { TextInput } from 'assui';

const onChange = (value) => {
  console.log(value);
};

export default () => {
  const textInputRef = React.useRef(null);

  React.useEffect(() => {
    console.log(textInputRef, 'textInputRef');
  });

  return <TextInput ref={textInputRef} placeholder="input text" onChange={onChange} />;
};
