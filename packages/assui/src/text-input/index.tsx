import React from 'react';
import { InputProps } from 'antd/lib/input';
import isArray from 'lodash/isArray';
import ConditionInput, { ConditionInputProps } from '../condition-input';

const TextInput = (props: ConditionInputProps & InputProps) => {
  const { regexp, ...restProps } = props;
  const trimStartReg = /(^\s+)/g;
  let resultRegexp: ConditionInputProps['regexp'] = trimStartReg;
  if (regexp) {
    resultRegexp = isArray(regexp) ? [trimStartReg, ...regexp] : [trimStartReg, regexp];
  }

  return <ConditionInput {...restProps} regexp={resultRegexp} />;
};

export default TextInput;
