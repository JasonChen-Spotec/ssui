import * as React from 'react';
import Input from 'antd/lib/input';
import { INT } from './const/numberType';
import { filterInt, filterFloat } from './utils';

type ValueType = string | number;

export interface NumberInputProps {
  value?: ValueType;
  numberType?: 'int' | 'float';
  precision?: number;
  formatter?: (value: ValueType) => void;
  enableMinus?: boolean;
  onChange?: (value: ValueType) => void;
  onBlur?: (value: ValueType) => void;
}

const NumberInput = (props: NumberInputProps) => {
  const { value, onChange, numberType, precision, formatter, enableMinus, onBlur, ...restProps } =
    props;
  const [number, setNumber] = React.useState('');

  const resultValue = (value === 0 ? `${value}` : value) || number;

  const onNumberChange = (e) => {
    let newNumber;
    const newValue = e.target.value;

    if (numberType === INT) {
      newNumber = filterInt({ value: newValue, preValue: resultValue, enableMinus });
    } else {
      newNumber = filterFloat({ value: newValue, preValue: resultValue, precision, enableMinus });
    }

    if (formatter) {
      newNumber = formatter(newNumber);
    }

    if (resultValue !== newNumber) {
      if (onChange) {
        onChange(newNumber);
      } else {
        setNumber(newNumber);
      }
    }
  };

  const onNumberBlur = () => {
    if (resultValue === '-' || resultValue === '.') {
      if (onChange) {
        onChange('');
      } else {
        setNumber('');
      }
    }

    if (onBlur) {
      onBlur(resultValue);
    }
  };

  return (
    <Input
      type="text"
      value={resultValue}
      onBlur={onNumberBlur}
      onChange={onNumberChange}
      {...restProps}
    />
  );
};

export default NumberInput;
