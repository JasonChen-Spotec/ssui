import React from 'react';
import type { RangePickerProps } from 'antd/lib/date-picker';
export interface LabelRangePickerProps extends Omit<RangePickerProps, 'label'> {
    label: React.ReactNode;
    showTime?: any;
    popupClassName?: string;
    /** @deprecated `dropdownClassName` 已废弃，请使用 `popupClassName` 代替。 */
    dropdownClassName?: string;
}
declare const LabelDatePicker: React.FC<LabelRangePickerProps>;
export default LabelDatePicker;
