import React from 'react';
import { Form, Button } from 'antd';
import { LabelSelect } from 'assui';

const { Option } = LabelSelect;

const Demo = () => {
  const onFinish = (value: any) => {
    console.log('value', value);
  };

  return (
    <Form onFinish={onFinish} style={{ width: 500 }}>
      <Form.Item name="account" rules={[{ required: true }]}>
        <LabelSelect label="账户" mode="multiple">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="water">
            含水电费含水电费含水电费含水电费含水电费含水电费含水电费含水电费
          </Option>
          <Option value="long">
            hello hello hello hello hello hellohello hello hello hello hello hello
          </Option>
          <Option value="Yiminghe">
            yimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyiminghey
          </Option>
        </LabelSelect>
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
