import React, { useState } from 'react';
import type { RangeValue } from 'rc-picker/lib/interface';
import moment from 'moment';
import { CustomizeRangePicker } from 'assui';

const Demo = () => {
  const now = moment();
  const [date, setDate] = useState<RangeValue<moment.Moment>>([
    now.clone().subtract(6, 'day').startOf('day'),
    now,
  ]);

  const onDateChange = (value: RangeValue<moment.Moment>) => {
    setDate(value);
  };

  return <CustomizeRangePicker value={date} onChange={onDateChange} />;
};

export default Demo;
