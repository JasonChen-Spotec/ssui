import React from 'react';
import { ConfigProvider } from 'antd';
import { LabelDatePicker } from 'assui';
import moment from 'moment';

const Demo = () => {
  const now = moment();

  return (
    <ConfigProvider direction="rtl">
      <div dir="rtl" style={{ width: 500 }}>
        <div style={{ marginBottom: 16 }}>
          <LabelDatePicker allowClear defaultValue={now} label="开始日期" />
        </div>
        <LabelDatePicker allowClear defaultValue={now} showTime label="结束时间" />
      </div>
    </ConfigProvider>
  );
};

export default Demo;
