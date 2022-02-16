import React from 'react';
import { Form, Button } from 'antd';
import { LabelTextArea } from 'assui';

const Demo = () => {
  const onFinish = (value: any) => {
    console.log('value', value);
  };

  return (
    <Form onFinish={onFinish} initialValues={{ account: '2323' }}>
      <Form.Item name="account" rules={[{ required: true }]}>
        <LabelTextArea label="账户" />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
