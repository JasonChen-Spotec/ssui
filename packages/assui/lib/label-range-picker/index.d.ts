import React from 'react';
import type { RangePickerProps } from 'antd/lib/date-picker';
export interface LabelRangePickerProps extends Omit<RangePickerProps, 'label'> {
    label: React.ReactNode;
    showTime?: any;
}
declare const LabelDatePicker: React.FC<LabelRangePickerProps>;
export default LabelDatePicker;
