import type { ComponentProps } from 'react';
import momentGenerateConfig from '@rc-component/picker/lib/generate/moment';
import { DatePicker } from 'antd';
import type { Moment } from 'moment';

// Keep assui's public date values and callbacks compatible with Moment.
const MomentDatePicker: ReturnType<typeof DatePicker.generatePicker<Moment>> =
  DatePicker.generatePicker<Moment>(momentGenerateConfig);

export type MomentDatePickerProps = ComponentProps<
  typeof MomentDatePicker<Moment, false>
>;
export type MomentRangePickerProps = ComponentProps<typeof MomentDatePicker.RangePicker>;
export type MomentRangeValue = Parameters<
  NonNullable<MomentRangePickerProps['onChange']>
>[0];

export default MomentDatePicker;
