import * as React from 'react';
import isArray from 'lodash/isArray';
import Input from 'antd/es/input';
import type { InputProps } from 'antd/es/input';
import isFunction from 'lodash/isFunction';
import useControllableValue from 'ahooks/lib/useControllableValue';
import parse2RegexOption from './parse2RegexOption';

export interface ConditionInputProps extends Omit<InputProps, 'onChange'> {
  /** 过滤的正则条件 */
  regexp?: RegExp | (RegExp | string | { pattern: RegExp; replacement?: string })[];
  /** 指定输入框展示值的格式 */
  formatter?: (value: string) => string;
  /** 变化回调 */
  onChange?: (value: string) => void;
  /** 输入框内容 */
  value?: string;
}

const ConditionInput = React.forwardRef<unknown, ConditionInputProps>((props, ref) => {
  const [value, setValue] = useControllableValue(props);
  const { regexp, formatter, onChange, ...rest } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: originalValue } = e.target;
    let nextValue = originalValue;
    if (regexp) {
      const resultRegexp = isArray(regexp) ? regexp : [regexp];
      nextValue = resultRegexp.reduce((cur: string, acc) => {
        const regexOption = parse2RegexOption(acc);
        if (regexOption.isValid) {
          return cur.replace(regexOption.pattern, regexOption.replacement);
        }
        return cur;
      }, originalValue) as string;
    }

    if (isFunction(formatter)) {
      nextValue = formatter(nextValue);
    }

    if (value !== nextValue) {
      setValue(nextValue);
    }
  };

  return <Input ref={ref as any} value={value} onChange={handleChange} {...rest} />;
});

export default ConditionInput;
