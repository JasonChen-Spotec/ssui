import React, { useState } from 'react';
import Input from 'antd/lib/input';
import { INT } from './const/numberType';
import { filterInt, filterFloat } from './utils';

const NumberInput = props => {
  const { value, onChange, numberType, precision, formatter, ...restProps } = props;
  const [number, setNumber] = useState('');
  const resultValue = value || number;

  const onNumberChange = e => {
    let newNumber;
    const newValue = e.target.value;

    if (numberType === INT) {
      newNumber = filterInt(newValue);
    } else {
      newNumber = filterFloat({ value: newValue, preValue: resultValue, precision });
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

  return (
    <Input
      type="text"
      value={resultValue}
      onChange={onNumberChange}
      {...restProps}
    />
  );
};

NumberInput.defaultProps = {
  numberType: INT,
  precision: 2
};

export default NumberInput;
