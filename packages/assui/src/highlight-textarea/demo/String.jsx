import React, { useState } from 'react';
import { HighlightTextarea } from 'assui';

const Demo = () => {
  const [value, setValue] = useState('eslint lines- potato between-class-members');

  return (
    <div style={{ maxWidth: 800, border: 20 }}>
      <HighlightTextarea value={value} highlight="potato" onChange={(v) => setValue(v)} rows="4" />
    </div>
  );
};
export default Demo;
