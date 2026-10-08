import React from 'react';
import { ConfigProvider } from 'antd';
import { LabelCustomizeRangePicker } from 'assui';
import moment from 'moment';

const Demo = () => {
  const now = moment();

  return (
    <ConfigProvider direction="rtl">
      <div dir="rtl" style={{ width: 500 }}>
        <div style={{ marginBottom: 16 }}>
          <LabelCustomizeRangePicker
            allowClear
            defaultValue={[now.clone().subtract(7, 'days'), now]}
            label="日期范围"
          />
        </div>
        <LabelCustomizeRangePicker
          allowClear
          defaultValue={[now.clone().subtract(7, 'days'), now]}
          showTime
          label="时间范围"
        />
      </div>
    </ConfigProvider>
  );
};

export default Demo;
