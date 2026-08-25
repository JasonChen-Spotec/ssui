import React from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import classNames from 'classnames';
import isUndefined from 'lodash/isUndefined';
import omit from 'lodash/omit';
import MultiLineEllipsisText from '../multi-line-ellipsis-text';
import type { NumberInputProps } from '../number-input';
import NumberInput from '../number-input';

interface LabelNumberInputBaseProps extends NumberInputProps {
  /** label 标签的文本 */
  label?: React.ReactNode;
  /** label 是否省略 */
  labelEllipsis?: false;
  /** 输入框最小宽度 */
  baseMinWidth?: number;
  /** 组件dom id */
  id?: string;
}
/** 当label需要省略时，label为string */
interface LabelNumberInputEllipsisProps extends NumberInputProps {
  /** label 标签的文本 */
  label?: string;
  /** label 是否省略 */
  labelEllipsis: true;
  /** 输入框最小宽度 */
  baseMinWidth?: number;
  /** 组件dom id */
  id?: string;
}
export type LabelNumberInputProps =
  | LabelNumberInputBaseProps
  | LabelNumberInputEllipsisProps;

const LabelNumberInput = (props: LabelNumberInputProps) => {
  const {
    className,
    label,
    onBlur,
    onFocus,
    labelEllipsis,
    id,
    baseMinWidth = 50,
  } = props;
  const numberInputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = useControllableValue(props);
  const [focused, setFocused] = React.useState<boolean>(false);

  const handleLabelClick = () => {
    setFocused(true);
    (numberInputRef.current as HTMLInputElement).focus();
  };

  const handleFocus = () => {
    setFocused(true);
    onFocus?.(value);
  };

  const handleBlur = () => {
    setFocused(false);
    onBlur?.(value);
  };

  return (
    <div
      className={classNames('label-number-input-warper', className)}
      id={id}
      style={{ minWidth: baseMinWidth }}
    >
      <div
        className={classNames('label-number-input-field', {
          'label-number-input-focused': focused,
          'label-number-input-disabled': props.disabled,
        })}
      >
        <NumberInput
          {...omit(props, [
            'onChange',
            'onBlur',
            'onFocus',
            'className',
            'label',
            'placeholder',
            'baseMinWidth',
            'labelEllipsis',
          ])}
          ref={numberInputRef}
          data-value={!isUndefined(value) ? `${value}`.length : 0}
          value={value}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className="label-number-input"
          onChange={(inputValue: string | number) => setValue(inputValue)}
        />
        {labelEllipsis ? (
          <MultiLineEllipsisText
            text={label}
            lines={1}
            tipType="tooltip"
            className="label-number-input-ellipsis"
            onClick={handleLabelClick}
          />
        ) : (
          // biome-ignore lint/a11y/noLabelWithoutControl: 点击触发的展示文本，非表单 label
          <label className="label-number-input-text" onClick={handleLabelClick}>
            {label}
          </label>
        )}
      </div>
    </div>
  );
};

export default LabelNumberInput;
