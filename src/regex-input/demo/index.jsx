import React from 'react';
import { Form, Button } from 'antd';
import RegexInput from 'assui/lib/regex-input';

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
        label="Number Only"
      >
        <RegexInput regexes={[RegexInput.patterns.NUMBER_ONLY_REGEXP]} />
      </Form.Item>
      <Form.Item
        name="characterNumber"
        label="Character & Number"
      >
        <RegexInput regexes={[RegexInput.patterns.CHARA_NUMBER_REGEXP]} />
      </Form.Item>
      <Form.Item
        name="customized"
        label="Customized(no space & no number)"
      >
        <RegexInput
          regexes={['\\s', { pattern: /\d/g }]}
        />
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

