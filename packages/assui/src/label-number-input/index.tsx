import React from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import { NumberInput } from 'assui';
import type { NumberInputProps } from 'assui';
import { isUndefined } from 'lodash';
import classNames from 'classnames';
import omit from 'lodash/omit';

export interface LabelNumberInputProps extends NumberInputProps {
  label?: React.ReactNode;
}

const LabelNumberInput = (props: LabelNumberInputProps) => {
  const { className, label, onBlur, onFocus } = props;
  const numberInputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = useControllableValue(props);
  const [focused, setFocused] = React.useState<boolean>(false);

  const handleLabelClick = () => {
    setFocused(true);
    numberInputRef.current?.focus();
  };

  const handleFocus = () => {
    setFocused(true);
    onFocus?.(value);
  };

  const handleBlur = (e: string | number) => {
    setFocused(false);
    onBlur?.(e);
  };

  return (
    <div className={classNames('label-number-input-warper', className)}>
      <div
        className={classNames('label-number-input-field', {
          'label-number-input-focused': focused || !isUndefined(value),
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
          ])}
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

LabelNumberInput.Option = Option;
