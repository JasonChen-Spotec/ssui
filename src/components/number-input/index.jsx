import React, { useState } from 'react';
import Input from 'antd/lib/input';
import 'antd/lib/input/style';
import { INT } from './const/numberType';
import { filterInt, filterFloat } from './utils';

const NumberInput = props => {
  const { value, onChange, numberType, precision, formatter, enableMinus, onBlur, ...restProps } = props;
  const [number, setNumber] = useState('');
  const resultValue = value || number;

  const onNumberChange = e => {
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

    if (onChange) {
      onChange(newNumber);
    } else {
      setNumber(newNumber);
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

    onBlur && onBlur();
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

NumberInput.defaultProps = {
  numberType: INT,
  enableMinus: false,
  precision: 2
};

export default NumberInput;
