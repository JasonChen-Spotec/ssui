import React, { useState } from 'react';
import Input from 'antd/lib/input';
import 'antd/lib/input/style';
import parse2RegexOption from './regexOptionConverter';
import * as regexPatterns from './regexPattern';

const RegexInput = props => {
  const { regexes, value, defaultValue, onChange, ...rest } = props;
  const isControlled = value === undefined;
  const [stateValue, setStateValue] = useState(isControlled ? value : defaultValue);
  const resultValue = isControlled ? value : stateValue;

  const handleChange = e => {
    const { value: originalValue } = e.target;

    const nextValue = regexes.reduce((cur, acc) => {
      const regexOption = parse2RegexOption(acc);
      if (regexOption.isValid) {
        return regexOption.replace(regexOption.pattern, regexOption.replacement);
      }
      return cur;
    }, originalValue);

    if (resultValue !== nextValue) {
      setStateValue(nextValue);
      onChange && onChange(nextValue);
    }
  };

  return (
    <Input
      value={resultValue}
      onChange={handleChange}
      {...rest}
    />
  );
};

RegexInput.displayName = 'RegexInput';

RegexInput.patterns = regexPatterns;

export default RegexInput;
