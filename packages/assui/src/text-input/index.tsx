import React from 'react';
import type { InputProps } from 'antd/lib/input';
import isArray from 'lodash/isArray';
import type { ConditionInputProps } from '../condition-input';
import ConditionInput from '../condition-input';

export type TextInputProps = ConditionInputProps & InputProps;

const TextInput = (props: TextInputProps) => {
  const { regexp, ...restProps } = props;
  const trimStartReg = /(^\s+)/g;
  let resultRegexp: ConditionInputProps['regexp'] = trimStartReg;
  if (regexp) {
    resultRegexp = isArray(regexp) ? [trimStartReg, ...regexp] : [trimStartReg, regexp];
  }

  return <ConditionInput {...restProps} regexp={resultRegexp} />;
};

export default TextInput;