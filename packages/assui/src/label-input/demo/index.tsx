import React from 'react';
import { Form, Button } from 'antd';
import { LabelInput } from 'assui';

const Demo = () => {
  const onFinish = (value: any) => {
    console.log('value', value);
  };

  return (
    <Form onFinish={onFinish} initialValues={{ account: '2323' }}>
      <Form.Item name="account" rules={[{ required: true }]}>
        <LabelInput label="账户" />
      </Form.Item>

      <Form.Item name="adddd1" rules={[{ required: true }]}>
        <LabelInput label="地址1" suffix="CNY" />
      </Form.Item>

      <Form.Item name="adddd2" rules={[{ required: true }]}>
        <LabelInput label="地址2" prefix="CNY" />
      </Form.Item>

      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
