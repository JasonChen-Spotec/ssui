import * as React from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import DisabledContext from 'antd/lib/config-provider/DisabledContext';
import BigNumber from 'bignumber.js';
import classNames from 'classnames';
import isUndefined from 'lodash/isUndefined';
import NumberInput from '../number-input';
import { MINUS, PLUS } from './const/countType';
import { INT } from './const/numberType';

export interface StepNumberInputProps {
  /** 输入框的内容 */
  value?: string | number;
  /** 输入数据的类型 */
  numberType?: 'int' | 'float';
  /** 精度，只对float有效 */
  precision?: number;
  /** 内容最大长度 */
  maxLength?: number;
  /** 指定输入框展示值的格式 */
  formatter?: (value: string) => string;
  /** 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 */
  parser?: (value: string) => string;
  /** 是否允许输入负数 */
  enableMinus?: boolean;
  /** 步进, 每次点击+/- 多少 */
  step?: string | number;
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
  disabled?: boolean;
}

const StepNumberInput = (props: StepNumberInputProps) => {
  const [value, setValue] = useControllableValue(props, { defaultValue: '' });
  const {
    onChange,
    onBlur,
    numberType = INT,
    precision = 2,
    step = 1,
    max,
    min,
    disabled: customDisabled,
    enableMinus = false,
    ...restProps
  } = props;
  const isEmpty = isUndefined(value) || value === '';

  const plusNumber = new BigNumber(value).plus(step).toString();
  const minusNumber = new BigNumber(value).minus(step).toString();

  const maxCondition = isUndefined(max)
    ? false
    : max === Number(value) || Number(max) < Number(plusNumber);

  const minCondition = isUndefined(min)
    ? false
    : min === Number(value) || Number(min) > Number(minusNumber);

  // ===================== Disabled =====================
  const disabled = React.useContext(DisabledContext);
  const mergedDisabled = customDisabled ?? disabled;

  const minusDisabled = isEmpty || minCondition || mergedDisabled;
  const addDisabled = isEmpty || maxCondition || mergedDisabled;

  const onNumberChange = (lastValue: any) => {
    if (value !== lastValue) {
      setValue(lastValue);
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

    setValue(newNumber);
  };

  const onNumberBlur = () => {
    let resultValue = value;
    if (value === '-' || value === '.') {
      resultValue = '';
    }

    if (!isUndefined(max) && Number(value) > max) {
      resultValue = `${max}`;
    }

    if (!isUndefined(min) && Number(value) < min) {
      resultValue = `${min}`;
    }
    setValue(resultValue);
    onBlur?.(resultValue);
  };

  return (
    <div className="number-range-input">
      <NumberInput
        addonBefore={
          <span
            onClick={minusDisabled ? undefined : () => onClickCount(MINUS)}
            className={classNames('count-minus-btn', {
              'disabled-btn': minusDisabled,
            })}
          >
            -
          </span>
        }
        addonAfter={
          <span
            onClick={addDisabled ? undefined : () => onClickCount(PLUS)}
            className={classNames('count-add-btn', {
              'disabled-btn': addDisabled,
            })}
          >
            +
          </span>
        }
        value={`${value}`}
        onChange={onNumberChange}
        onBlur={onNumberBlur}
        numberType={numberType}
        precision={precision}
        disabled={mergedDisabled}
        enableMinus={enableMinus}
        {...restProps}
      />
    </div>
  );
};

export default StepNumberInput;
