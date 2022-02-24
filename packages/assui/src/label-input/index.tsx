import React from 'react';
import classNames from 'classnames';
import { useControllableValue } from 'ahooks';
import { trimStart } from 'lodash';
import EyeFilled from 'a-icons/lib/EyeFilled';
import EyeOutlined from 'a-icons/lib/EyeOutlined';

export interface LabelInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'prefix' | 'type' | 'onChange' | 'onFocus' | 'onBlur'
  > {
  /** 自定义class */
  className?: string;
  /** label 标签的文本 */
  label?: React.ReactNode;
  /** 输入框内容 */
  value?: string;
  /** 带有后缀的 input */
  suffix?: React.ReactNode;
  /** 带有前缀的 input */
  prefix?: React.ReactNode;
  /** 输入框内容变化时的回调 */
  onChange?: (value: string) => void;
  /** 输入框失去焦点的回调 */
  onBlur?: (value: string) => void;
  /** 规定 input 元素的类型 */
  type?: 'text' | 'password';
  /** 规定输入字段中的字符的最大长度 */
  maxLength?: number;
  /** 输入框获取焦点的回调 */
  onFocus?: (value: string) => void;
  /** 组件dom id */
  id?: string;
}

const LabelInput: React.FC<LabelInputProps> = (props) => {
  const { className, prefix, suffix, label, id, onFocus, onBlur, type = 'text', maxLength } = props;
  const [focused, setFocused] = React.useState<boolean>(false);
  const [value, setValue] = useControllableValue<string>(props, {
    defaultValue: '',
  });
  const [inputType, setInputType] = React.useState<'text' | 'password'>(type);
  const InputDomRef = React.useRef<HTMLInputElement | null>(null);

  const isPasswordInput = type === 'password';

  const handleFocus = () => {
    setFocused(true);
    onFocus?.(value);
  };

  const handleBlur = () => {
    setFocused(false);
    onBlur?.(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const finallyValue = trimStart(e.target.value);
    setValue(finallyValue);
  };

  const handleLabelClick = () => {
    InputDomRef.current?.focus();
  };

  const passwordSuffix =
    inputType === 'password' ? (
      <EyeOutlined
        onClick={() => {
          setInputType('text');
        }}
      />
    ) : (
      <EyeFilled onClick={() => setInputType('password')} />
    );

  return (
    <div className={classNames('label-input-control', className)} id={id}>
      <div
        className={classNames('label-input-field', {
          'label-input-affix': prefix || suffix || isPasswordInput,
          'label-input-focused': focused,
        })}
      >
        {prefix && <div className="label-input-prefix">{prefix}</div>}
        <div className="label-input-warper">
          <input
            ref={(el) => (InputDomRef.current = el)}
            data-value={value ? value.length : 0}
            className="label-input"
            type={inputType}
            value={value || ''}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            maxLength={maxLength}
          />
          <label className="label-input-text" onClick={handleLabelClick}>
            {label}
          </label>
        </div>

        {(suffix || isPasswordInput) && (
          <div className="label-input-suffix">{suffix || passwordSuffix}</div>
        )}
      </div>
    </div>
  );
};

export default LabelInput;
