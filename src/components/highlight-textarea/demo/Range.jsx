import React, { useState, useRef } from 'react';
import HighlightTextarea from 'assui/lib/components/highlight-textarea';
import './index.css';

const Demo = () => {
  const [value, setValue] = useState('abcdefgh');

  return (
    <div style={{ maxWidth: 800, border: 20, margin: 'auto' }}>
      <HighlightTextarea
        value={value}
        onChange= {v => setValue(v)}
        highlight={[2, 6]}
      />
    </div>
  );
};
export default Demo;
