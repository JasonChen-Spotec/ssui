import React from 'react';
import { Form, Button, TreeSelect } from 'antd';
import LabelSelectTree from '../index';
import '../style/index';

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

const Demo = () => {
  const [value, setValue] = React.useState(['0-0-0']);
  const onFinish = (value: any) => {
    console.log('value', value);
  };

  const { SHOW_ALL } = TreeSelect;

  const onChange = (value) => {
    console.log('--', value);
    setValue(value);
  };

  const tProps = {
    treeData,
    value: value,
    onChange: onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_ALL,
    style: {
      width: '100%',
    },
  };

  return (
    <Form onFinish={onFinish} style={{ width: 500 }}>
      <Form.Item name="account" rules={[{ required: true }]}>
        <LabelSelectTree {...tProps} label="代理人" unit="人" />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
