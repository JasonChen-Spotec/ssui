import React from 'react';
import useControllableValue from 'ahooks/lib/useControllableValue';
import useClickAway from 'ahooks/lib/useClickAway';
import classNames from 'classnames';
import type { NumberInputProps } from '../number-input';
import NumberInput from '../number-input';

export type RangeNumberValue = {
  startInterval?: number | string;
  endInterval?: number | string;
};

export interface LabelRangeNumberProps {
  className?: string;
  disabled?: boolean;
  label: React.ReactNode;
  value?: RangeNumberValue;
  onChange?: (value: RangeNumberValue) => void;
  enableMinus?: boolean;
  numberType?: 'int' | 'float';
  precision?: number;
  connector?: React.ReactNode;
  suffix?: string;
  /** value的数据类型 */
  dataType?: 'number' | 'string';
  startNumberInputProps?: NumberInputProps;
  endNumberInputProps?: NumberInputProps;
}

const defaultValue = {
  startInterval: '',
  endInterval: '',
};

const LabelDatePicker: React.FC<LabelRangeNumberProps> = (props) => {
  const {
    disabled,
    className,
    label,
    enableMinus,
    numberType,
    dataType,
    precision,
    connector,
    startNumberInputProps,
    endNumberInputProps,
  } = props;
  const containerRef = React.useRef<any>(null);
  const startNumberRef = React.useRef<any>(null);
  const [focus, onFocus] = useControllableValue(props, {
    valuePropName: 'focus',
    trigger: 'onFocus',
  });

  const [value, onChangeValue] = useControllableValue(props, {
    defaultValue: {
      startInterval: '',
      endInterval: '',
    },
  });

  useClickAway(() => {
    onFocus(false);
  }, containerRef);

  const onStartChange = (startInterval: any) => {
    onChangeValue({ ...value, startInterval });
  };

  const onEndChange = (endInterval: any) => {
    onChangeValue({ ...value, endInterval });
  };

  const handleLabelClick = () => {
    if (!focus) {
      onFocus(!focus);
    }
    startNumberRef.current?.focus();
  };

  const resultValue = value || defaultValue;

  return (
    <div
      ref={containerRef}
      className={classNames(
        {
          'label-range-number': true,
          'label-range-number-disabled': disabled,
          'label-range-number-focused': focus,
          'label-range-number-label-scale':
            focus || resultValue.endInterval || resultValue.startInterval,
        },
        className,
      )}
    >
      <div className="a-number a-number-range" aria-required="true">
        <div className="a-number-input">
          <NumberInput
            bordered={false}
            enableMinus={enableMinus}
            numberType={numberType}
            precision={precision}
            dataType={dataType}
            {...endNumberInputProps}
            ref={startNumberRef}
            onChange={onStartChange}
            value={resultValue.startInterval}
          />
        </div>
        <div className="a-number-range-separator">{connector || '–'}</div>
        <div className="a-number-input">
          <NumberInput
            bordered={false}
            enableMinus={enableMinus}
            numberType={numberType}
            precision={precision}
            dataType={dataType}
            {...startNumberInputProps}
            onChange={onEndChange}
            value={resultValue.endInterval}
          />
        </div>
      </div>
      <label className="label-range-number-text" onClick={handleLabelClick}>
        {label}
      </label>
    </div>
  );
};

export default LabelDatePicker;
