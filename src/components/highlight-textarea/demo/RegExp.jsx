import React, { useState, useRef } from 'react';
import HighlightTextarea from 'assui/lib/components/highlight-textarea';
import './index.css';

const Demo = () => {
  const [value, setValue] = useState('Dog, cat, chicken, goose. Dogs, cats, chickens, geese.');

  return (
    <div style={{ maxWidth: 800, border: 20, margin: 'auto' }}>
      <HighlightTextarea
        value={value}
        highlight={/dogs?|cats?|g(oo|ee)se/gi}
        onChange= {v => setValue(v)}
      />
    </div>
  );
};
export default Demo;
