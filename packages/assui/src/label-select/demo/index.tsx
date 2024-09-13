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
  ];

  const complexValOptions = [
    {
      label: 'Jack',
      options: [
        {
          label: '杰克',
          value: { spell: 'jieke', voice: 1 },
        },
        {
          label: '捷克',
          options: [
            {
              label: '111',
              value: { spell: 'jieke', voice: 2 },
            },
          ],
        },
      ],
    },
    {
      label: 'Lucy',
      options: [
        {
          label: '路西',
          value: { spell: 'luxi', voice: 1 },
        },
      ],
    },
    {
      label: 'Disabled',
      value: { spell: 'disabled', voice: 3 },
      disabled: true,
    },
  ];

  return (
    <Form onFinish={onFinish} style={{ width: 500 }}>
      <Form.Item name="account" rules={[{ required: true }]}>
        <LabelSelect label="账户" options={options} />
      </Form.Item>
      <Form.Item name="account1" rules={[{ required: true }]}>
        <LabelSelect label="账户1" options={options} />
      </Form.Item>
      <Form.Item name="account2" rules={[{ required: true }]}>
        <LabelSelect label="账户2" options={complexValOptions} />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
