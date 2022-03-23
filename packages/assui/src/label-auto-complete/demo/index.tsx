import React from 'react';
import { Form, Button } from 'antd';
import { LabelAutoComplete } from 'assui';

const Demo = () => {
  const onFinish = (value: any) => {
    console.log('value', value);
  };
  const [options, setOptions] = React.useState<any[]>([]);

  const onBlur = (e) => {
    console.log(e);
  };
  return (
    <Form onFinish={onFinish} style={{ width: 500 }}>
      <Form.Item name="account">
        <LabelAutoComplete
          label="账户"
          allowClear={true}
          options={options}
          onBlur={onBlur}
        />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
