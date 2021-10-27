import React from 'react';
import { RichTextEditor } from 'assui';
import { Form, Button } from 'antd';

const Demo = () => {
  const onFinish = (values) => {
    console.log('Received values: ', values);
  };

  return (
    <Form
      onFinish={onFinish}
      initialValues={{
        desc: '0.1',
      }}
    >
      <Form.Item
        name="desc"
        label="详情"
        trigger="onEditorChange"
        rules={[{ required: true, message: '详情是必须的' }]}
      >
        <RichTextEditor />
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
