import React, { useState } from 'react';
import type { LabelRangePickerProps } from 'assui';
import { LabelCustomizeRangePicker } from 'assui';

type RangeValue = Parameters<NonNullable<LabelRangePickerProps['onChange']>>[0];

const Demo = () => {
  const initData: RangeValue = [null, null];

  const [date, setDate] = useState<RangeValue>(initData);

  const [date1, setDate1] = useState<RangeValue>(initData);

  const onDateChange = (value: RangeValue) => {
    setDate(value);
  };

  const onDateChange1 = (value: RangeValue) => {
    setDate1(value);
  };

  return (
    <div>
      <div>填充默认时间：从当前时间往回推算</div>
      <LabelCustomizeRangePicker
        label="结算时间"
        value={date}
        onChange={onDateChange}
        maxScope={3}
        showTime={{
          format: 'YYYY/MM/DD HH:mm',
        }}
      />
      <br />
      <div>不填充默认时间</div>
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
