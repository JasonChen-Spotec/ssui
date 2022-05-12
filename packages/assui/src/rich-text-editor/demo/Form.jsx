import React from 'react';
import { RichTextEditor } from 'assui';
import { Form, Button } from 'antd';

const firstToolbar =
  'undo redo | blocks fontsize | ' +
  'bold italic underline forecolor backcolor charmap | ' +
  'alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | ' +
  'removeformat | help';

const defaultToolbar = [firstToolbar, 'code table | image | removeformat | help'];

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
        <RichTextEditor init={{ toolbar: defaultToolbar }} />
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
