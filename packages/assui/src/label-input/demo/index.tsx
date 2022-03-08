import React from 'react';
import { Form, Button } from 'antd';
import {
  LabelInput,
  LabelDatePicker,
  LabelRangePicker,
  LabelSelect,
  LabelTreeSelect,
  LabelAutoComplete,
} from 'assui';

import styles from './index.less';

const { Option } = LabelSelect;

const options = [
  { value: 'Burns Bay Road', disabled: true },
  { value: 'Downing Street' },
  { value: 'Wall Street' },
];

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

  const onChange = (value) => {
    console.log('--', value);
    setValue(value);
  };

  const tProps = {
    treeData,
    value: value,
    onChange: onChange,
    treeCheckable: true,
    showCheckedStrategy: 'SHOW_ALL' as const,
    style: {
      width: '100%',
    },
  };

  return (
    <Form className={styles.form} onFinish={onFinish} initialValues={{ account: '' }}>
      <Form.Item name="account23232323" rules={[{ required: true }]}>
        <LabelTreeSelect {...tProps} label="代理人" unit="人" />
      </Form.Item>
      <Form.Item name="acco12dunt" rules={[{ required: true }]}>
        <LabelAutoComplete label="账户" allowClear={true} options={options} />
      </Form.Item>
      <Form.Item name="accou111nt" rules={[{ required: true }]}>
        <LabelSelect label="账户">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </LabelSelect>
      </Form.Item>

      <Form.Item name="accoun232t" rules={[{ required: true }]}>
        <LabelRangePicker label="结算时间" />
      </Form.Item>

      <Form.Item name="account2323" rules={[{ required: true }]}>
        <LabelDatePicker label="账" />
      </Form.Item>
      <Form.Item name="account" rules={[{ required: true }]}>
        <LabelInput label="账户安抚是的账户安抚是的账户安抚是的" />
      </Form.Item>

      <Form.Item name="adddd1" rules={[{ required: true }]}>
        <LabelInput label="地址1" suffix="CNY" />
      </Form.Item>

      <Form.Item name="adddd2" rules={[{ required: true }]}>
        <LabelInput label="地址2" prefix="CNY" />
      </Form.Item>

      <Form.Item name="password" rules={[{ required: true }]}>
        <LabelInput type="password" maxLength={5} label="密码" />
      </Form.Item>

      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
