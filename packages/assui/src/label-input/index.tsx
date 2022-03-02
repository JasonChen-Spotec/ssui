import React from 'react';
import classNames from 'classnames';
import { trimStart } from 'lodash';
import EyeFilled from 'a-icons/lib/EyeFilled';
import EyeOutlined from 'a-icons/lib/EyeOutlined';
import useControllableValue from 'ahooks/lib/useControllableValue';
import useSize from 'ahooks/lib/useSize';

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
  /** 输入框除去label之后的最小末尾宽度 */
  baseMinWidth?: number;
  /** 组件dom id */
  id?: string;
}

type PasswordSuffixProps = {
  inputType: 'text' | 'password';
  onChangeInputType: (value: 'text' | 'password') => void;
};

const PasswordSuffix: React.FC<PasswordSuffixProps> = React.memo(
  ({ inputType, onChangeInputType }) => {
    const resultNode =
      inputType === 'password' ? (
        <EyeOutlined
          onClick={() => {
            onChangeInputType('text');
          }}
        />
      ) : (
        <EyeFilled
          className="label-input-open-eye"
          onClick={() => {
            onChangeInputType('password');
          }}
        />
      );
    return resultNode;
  },
);

const LabelInput: React.FC<LabelInputProps> = (props) => {
  const {
    className,
    prefix,
    suffix,
    label,
    id,
    onFocus,
    onBlur,
    type = 'text',
    maxLength,
    baseMinWidth = 50,
  } = props;
  const labelDomRef = React.useRef<HTMLLabelElement>(null);
  const labelSize = useSize(labelDomRef);
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

  const onChangeInputType = React.useCallback((nextInputType) => {
    setInputType(nextInputType);
  }, []);

  const controlMinWidth = labelSize?.width ? labelSize.width + baseMinWidth : undefined;

  return (
    <div
      className={classNames('label-input-control', className)}
      id={id}
      style={{ minWidth: controlMinWidth }}
    >
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
          <label className="label-input-text" onClick={handleLabelClick} ref={labelDomRef}>
            {label}
          </label>
        </div>

        {(suffix || isPasswordInput) && (
          <div className="label-input-suffix">
            {suffix || (
              <PasswordSuffix inputType={inputType} onChangeInputType={onChangeInputType} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LabelInput;
