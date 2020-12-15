import React from 'react';
import { Form, Button } from 'antd';
import RegexInput from 'assui/lib/components/regex-input';

const Demo = () => {
  const onFinish = values => {
    console.log('Received values: ', values);
  };

  return (
    <Form
      onFinish={onFinish}
    >
      <Form.Item
        name="numberOnly"
        label="number only"
      >
        <RegexInput regexes={[RegexInput.patterns.NUMBER_ONLY_REGEXP]} />
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

