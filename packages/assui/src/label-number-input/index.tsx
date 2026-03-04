import React from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import useSize from 'ahooks/lib/useSize';
import isUndefined from 'lodash/isUndefined';
import classNames from 'classnames';
import omit from 'lodash/omit';
import type { NumberInputProps } from '../number-input';
import NumberInput from '../number-input';
import MultiLineEllipsisText from '../multi-line-ellipsis-text';

interface LabelNumberInputBaseProps extends NumberInputProps {
  /** label 标签的文本 */
  label?: React.ReactNode;
  /** label 是否省略 */
  labelEllipsis?: false;
  /** 输入框除去label之后的最小末尾宽度 */
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
  /** 输入框除去label之后的最小末尾宽度 */
  baseMinWidth?: number;
  /** 组件dom id */
  id?: string;
}
export type LabelNumberInputProps = LabelNumberInputBaseProps | LabelNumberInputEllipsisProps;

const LabelNumberInput = (props: LabelNumberInputProps) => {
  const { className, label, onBlur, onFocus,labelEllipsis, id, baseMinWidth = 50 } = props;
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

  const handleBlur = () => {
    setFocused(false);
    onBlur?.(value);
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
          ])}
          ref={numberInputRef}
          data-value={!isUndefined(value) ? `${value}`.length : 0}
          value={value}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className="label-number-input"
          onChange={(inputValue: string | number) => setValue(inputValue)}
        />
          { labelEllipsis ? (
            <MultiLineEllipsisText
              text={label}
              lines={1}
              tipType="tooltip"
              className="label-number-input-ellipsis"
              onClick={handleLabelClick}
            />
            ) : (
            <label className="label-number-input-text" onClick={handleLabelClick}>
              {label}
            </label>
          )}
      </div>
    </div>
  );
};

export default LabelNumberInput;
