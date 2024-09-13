import React from 'react';
import { Form, Button } from 'antd';
import { ComplexValSelect } from 'assui';

const Demo = () => {
  const onFinish = (values) => {
    console.log('Received values: ', values);
  };

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
          value: { spell: 'jieke', voice: 2 },
        },
      ],
    },
    {
      label: 'Lucy',
      options: [
        {
          label: 'lucy1',
          value: { spell: 'luxi1', voice: 1 },
          disabled: true,
        },
        {
          label: 'lucy2',
          value: { spell: 'luxi2', voice: 2 },
        },
      ],
    },
  ];

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="primary" label="普通用法">
        <ComplexValSelect
          options={[
            { label: '张三', value: 0 },
            { label: '李四', value: 1 },
          ]}
        />
      </Form.Item>
      <Form.Item name="array" label="下拉Value是数组">
        <ComplexValSelect
          options={[
            { label: '张三指头个数', value: [5, 5, 5, 5] },
            { label: '李四指头个数', value: [6, 6, 6, 6] },
          ]}
        />
      </Form.Item>
      <Form.Item name="object" label="下拉Value是对象">
        <ComplexValSelect
          options={[
            { label: '张三信息', value: { name: '张三', sex: '男' } },
            { label: '李四信息', value: { name: '李四', sex: '女' } },
          ]}
        />
      </Form.Item>
      <Form.Item name="options" label="更复杂的下拉数据">
        <ComplexValSelect options={complexValOptions} />
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
