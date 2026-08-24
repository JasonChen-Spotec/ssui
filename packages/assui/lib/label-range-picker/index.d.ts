import React from 'react';
declare const RangePicker: import("antd/lib/date-picker/generatePicker/interface").PickerComponentClass<import("antd/lib/date-picker/generatePicker").RangePickerProps<import("moment").Moment> & {
    dropdownClassName?: string | undefined;
    popupClassName?: string | undefined;
}, unknown>;
export interface LabelRangePickerProps extends Omit<React.ComponentProps<typeof RangePicker>, 'label'> {
    label: React.ReactNode;
    showTime?: any;
}
declare const LabelDatePicker: React.FC<LabelRangePickerProps>;
export default LabelDatePicker;
