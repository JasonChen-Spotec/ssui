import React, { useState } from 'react';
import type { RangeValue } from 'rc-picker/lib/interface';
import { LabelCustomizeRangePicker } from 'assui';

const Demo = () => {
  const initData: RangeValue<moment.Moment> = [null, null];

  const [date, setDate] = useState<RangeValue<moment.Moment>>(initData);

  const onDateChange = (value: RangeValue<moment.Moment>) => {
    setDate(value);
  };

  return (
    <LabelCustomizeRangePicker label="结算时间" value={date} onChange={onDateChange} maxScope={3} />
  );
};

export default Demo;
