import React from 'react';
import { Form, Button } from 'antd';
import { LabelCustomizeRangePicker } from 'assui';

const { dateTypeEnum } = LabelCustomizeRangePicker;

const Demo = () => {
  const onFinish = (value: any) => {
    console.log('value', value);
  };

  const customizeTimeList = [dateTypeEnum.TODAY, dateTypeEnum.WEEK, dateTypeEnum.MONTH];

  const radioList = [
    {
      key: dateTypeEnum.PAST_7_DAY,
      text: '过去七天',
    },
    {
      key: dateTypeEnum.YESTERDAY,
      text: '昨天',
    },
    {
      key: dateTypeEnum.TODAY,
      text: '今天',
    },
    {
      key: dateTypeEnum.TOMORROW,
      text: '明天',
    },
    {
      key: dateTypeEnum.FUTURE_7_DAY,
      text: '未来七天',
    },
  ];

  return (
    <Form onFinish={onFinish} style={{ width: 500 }}>
      <Form.Item name="time" rules={[{ required: true }]}>
        <LabelCustomizeRangePicker
          label="结算时间"
          customizeTimeList={customizeTimeList}
          radioList={radioList}
        />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
