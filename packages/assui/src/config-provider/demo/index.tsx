import React, { useState } from 'react';
import { Select } from 'antd';
import type { RangeValue } from 'rc-picker/lib/interface';
import { LabelCustomizeRangePicker, ConfigProvider, LocaleType } from 'assui';
import moment from 'moment';

const { Option } = Select;

const Demo = () => {
  const now = moment();
  const [date, setDate] = useState<RangeValue<moment.Moment>>([
    now.clone().subtract(6, 'day').startOf('day'),
    now,
  ]);
  const [locale, setLocale] = useState<LocaleType>('en-US');

  const onDateChange = (value: RangeValue<moment.Moment>) => {
    setDate(value);
  };
  function handleChange(value) {
    setLocale(value);
  }

  return (
    <div>
      <Select onChange={handleChange} style={{ width: 200, marginBottom: 10 }}>
        <Option value="en-US">English</Option>
        <Option value="zh-CN">中文</Option>
      </Select>
      <ConfigProvider locale={locale}>
        <LabelCustomizeRangePicker
          label="结算时间"
          value={date}
          onChange={onDateChange}
        />
      </ConfigProvider>
    </div>
  );
};

export default Demo;
