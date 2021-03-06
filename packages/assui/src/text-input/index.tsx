import React from 'react';
import isArray from 'lodash/isArray';
import type { ConditionInputProps } from '../condition-input';
import ConditionInput from '../condition-input';

export type TextInputProps = ConditionInputProps;

const TextInput = React.forwardRef<unknown, TextInputProps>((props, ref) => {
  const { regexp, ...restProps } = props;
  const trimStartReg = /(^\s+)/g;
  let resultRegexp: ConditionInputProps['regexp'] = trimStartReg;
  if (regexp) {
    resultRegexp = isArray(regexp) ? [trimStartReg, ...regexp] : [trimStartReg, regexp];
  }

  return <ConditionInput {...restProps} ref={ref} regexp={resultRegexp} />;
});

export default TextInput;
