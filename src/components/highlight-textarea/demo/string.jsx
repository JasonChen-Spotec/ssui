import React, { useState, useRef } from 'react';
import { Tag } from 'antd';
import HighlightTextarea from 'assui/lib/components/highlight-textarea';
import './index.css';

const Demo = () => {
  const textareaRef = useRef();
  const [ value, setValue ] = useState('');

  const handleClick = tagValue => {
    const textareaEl = textareaRef.current;
    const startPos = textareaEl.selectionStart;
    const endPos = textareaEl.selectionEnd;
    const beforeValue = textareaEl.value.substring(0, startPos);
    const afterValue = textareaEl.value.substring(endPos, textareaEl.value.length);
    const newValue = `${beforeValue}${tagValue}${afterValue}`;
    setValue(newValue);
    textareaEl.selectionStart = startPos + tagValue.length;
    textareaEl.selectionEnd = startPos + tagValue.length;
    textareaEl.focus();

  };

  return (
    <div style={{ maxWidth: 800, border: 20, margin: 'auto' }}>
      <Tag
        color="magenta"
        onClick={() => handleClick('potato')}
        style={{ marginBottom: 20 }}
      >
        potato
      </Tag>

      <HighlightTextarea
        value={value}
        highlight="potato"
        onChange= {v => setValue(v)}
        rows="4"
        ref={textareaRef}
      />
    </div>
  );
};
export default Demo;
