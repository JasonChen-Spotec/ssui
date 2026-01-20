import React from 'react';
import { Form, Button } from 'antd';
import { LabelDatePicker } from 'assui';

const Demo = () => {
  const onFinish = (values: any) => {
    console.log('values', values);
  };

  return (
    <Form onFinish={onFinish} style={{ width: 500 }}>
      <Form.Item name="account" rules={[{ required: true }]}>
        <LabelDatePicker label="开始时间" />
      </Form.Item>
      <Form.Item name="endTime" rules={[{ required: true }]}>
        <LabelDatePicker showTime label="结束时间" />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
