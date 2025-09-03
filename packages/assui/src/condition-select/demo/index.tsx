// import React from 'react';
import { Form, Input, Select } from 'antd';
import { ConditionSelect } from 'assui';
import { useState } from 'react';
import { getComponentConfig } from '../utils/index';

/** 自定义组件 */
function Hello({ title }) {
  return <div>hello:{title}</div>;
}

const list = [
  {
    label: 'value',
    value: 'value',
    name: 'value',
  },
  {
    label: 'input',
    value: 'input',
    name: 'input',
    ...getComponentConfig(Input, {
      placeholder: '123',
      name: 'input',
      parseValue: (v) => v.target.value,
    }),
  },
  {
    label: 'hello',
    value: 'hello',
    name: 'hello',
    ...getComponentConfig(Hello, {
      title: 'hello',
    }),
  },
  {
    label: 'select',
    value: 'select',
    name: 'select',
    ...getComponentConfig(Select, {
      name: 'select',
      options: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
      ],
    }),
  },
];

const demo = () => {
  const [value, setValue] = useState({
    selectValue: 'input',
    input: 'default value',
  });
  return (
    <div>
      <Form
        initialValues={{
          formKey: value,
        }}
      >
        <Form.Item name="formKey">
          {/* <Input /> */}
          <ConditionSelect
            selectName="selectValue"
            option={list}
            onChange={(v) => {
              console.log(v);
              setValue(v);
            }}
          />
        </Form.Item>
      </Form>
      <div>value:{JSON.stringify(value)}</div>
    </div>
  );
};

export default demo;
