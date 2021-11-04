/**
 * title: 在form中使用
 */

import React from 'react';
import { Form, Button } from 'antd';
import { StepNumberInput } from 'assui';

const Demo = () => {
  const onFinish = (values) => {
    console.log('Received values: ', values);
  };

  return (
    <Form
      onFinish={onFinish}
      initialValues={{
        int: 0,
        float: 0.1,
        intEnableMinus: '',
        floatEnableMinus: '',
      }}
    >
      <Form.Item name="int" label="int">
        <StepNumberInput />
      </Form.Item>
      <Form.Item name="float" label="float">
        <StepNumberInput numberType="float" />
      </Form.Item>
      <Form.Item name="intEnableMinus" label="int(enableMinus)">
        <StepNumberInput enableMinus />
      </Form.Item>
      <Form.Item name="floatEnableMinus" label="float(enableMinus)">
        <StepNumberInput numberType="float" enableMinus />
      </Form.Item>
      <Form.Item name="step" label="step(withMinMax)">
        <StepNumberInput step={2} min={0} max={10} placeholder="2 step each time" />
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
