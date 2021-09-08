import * as React from 'react';
import classNames from 'classnames';
import trimStart from 'lodash/trimStart';
import useMount from 'ahooks/lib/useMount';
import HighlighedContents, { HighlighedContentsProps } from './HighlighedContents';
import { HighlightType } from './types';

export interface HighlightWithinTextareaProps extends HighlighedContentsProps {
  prefixCls?: string;
  className?: string;
  textAreaClassName?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  highlight: HighlightType;
}

const HighlightWithinTextarea = React.forwardRef<HTMLTextAreaElement, HighlightWithinTextareaProps>(
  (props, ref) => {
    const {
      prefixCls,
      value,
      onChange,
      highlight,
      className,
      textAreaClassName,
      ...textareaProps
    } = props;

    const [textAreaValue, setTextAreaValue] = React.useState('');
    const resultValue = value || textAreaValue;

    const containerRef = React.useRef<HTMLDivElement>();
    const backdropRef = React.useRef<HTMLDivElement>();

    const handleScroll = () => {
      const textareaDom = containerRef.current?.querySelector('textarea');

      if (backdropRef.current && textareaDom) {
        backdropRef.current.scrollLeft = textareaDom.scrollLeft;
        backdropRef.current.style.height = `${textareaDom.clientHeight + textareaDom.scrollTop}px`;
        backdropRef.current.style.top = `${0 - textareaDom.scrollTop}px`;
      }
    };

    useMount(() => {
      handleScroll();
    });

    const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = trimStart(e.target.value);

      if (onChange) {
        onChange(newValue, e);
      } else {
        setTextAreaValue(newValue);
      }
    };

    const textareaCls = classNames(
      `${prefixCls}-input`,
      'highlight-textarea-input',
      'highlight-content',
      textAreaClassName,
    );

    return (
      <div
        className={classNames('highlight-textarea', className)}
        ref={(node: HTMLDivElement) => {
          containerRef.current = node;
        }}
      >
        <div
          className="highlight-textarea-backdrop highlight-content"
          ref={(node: HTMLDivElement) => {
            backdropRef.current = node;
          }}
        >
          <HighlighedContents value={resultValue} highlight={highlight} />
        </div>
        <textarea
          value={resultValue}
          onChange={onTextareaChange}
          className={textareaCls}
          {...textareaProps}
          onScroll={handleScroll}
          ref={ref}
        />
      </div>
    );
  },
);

HighlightWithinTextarea.defaultProps = {
  highlight: '',
  prefixCls: 'ant',
};

export default HighlightWithinTextarea;