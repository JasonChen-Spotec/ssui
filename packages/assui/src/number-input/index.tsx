import * as React from 'react';
import type { InputProps } from 'antd/es/input';
import Input from 'antd/es/input';
import isUndefined from 'lodash/isUndefined';
import endsWith from 'lodash/endsWith';
import dataTypeEnum from './const/dataTypeEnum';
import * as numberTypeEnum from './const/numberType';
import { filterInt, filterFloat } from './utils';

export interface NumberInputProps extends Omit<InputProps, 'onChange' | 'onBlur'> {
  /** 输入框的内容 */
  value?: string | number;
  /** 输入数据的类型 */
  numberType?: 'int' | 'float';
  /** value的数据类型 */
  dataType?: dataTypeEnum.number | dataTypeEnum.string;
  /** 精度，只对float有效 */
  precision?: number;
  /** 同html input属性功能 */
  maxLength?: number;
  /** 指定输入框展示值的格式 */
  formatter?: (value: string) => string;
  /** 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 */
  parser?: (value: string) => string;
  /** 是否允许输入负数 */
  enableMinus?: boolean;
  /** 变化回调 */
  onChange?: (value: string | number) => void;
  /** 失去焦点回调 */
  onBlur?: (value: string) => void;
  /** 按下回车的回调 */
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  /** 带标签的 input，设置前置标签 */
  addonBefore?: React.ReactNode;
  /** 带标签的 input，设置后置标签 */
  addonAfter?: React.ReactNode;
  /** 前缀 */
  prefix?: React.ReactNode;
  /** 后缀 */
  suffix?: React.ReactNode;
  /** 可以点击清除图标删除内容 */
  allowClear?: boolean;
}

const NumberInput = React.forwardRef<unknown, NumberInputProps>((props, ref) => {
  const {
    value,
    onChange,
    numberType = numberTypeEnum.INT,
    dataType = dataTypeEnum.number,
    precision,
    formatter,
    parser,
    enableMinus,
    onBlur,
    maxLength,
    ...restProps
  } = props;

  const [inputValue, setInputValue] = React.useState('');
  const resultValue = isUndefined(value) ? inputValue : value;

  const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newNumber;
    const newValue = e.target.value;

    if (numberType === numberTypeEnum.INT) {
      newNumber = filterInt({ value: newValue, preValue: `${resultValue}`, enableMinus });
    } else {
      newNumber = filterFloat({
        value: newValue,
        preValue: `${resultValue}`,
        precision: precision ?? 2,
        enableMinus,
      });
    }

    if (parser) {
      newNumber = parser(newNumber);
    }

    if (resultValue !== newNumber) {
      if (value === undefined) {
        setInputValue(newNumber);
      }

      if (onChange) {
        if (dataType === dataTypeEnum.number) {
          if (newNumber === '') {
            onChange(newNumber);
            return;
          }

          if (numberType === numberTypeEnum.INT) {
            onChange(+newNumber);
          } else {
            endsWith(newNumber, '.') || endsWith(newNumber, '.0')
              ? onChange(newNumber)
              : onChange(+newNumber);
          }
        } else {
          onChange(newNumber);
        }
      }
    }
  };

  const onNumberBlur = () => {
    if (resultValue === '-' || resultValue === '.') {
      if (value === undefined) {
        setInputValue('');
      }

      if (onChange) {
        onChange('');
      }
    }

    if (dataType === dataTypeEnum.number) {
      if (
        numberType === numberTypeEnum.FLOAT &&
        (endsWith(`${resultValue}`, '.') || endsWith(`${resultValue}`, '.0'))
      ) {
        onChange && onChange(parseInt(`${resultValue}`, 10));
      }
    }

    if (onBlur) {
      onBlur(`${resultValue}`);
    }
  };

  const finallyValue = formatter ? formatter(`${resultValue}`) : resultValue;

  return (
    <Input
      type="text"
      ref={ref as any}
      value={finallyValue}
      onBlur={onNumberBlur}
      onChange={onNumberChange}
      maxLength={maxLength}
      {...restProps}
    />
  );
});

NumberInput.defaultProps = {
  enableMinus: false,
};

export { numberTypeEnum, dataTypeEnum };
export default NumberInput;
