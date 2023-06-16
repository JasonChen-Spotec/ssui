import React from 'react';
import { Form, Button } from 'antd';
import { LabelRangeNumber } from 'assui';

const Demo = () => {
  const onFinish = (value: any) => {
    console.log('value', value);
  };

  const onBlur = () => {
    console.log('--------onBlur');
  };

  return (
    <Form onFinish={onFinish} style={{ width: 500 }}>
      <Form.Item name="account" rules={[{ required: true }]}>
        <LabelRangeNumber label="结算时间" onBlur={onBlur} />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
