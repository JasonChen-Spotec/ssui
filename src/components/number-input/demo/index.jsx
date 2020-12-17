import React from 'react';
import { Form, Button } from 'antd';
// import NumberInput from 'assui/lib/components/number-input';
import NumberInput from '../'

const Demo = () => {
  const onFinish = values => {
    console.log('Received values: ', values);
  };

  return (
    <>
      <NumberInput />

      <Form
        onFinish={onFinish}
        initialValues={
          {
            int: '2323'
          }
        }
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
        <Form.Item
          name="intEnableMinus"
          label="int(enableMinus)"
        >
          <NumberInput enableMinus />
        </Form.Item>
        <Form.Item
          name="floatEnableMinus"
          label="float(enableMinus)"
        >
          <NumberInput numberType="float" enableMinus />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
          Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Demo;

