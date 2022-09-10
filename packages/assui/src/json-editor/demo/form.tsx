import React from 'react';
import { Form, Button } from 'antd';
import { JsonEditor } from 'assui';

const Demo = () => {
  const onChange = (resValues) => {
    console.log('Received values: ', resValues);
  };

  const onFinish = (values) => {
    console.log('values', values);
  };
  var json = {
    Array: [1, 2, 3],
    Boolean: true,
    Null: null,
    Number: 123,
    Object: { a: 'b', c: 'd' },
    String: 'Hello World',
  };

  return (
    <div>
      <Form onFinish={onFinish} initialValues={{ content: json }}>
        <Form.Item name="content">
          <JsonEditor onChange={onChange} />
        </Form.Item>

        <Button htmlType="submit">提交</Button>
      </Form>
    </div>
  );
};

export default Demo;
