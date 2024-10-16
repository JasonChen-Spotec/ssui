import React from 'react';
import { Form, Button } from 'antd';
import { LabelSelect } from 'assui';

const Demo = () => {
  const onFinish = (value: any) => {
    console.log('value', value);
  };

  const options = [
    {
      value: 'jack',
      label: 'Jack',
    },
    {
      value: 'lucy',
      label: 'Lucy',
    },
    {
      value: 'disabled',
      label: 'Disabled',
      disabled: true,
    },
    {
      value: 'water',
      label: '含水电费含水电费含水电费含水电费含水电费含水电费含水电费含水电费',
    },
    {
      value: 'long',
      label: 'hello hello hello hello hello hellohello hello hello hello hello hello',
    },
    {
      value: 'Yiminghe',
      label:
        'yimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyiminghey',
    },
  ];

  return (
    <div>
      <Form onFinish={onFinish} style={{ width: 500 }}>
        <Form.Item name="account" rules={[{ required: true }]}>
          <LabelSelect label="账户" mode="multiple" options={options} />
        </Form.Item>
        <Button htmlType="submit">提交</Button>
      </Form>

      <LabelSelect
        label="账户1"
        allowClear
        mode="multiple"
        options={options}
        onChange={(v) => {
          console.log('2323', v);
        }}
        onBlur={(v) => {
          console.log('onBlur', v);
        }}
      />
    </div>
  );
};

export default Demo;
