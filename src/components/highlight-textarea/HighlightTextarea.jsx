import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import trimStart from 'lodash/trimStart';
import useMount from 'ahooks/lib/useMount';
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

  useMount(() => {
    backdropRef.current.style.width = `${textareaRef.current.clientWidth}px`;
  });

  const onTextareaChange = e => {
    const newValue = trimStart(e.target.value);

    if (onChange) {
      onChange(newValue, e);
    } else {
      setTextAreaValue(newValue);
    }
  };

  const handleScroll = () => {
    backdropRef.current.scrollLeft = textareaRef.current.scrollLeft;
    backdropRef.current.style.height = `${textareaRef.current.clientHeight + textareaRef.current.scrollTop}px`;
    backdropRef.current.style.width = `${textareaRef.current.clientWidth}px`;
    backdropRef.current.style.top = `${0 - textareaRef.current.scrollTop}px`;
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
      <div className="highlight-textarea-backdrop">
        <HighlighedContents value={resultValue} highlight={highlight} ref={backdropRef} />
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
