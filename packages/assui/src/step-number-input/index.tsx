import * as React from 'react';
import classNames from 'classnames';
import BigNumber from 'bignumber.js';
import isUndefined from 'lodash/isUndefined';

import { INT } from './const/numberType';
import { PLUS, MINUS } from './const/countType';
import NumberInput from '../number-input';

export interface StepNumberInputProps {
  /** 输入框的内容 */
  value?: string | number;
  /** 输入数据的类型 */
  numberType?: 'int' | 'float';
  /** 精度，只对float有效 */
  precision: number;
  /** 内容最大长度 */
  maxLength: number;
  /** 指定输入框展示值的格式 */
  formatter?: (value: string) => string;
  /** 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 */
  parser?: (value: string) => string;
  /** 是否允许输入负数 */
  enableMinus?: boolean;
  /** 步进, 每次点击+/- 多少 */
  step: string | number;
  /** 变化回调 */
  onChange?: (value: string) => void;
  /** 失去焦点回调 */
  onBlur?: (value: string) => void;
  /** 最大值 */
  max?: number;
  /** 最小值 */
  min?: number;
  /** 前缀 */
  prefix?: React.ReactNode;
  /** 后缀 */
  suffix?: React.ReactNode;
  /** 可以点击清除图标删除内容 */
  allowClear?: boolean;
}

const StepNumberInput = (props: StepNumberInputProps) => {
  const { value, onChange, onBlur, numberType, precision, step, max, min, ...restProps } = props;
  const [inputValue, setInputValue] = React.useState('');
  const resultValue = isUndefined(value) ? inputValue : value;
  const isEmpty = isUndefined(resultValue) || resultValue === '';

  const plusNumber = new BigNumber(resultValue).plus(step).toString();
  const minusNumber = new BigNumber(resultValue).minus(step).toString();

  const maxCondition = isUndefined(max)
    ? false
    : max === Number(resultValue) || Number(max) <= Number(plusNumber);

  const minCondition = isUndefined(min)
    ? false
    : min === Number(resultValue) || Number(min) >= Number(minusNumber);

  const onNumberChange = (lastValue: string) => {
    if (resultValue !== lastValue) {
      if (isUndefined(value)) {
        setInputValue(lastValue);
      }
      if (onChange) {
        onChange(lastValue);
      }
    }
  };

  const onClickCount = (symbol: string) => {
    if (isEmpty) {
      return;
    }
    let newNumber = '';

    if (symbol === PLUS) {
      newNumber = maxCondition ? `${max}` : plusNumber;
    } else {
      newNumber = minCondition ? `${min}` : minusNumber;
    }

    if (value === undefined) {
      setInputValue(newNumber);
    }
    if (onChange) {
      onChange(newNumber);
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

    if (!isUndefined(max) && Number(resultValue) > max) {
      if (isUndefined(value)) {
        setInputValue(`${max}`);
      }

      if (onChange) {
        onChange(`${max}`);
      }
    }

    if (!isUndefined(min) && Number(resultValue) < min) {
      if (isUndefined(value)) {
        setInputValue(`${min}`);
      }

      if (onChange) {
        onChange(`${min}`);
      }
    }

    if (onBlur) {
      onBlur(`${resultValue}` || '');
    }
  };

  return (
    <div className="number-range-input">
      <NumberInput
        addonBefore={
          <span
            onClick={() => {
              onClickCount(MINUS);
            }}
            className={classNames('count-minus-btn', { 'disabled-btn': isEmpty || minCondition })}
          >
            -
          </span>
        }
        addonAfter={
          <span
            onClick={() => {
              onClickCount(PLUS);
            }}
            className={classNames('count-add-btn', { 'disabled-btn': isEmpty || maxCondition })}
          >
            +
          </span>
        }
        value={`${resultValue}`}
        onChange={onNumberChange}
        onBlur={onNumberBlur}
        numberType={numberType}
        precision={precision}
        {...restProps}
      />
    </div>
  );
};

StepNumberInput.defaultProps = {
  numberType: INT,
  precision: 2,
  enableMinus: false,
  step: 1,
};

export default StepNumberInput;
