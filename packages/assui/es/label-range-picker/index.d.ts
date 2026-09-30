import React from 'react';
import type { MomentRangePickerProps } from '../moment-date-picker';
export interface LabelRangePickerProps extends Omit<MomentRangePickerProps, 'label'> {
    label: React.ReactNode;
    showTime?: any;
}
declare const LabelDatePicker: React.FC<LabelRangePickerProps>;
export default LabelDatePicker;
