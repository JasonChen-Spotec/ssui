import React from 'react';
import { JsonEditor } from 'assui';

const Demo = () => {
  const onChange = (resValues) => {
    console.log('Received values: ', resValues);
  };

  return (
    <div>
      <JsonEditor onChange={onChange} />
    </div>
  );
};

export default Demo;
