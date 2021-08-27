import React, { useState } from 'react';
import { HighlightTextarea } from 'assui';

const Demo = () => {
  const [value, setValue] = useState('abcdefgh');

  return (
    <div style={{ maxWidth: 800, border: 20 }}>
      <HighlightTextarea value={value} onChange={(v) => setValue(v)} highlight={[2, 6]} />
    </div>
  );
};
export default Demo;
