import React, { useState } from 'react';
import moment from 'moment';
import type { RangeValue } from 'rc-picker/lib/interface';
import { LabelCustomizeRangePicker } from 'assui';

const Demo = () => {
  const initData: RangeValue<moment.Moment> = [null, null];

  const [date, setDate] = useState<RangeValue<moment.Moment>>(initData);

  const [date1, setDate1] = useState<RangeValue<moment.Moment>>(initData);

  const onDateChange = (value: RangeValue<moment.Moment>) => {
    setDate(value);
  };

  const onDateChange1 = (value: RangeValue<moment.Moment>) => {
    setDate1(value);
  };

  return (
    <div>
      <LabelCustomizeRangePicker
        label="结算时间"
        value={date}
        onChange={onDateChange}
        maxScope={3}
        showTime={{
          format: 'YYYY/MM/DD HH:mm',
        }}
      />
      <LabelCustomizeRangePicker
        value={date1}
        rangePickerType="origin"
        onChange={onDateChange1}
        allowClear
        fillDefaultDate={false}
        maxScope={3}
        showTime={{
          format: 'YYYY/MM/DD HH:mm',
        }}
      />
    </div>
  );
};

export default Demo;
