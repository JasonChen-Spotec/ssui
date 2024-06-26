import React from 'react';
import { Form, Button } from 'antd';
import { LabelRangePicker } from 'assui';

const Demo = () => {
  const onFinish = (value: any) => {
    console.log('value', value);
  };

  return (
    <Form onFinish={onFinish} style={{ width: 500 }}>
      <Form.Item name="account" rules={[{ required: true }]}>
        <LabelRangePicker label="结算时间" />
      </Form.Item>
      <Form.Item name="time" rules={[{ required: true }]}>
        <LabelRangePicker label="超长标题溢出省略超长标题溢出省略超长标题溢出省略" />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
