import * as React from 'react';
import type { InputProps } from 'antd/es/input';
import Input from 'antd/es/input';
import useControllableValue from 'ahooks/lib/useControllableValue';
import { omit } from 'lodash';
import * as dataTypeEnum from './const/dataTypeEnum';
import * as numberTypeEnum from './const/numberType';
import { filterInt, filterFloat } from './utils';

export type NumberInputValueType = string | number;

export interface NumberInputProps extends Omit<InputProps, 'onChange' | 'onBlur'> {
  /** 输入框的内容 */
  value?: NumberInputValueType;
  /** 输入数据的类型 */
  numberType?: 'int' | 'float';
  /** value的数据类型 */
  dataType?: 'number' | 'string';
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
  onChange?: (value: NumberInputValueType) => void;
  /** 失去焦点回调 */
  onBlur?: (value: NumberInputValueType) => void;
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
  const [value, setValue] = useControllableValue<NumberInputValueType>(props, {
    defaultValue: '',
  });

  const {
    onChange,
    numberType = numberTypeEnum.INT,
    dataType = dataTypeEnum.NUMBER,
    precision,
    formatter,
    parser,
    enableMinus,
    onBlur,
    maxLength,
    ...restProps
  } = props;

  const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newNumber;
    const newValue = e.target.value;

    if (numberType === numberTypeEnum.INT) {
      newNumber = filterInt({ value: newValue, preValue: `${value}`, enableMinus });
    } else {
      newNumber = filterFloat({
        value: newValue,
        preValue: `${value}`,
        precision: precision ?? 2,
        enableMinus,
      });
    }

    if (parser) {
      newNumber = parser(newNumber);
    }

    if (value !== newNumber) {
      setValue(newNumber);
    }
  };

  const onNumberBlur = () => {
    let resultValue: NumberInputValueType = value;

    if (value === '-' || value === '.') {
      resultValue = '';
    } else if (value && dataType === dataTypeEnum.NUMBER) {
      if (numberType === numberTypeEnum.FLOAT) {
        resultValue = +value;
      } else {
        resultValue = parseInt(`${value}`, 10);
      }
    }

    setValue(resultValue);
    onBlur?.(resultValue);
  };

  const finallyValue = formatter ? formatter(`${value}`) : value;

  return (
    <Input
      type="text"
      ref={ref as any}
      value={finallyValue}
      onBlur={onNumberBlur}
      onChange={onNumberChange}
      maxLength={maxLength}
      {...omit(restProps, ['value'])}
    />
  );
});

NumberInput.defaultProps = {
  enableMinus: false,
};

export { numberTypeEnum, dataTypeEnum };
export default NumberInput;
