import * as React from 'react';
import Input from 'antd/es/input';
import { INT } from './const/numberType';
import { filterInt, filterFloat } from './utils';

export interface NumberInputProps {
  /** 输入框的内容 */
  value?: string;
  /** 输入数据的类型 */
  numberType?: 'int' | 'float';
  /** 精度，只对float有效 */
  precision: number;
  /** 同html input属性功能 */
  maxLength: number;
  /** 指定输入框展示值的格式 */
  formatter?: (value: string) => string;
  /** 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 */
  parser?: (value: string) => string;
  /** 是否允许输入负数 */
  enableMinus?: boolean;
  /** 变化回调 */
  onChange?: (value: string) => void;
  /** 失去焦点回调 */
  onBlur?: (value: string) => void;
}

const NumberInput = (props: NumberInputProps) => {
  const {
    value,
    onChange,
    numberType,
    precision,
    formatter,
    parser,
    enableMinus,
    onBlur,
    maxLength,
    ...restProps
  } = props;

  const [number, setNumber] = React.useState('');
  const resultValue = value === undefined ? number : value;

  const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newNumber;
    const newValue = e.target.value;

    if (numberType === INT) {
      newNumber = filterInt({ value: newValue, preValue: resultValue, enableMinus });
    } else {
      newNumber = filterFloat({ value: newValue, preValue: resultValue, precision, enableMinus });
    }

    if (parser) {
      newNumber = parser(newNumber);
    }

    // if (numberType === INT) {
    //   if (enableMinus && +newNumber > 0 && newNumber.length > maxLength - 1) {
    //     return;
    //   }
    // }

    if (resultValue !== newNumber) {
      if (value === undefined) {
        setNumber(newNumber);
      }

      if (onChange) {
        onChange(newNumber);
      }
    }
  };

  const onNumberBlur = () => {
    if (resultValue === '-' || resultValue === '.') {
      if (value === undefined) {
        setNumber('');
      }

      if (onChange) {
        onChange('');
      }
    }

    if (onBlur) {
      onBlur(resultValue || '');
    }
  };

  const inputValue = formatter ? formatter(resultValue) : resultValue;

  return (
    <Input
      type="text"
      value={inputValue}
      onBlur={onNumberBlur}
      onChange={onNumberChange}
      maxLength={maxLength}
      {...restProps}
    />
  );
};

NumberInput.defaultProps = {
  numberType: INT,
  precision: 2,
  enableMinus: false,
};

export default NumberInput;
