import React, { useState } from 'react';
import type { LabelRangePickerProps } from 'assui';
import { LabelCustomizeRangePicker } from 'assui';
import moment from 'moment';

type RangeValue = Parameters<NonNullable<LabelRangePickerProps['onChange']>>[0];

const Demo = () => {
  const now = moment();
  const [date, setDate] = useState<RangeValue>([
    now.clone().subtract(6, 'day').startOf('day'),
    now,
  ]);

  const onDateChange = (value: RangeValue) => {
    setDate(value);
  };

  return <LabelCustomizeRangePicker label="结算时间" value={date} onChange={onDateChange} />;
};

export default Demo;
