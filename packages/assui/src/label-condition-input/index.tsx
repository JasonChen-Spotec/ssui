import React from 'react';
import classNames from 'classnames';
import omit from 'lodash/omit';
import useControllableValue from 'ahooks/lib/useControllableValue';
import useSize from 'ahooks/lib/useSize';
import type { ConditionInputProps } from '../condition-input';
import ConditionInput from '../condition-input';

export interface LabelConditionInputProps extends ConditionInputProps {
  /** label 标签的文本 */
  label?: React.ReactNode;
  /** 输入框内容变化时的回调 */
  onChange?: (value: string) => void;
  /** 输入框除去label之后的最小末尾宽度 */
  baseMinWidth?: number;
  /** 组件dom id */
  id?: string;
}

const LabelConditionInput = (props: LabelConditionInputProps) => {
  const { className, label, onBlur, id, onFocus, baseMinWidth = 50 } = props;
  const [value, setValue] = useControllableValue(props);
  const labelDomRef = React.useRef<HTMLLabelElement>(null);
  const labelSize = useSize(labelDomRef);
  const InputDomRef = React.useRef<HTMLInputElement>(null);
  const [focused, setFocused] = React.useState<boolean>(false);

  const handleLabelClick = () => {
    setFocused(true);
    (InputDomRef.current as HTMLInputElement).focus();
  };

  const handleFocus = () => {
    setFocused(true);
    onFocus?.(value);
  };

  const handleBlur: ConditionInputProps['onBlur'] = (e) => {
    setFocused(false);
    onBlur?.(e);
  };

  const controlMinWidth = labelSize?.width ? labelSize.width + baseMinWidth : undefined;

  return (
    <div
      className={classNames('label-condition-input-warper', className)}
      id={id}
      style={{ minWidth: controlMinWidth }}
    >
      <div
        className={classNames('label-condition-input-field', {
          'label-condition-input-focused': focused || value,
        })}
      >
        <ConditionInput
          {...omit(props, [
            'onChange',
            'onBlur',
            'onFocus',
            'className',
            'label',
            'placeholder',
            'baseMinWidth',
          ])}
          ref={InputDomRef}
          data-value={value ? value.length : 0}
          value={value}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className="label-condition-input"
          onChange={(inputValue: string) => setValue(inputValue)}
        />
        <label ref={labelDomRef} className="label-condition-input-text" onClick={handleLabelClick}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default LabelConditionInput;

LabelConditionInput.Option = Option;
