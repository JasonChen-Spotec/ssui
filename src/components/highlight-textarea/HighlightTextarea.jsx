import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import trimStart from 'lodash/trimStart';
import HighlighedContents from './HighlighedContents';
import './styles/index.css';

const HighlightWithinTextarea = (props, ref) => {
  const { value, onChange, highlight, className, containerClassName,
    onScroll, ...textareaProps
  } = props;

  const [textAreaValue, setTextAreaValue] = useState('');
  const resultValue = value || textAreaValue;

  const textareaRef = useRef(ref);
  const backdropRef = useRef(null);

  const onTextareaChange = e => {
    const newValue = trimStart(e.target.value);

    if (onChange) {
      onChange(newValue, e);
    } else {
      setTextAreaValue(newValue);
    }
  };

  const handleScroll = () => {
    backdropRef.current.scrollTop = textareaRef.current.scrollTop;
    backdropRef.current.scrollLeft = textareaRef.current.scrollLeft;
  };

  const getTextAreaNode = el => {
    textareaRef.current = el;
    ref.current = el;
  };


  return (
    <div className={classNames('container', containerClassName) }>
      <div className="backdrop" ref={backdropRef}>
        <HighlighedContents value={resultValue} highlight={highlight} />
      </div>
      <textarea
        value={resultValue}
        onChange={onTextareaChange}
        className={classNames('ant-input','input', 'content', className)}
        {...textareaProps}
        onScroll={handleScroll}
        ref={getTextAreaNode}
      />
    </div>
  );
};

HighlightWithinTextarea.defaultProps = {
  highlight: {}
};

export default React.forwardRef(HighlightWithinTextarea);
