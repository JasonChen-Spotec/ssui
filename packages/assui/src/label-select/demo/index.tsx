import React from 'react';
import { Form, Button } from 'antd';
import { LabelSelect } from 'assui';

const Demo = () => {
  const onFinish = (value: any) => {
    console.log('value', value);
  };
  const options = [
    {
      value: 'jack',
      label: 'Jack',
    },
    {
      value: 'lucy',
      label: 'Lucy',
    },
    {
      value: 'disabled',
      label: 'Disabled',
      disabled: true,
    },
  ];
  return (
    <Form onFinish={onFinish} style={{ width: 500 }}>
      <Form.Item name="account" rules={[{ required: true }]}>
        <LabelSelect label="账户" options={options} />
      </Form.Item>

      <Form.Item name="account1" rules={[{ required: true }]}>
        <LabelSelect label="账户2" options={options} />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
