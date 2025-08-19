import type { RangePickerProps } from 'antd/lib/date-picker';
import React from 'react';
export interface LabelRangePickerProps extends Omit<RangePickerProps, 'label'> {
  label: React.ReactNode;
  showTime?: any;
}
declare const LabelDatePicker: React.FC<LabelRangePickerProps>;
export default LabelDatePicker;
