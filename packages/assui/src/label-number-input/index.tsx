import React from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import useSize from 'ahooks/lib/useSize';
import isUndefined from 'lodash/isUndefined';
import classNames from 'classnames';
import omit from 'lodash/omit';
import type { NumberInputProps } from '../number-input';
import NumberInput from '../number-input';

export interface LabelNumberInputProps extends NumberInputProps {
  /** label 标签的文本 */
  label?: React.ReactNode;
  /** 输入框除去label之后的最小末尾宽度 */
  baseMinWidth?: number;
  /** 组件dom id */
  id?: string;
}

const LabelNumberInput = (props: LabelNumberInputProps) => {
  const { className, label, onBlur, onFocus, id, baseMinWidth = 50 } = props;
  const numberInputRef = React.useRef<HTMLInputElement>(null);
  const labelDomRef = React.useRef<HTMLLabelElement>(null);
  const labelSize = useSize(labelDomRef);
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

  const handleBlur = (e: string | number) => {
    setFocused(false);
    onBlur?.(e);
  };

  const controlMinWidth = labelSize?.width ? labelSize.width + baseMinWidth : undefined;

  return (
    <div
      className={classNames('label-number-input-warper', className)}
      id={id}
      style={{ minWidth: controlMinWidth }}
    >
      <div
        className={classNames('label-number-input-field', {
          'label-number-input-focused': focused,
        })}
      >
        <NumberInput
          {...omit(props, ['onChange', 'onBlur', 'onFocus', 'className', 'label', 'placeholder'])}
          ref={numberInputRef}
          data-value={!isUndefined(value) ? `${value}`.length : 0}
          value={value}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className="label-number-input"
          onChange={(inputValue: string | number) => setValue(inputValue)}
        />
        <label className="label-number-input-text" onClick={handleLabelClick}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default LabelNumberInput;
