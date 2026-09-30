import React from 'react';
import type { Moment } from 'moment';
import type { MomentDatePickerProps } from '../moment-date-picker';
export interface LabelDatePickerProps extends Omit<MomentDatePickerProps, 'label' | 'onChange'> {
    label?: React.ReactNode;
    showTime?: any;
    onChange?: (date: Moment | null, dateString: string) => void;
}
declare const LabelDatePicker: React.FC<LabelDatePickerProps>;
export default LabelDatePicker;
