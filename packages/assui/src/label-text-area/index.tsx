import React from 'react';
import classNames from 'classnames';
import useControllableValue from 'ahooks/lib/useControllableValue';
import trimStart from 'lodash/trimStart';

export interface LabelTextAreaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    'size' | 'type' | 'onChange' | 'onFocus' | 'onBlur'
  > {
  /** 自定义class */
  className?: string;
  /** label 标签的文本 */
  label?: React.ReactNode;
  /** 输入框内容 */
  value?: string;
  /** 指定输入框展示值的格式 */
  formatter?: (value: string) => string;
  /** 输入框内容变化时的回调 */
  onChange?: (value: string) => void;
  /** 输入框失去焦点的回调 */
  onBlur?: (value: string) => void;
  /** 输入框获取焦点的回调 */
  onFocus?: (value: string) => void;
  /** 组件dom id */
  id?: string;
}

const LabelTextArea: React.FC<LabelTextAreaProps> = (props) => {
  const { className, label, id, formatter, onFocus, onBlur, ...restProps } = props;
  const [focused, setFocused] = React.useState<boolean>(false);
  const [value, setValue] = useControllableValue<string>(props);
  const TextAreaDomRef = React.useRef<HTMLTextAreaElement | null>(null);

  const handleFocus = () => {
    setFocused(true);
    onFocus?.(value);
  };

  const handleBlur = () => {
    setFocused(false);
    onBlur?.(value);
  };

  const handleLabelClick = () => {
    (TextAreaDomRef.current as HTMLTextAreaElement).focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let finallyValue = trimStart(e.target.value);
    if (formatter) {
      finallyValue = formatter(finallyValue);
    }
    setValue(finallyValue);
  };

  return (
    <div className={classNames('label-input-control', className)} id={id}>
      <div
        className={classNames('label-textarea-warper', {
          'textarea-warper-focused': focused,
        })}
        onClick={handleLabelClick}
      >
        <textarea
          {...restProps}
          ref={(el) => (TextAreaDomRef.current = el)}
          data-value={value ? value.length : 0}
          className="label-textarea"
          value={value}
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label className="label-textarea-text">{label}</label>
      </div>
    </div>
  );
};

export default LabelTextArea;
