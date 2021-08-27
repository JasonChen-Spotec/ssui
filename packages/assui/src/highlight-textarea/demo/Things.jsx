import React, { useState } from 'react';
import { HighlightTextarea } from 'assui';
import './index.css';

const Demo = () => {
  const [value, setValue] = useState('apple watermelon banana orange mango');

  return (
    <div style={{ maxWidth: 800, border: 20 }}>
      <HighlightTextarea
        value={value}
        onChange={(v) => setValue(v)}
        rows="8"
        highlight={['orange', /ba(na)*/gi, [0, 5]]}
      />
    </div>
  );
};
export default Demo;
