import * as React from 'react';
import type { TextAreaProps } from 'antd/lib/input';
import Input from 'antd/lib/input';
import trimStart from 'lodash/trimStart';

export interface TAreaProps extends Omit<TextAreaProps, 'onChange'> {
  /** 输入框内容 */
  value: any;
  /** 指定输入框展示值的格式 */
  formatter?: (value: string) => string;
  /** 变化回调 */
  onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ value, onChange, formatter, ...restProps }: TAreaProps) => {
  const [textValue, setTextValue] = React.useState('');
  const isControl = value !== undefined;
  const resultValue = isControl ? value : textValue;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let finallyValue = trimStart(e.target.value);
    if (formatter) {
      finallyValue = formatter(finallyValue);
    }

    if (!isControl) {
      setTextValue(finallyValue);
    }
    if (onChange) {
      onChange(finallyValue, e);
    }
  };

  return <Input.TextArea value={resultValue} onChange={handleChange} {...restProps} />;
};

export default TextArea;
