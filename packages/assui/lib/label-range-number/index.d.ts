import React from 'react';
import type { NumberInputProps } from '../number-input';
export type RangeNumberValue = {
    startInterval?: number | string;
    endInterval?: number | string;
};
export interface LabelRangeNumberProps {
    className?: string;
    disabled?: boolean;
    label: React.ReactNode;
    value?: RangeNumberValue;
    onBlur?: (value: RangeNumberValue) => void;
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
declare const LabelDatePicker: React.FC<LabelRangeNumberProps>;
export default LabelDatePicker;
