import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import trimStart from 'lodash/trimStart';
import HighlighedContents from './HighlighedContents';
import './styles/index.less';

const HighlightWithinTextarea = React.forwardRef((props, ref) => {
  const { prefixCls, value, onChange, highlight, className, containerClassName,
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
    if (ref) {
      ref.current = el;
    }
  };

  const textareaCls = classNames(
    `${prefixCls}-input`,
    'highlight-textarea-input',
    'highlight-content',
    className
  );

  return (
    <div className={classNames('highlight-textarea', containerClassName) }>
      <div className="highlight-textarea-backdrop" ref={backdropRef}>
        <HighlighedContents value={resultValue} highlight={highlight} />
      </div>
      <textarea
        value={resultValue}
        onChange={onTextareaChange}
        className={textareaCls}
        {...textareaProps}
        onScroll={handleScroll}
        ref={getTextAreaNode}
      />
    </div>
  );
});

HighlightWithinTextarea.defaultProps = {
  highlight: {},
  prefixCls: 'ant'
};

export default HighlightWithinTextarea;
