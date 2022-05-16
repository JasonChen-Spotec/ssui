import React, { useState } from 'react';
import type { RangeValue } from 'rc-picker/lib/interface';
import { LabelCustomizeRangePicker } from 'assui';
import ConfigProvider from '../../config-provider';
import moment from 'moment';

const Demo = () => {
  const now = moment();
  const [date, setDate] = useState<RangeValue<moment.Moment>>([
    now.clone().subtract(6, 'day').startOf('day'),
    now,
  ]);

  const onDateChange = (value: RangeValue<moment.Moment>) => {
    setDate(value);
  };

  return (
    <ConfigProvider locale={'en-US'}>
      <LabelCustomizeRangePicker label="结算时间" value={date} onChange={onDateChange} />
    </ConfigProvider>
  );
};

export default Demo;
