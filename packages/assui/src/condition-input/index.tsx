import * as React from 'react';
import isArray from 'lodash/isArray';
import Input from 'antd/lib/input';
import isFunction from 'lodash/isFunction';
import parse2RegexOption from './parse2RegexOption';

export interface ConditionInputProps {
  /** 过滤的正则条件 */
  regexp: RegExp | (RegExp | string | { pattern: RegExp; replacement?: string })[];
  /** 指定输入框展示值的格式 */
  formatter?: (value: string) => string;
  /** 变化回调 */
  onChange?: (value: string) => void;
  /** 输入框内容 */
  value?: string;
}

const ConditionInput = (props: ConditionInputProps) => {
  const { regexp, formatter, value, onChange, ...rest } = props;
  const [stateValue, setStateValue] = React.useState<string>('');
  const resultValue = value === undefined ? stateValue : value;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: originalValue } = e.target;

    const resultRegexp = isArray(regexp) ? regexp : [regexp];
    let nextValue = resultRegexp.reduce((cur: string, acc) => {
      const regexOption = parse2RegexOption(acc);
      if (regexOption.isValid) {
        return cur.replace(regexOption.pattern, regexOption.replacement);
      }
      return cur;
    }, originalValue) as string;

    if (isFunction(formatter)) {
      nextValue = formatter(nextValue);
    }

    if (resultValue !== nextValue) {
      setStateValue(nextValue);
      if (onChange) {
        onChange(nextValue);
      }
    }
  };

  return <Input value={resultValue} onChange={handleChange} {...rest} />;
};

export default ConditionInput;
