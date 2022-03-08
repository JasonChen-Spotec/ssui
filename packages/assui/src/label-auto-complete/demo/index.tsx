import React from 'react';
import { Form, Button } from 'antd';
import { LabelAutoComplete } from 'assui';

const Demo = () => {
  const onFinish = (value: any) => {
    console.log('value', value);
  };
  const [options, setOptions] = React.useState<any[]>([
    { value: 'Burns Bay Road', disabled: true },
    { value: 'Downing Street' },
    { value: 'Wall Street' },
  ]);

  return (
    <Form onFinish={onFinish} style={{ width: 500 }}>
      <Form.Item name="account" rules={[{ required: true }]}>
        <LabelAutoComplete label="账户" allowClear={true} options={options} />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
