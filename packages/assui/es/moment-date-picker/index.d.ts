import type { ComponentProps } from 'react';
import { DatePicker } from 'antd';
import type { Moment } from 'moment';
declare const MomentDatePicker: ReturnType<typeof DatePicker.generatePicker<Moment>>;
export type MomentDatePickerProps = ComponentProps<typeof MomentDatePicker<Moment, false>>;
export type MomentRangePickerProps = ComponentProps<typeof MomentDatePicker.RangePicker>;
export type MomentRangeValue = Parameters<NonNullable<MomentRangePickerProps['onChange']>>[0];
export default MomentDatePicker;
