import React from 'react';
import { Form, Button } from 'antd';
import moment from 'moment';
import { LabelCustomizeRangePicker } from 'assui';
import type { RadioListType } from 'assui/lib/label-customize-range-picker';

const now = moment();

const Demo = () => {
  const onFinish = (value: any) => {
    console.log('value', value);
  };

  const radioList: RadioListType[] = [
    {
      key: '本周',
      text: '本周',
      value: [now.clone().startOf('week'), now.clone().endOf('day')],
    },
    {
      key: 'MONTH',
      text: '本月',
      value: [now.clone().startOf('month'), now.clone().endOf('day')],
    },
    {
      key: '今天',
      text: '今天',
      value: [now.clone().startOf('week'), now.clone().endOf('week')],
    },
    {
      key: '明天',
      text: '明天',
      value: [
        now.clone().add(1, 'day').startOf('day'),
        now.clone().add(1, 'day').endOf('day'),
      ],
    },
    {
      key: '未来七天',
      text: '未来七天',
      value: [
        now.clone().add(1, 'day').startOf('day'),
        now.clone().add(7, 'day').endOf('day'),
      ],
    },
  ];

  return (
    <Form onFinish={onFinish} style={{ width: 500 }}>
      <Form.Item name="time" rules={[{ required: true }]}>
        <LabelCustomizeRangePicker label="结算时间" radioList={radioList} />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
