import React from 'react';
import { Form, Button } from 'antd';
import { ConditionInput } from 'assui';

const Demo = () => {
  const onFinish = (values) => {
    console.log('Received values: ', values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="IDAddress" label="ID Address">
        <ConditionInput regexp={/[^A-Za-z]+/g} formatter={(value) => value.toUpperCase()} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;
