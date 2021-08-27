import React, { useState, useRef } from 'react';
import { Tag } from 'antd';
import { HighlightTextarea } from 'assui';

const Demo = () => {
  const textareaRef = useRef();
  const [value, setValue] = useState('这个炫酷的例子，请点击好字');

  const handleClick = (tagValue) => {
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
    <div style={{ maxWidth: 800, border: 20 }}>
      <Tag
        color="magenta"
        onClick={() => handleClick('好')}
        style={{ marginBottom: 20, cursor: 'pointer' }}
      >
        好
      </Tag>

      <HighlightTextarea
        value={value}
        highlight="好"
        onChange={(v) => setValue(v)}
        rows="4"
        ref={textareaRef}
      />
    </div>
  );
};
export default Demo;
