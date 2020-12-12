import React from 'react';
import { Form, Button } from 'antd';
import NumberInput from '../index';

const Demo = () => {
  const onFinish = (values) => {
    console.log('Received values: ', values);
  };

  return (
    <Form
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item
        name="int"
        label="int"
      >
        <NumberInput />
      </Form.Item>
      <Form.Item
        name="float"
        label="float"
      >
        <NumberInput numberType="float" />
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

