import React, { useState } from 'react';
import type { RangeValue } from 'rc-picker/lib/interface';
import { LabelCustomizeRangePicker } from 'assui';
import moment from 'moment';

const Demo = () => {
  const now = moment();
  const [date, setDate] = useState<RangeValue<moment.Moment>>([
    now.clone().subtract(6, 'day').startOf('day'),
    // now,
  ]);

  const onDateChange = (value: RangeValue<moment.Moment>) => {
    console.log('----', value);
    setDate(value);
  };

  return (
    <LabelCustomizeRangePicker label="结算时间" value={date} onChange={onDateChange} maxScope={3} />
  );
};

export default Demo;
