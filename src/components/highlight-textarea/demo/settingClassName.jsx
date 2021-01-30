import React, { useState } from 'react';
import HighlightTextarea from 'assui/src/components/highlight-textarea';
import './index.css';

const Demo = () => {
  const [value, setValue] =
  useState('Here\'s a blueberry. There\'s a strawberry. Surprise, it\'s a banananana! <h1>hello</h1>');

  return (
    <div style={{ maxWidth: 800, border: 20, margin: 'auto' }}>
      <HighlightTextarea
        value={value}
        onChange= {v => setValue(v)}
        highlight={[
          {
            highlight: 'strawberry',
            className: 'red'
          },
          {
            highlight: 'blueberry',
            className: 'blue'
          },
          {
            highlight: /ba(na)*/gi,
            className: 'yellow'
          }
        ]}
      />
    </div>
  );
};
export default Demo;
