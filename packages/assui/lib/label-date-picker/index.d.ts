import type { DatePickerProps } from 'antd/lib/date-picker';
import React from 'react';
export interface LabelDatePickerProps extends Omit<DatePickerProps, 'label'> {
  label?: React.ReactNode;
}
declare const LabelDatePicker: React.FC<LabelDatePickerProps>;
export default LabelDatePicker;
