import React from 'react';
import { Form, Button } from 'antd';
import { AllowComplexValSelect } from 'assui';

const Demo = () => {
  const onFinish = (values) => {
    console.log('Received values: ', values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="primary" label="普通用法">
        <AllowComplexValSelect
          options={[
            { label: '张三', value: 'zhangsan' },
            { label: '李四', value: 'lisi' },
          ]}
        />
      </Form.Item>
      <Form.Item name="array" label="下拉Value是数组">
        <AllowComplexValSelect
          options={[
            { label: '张三指头个数', value: [5, 5, 5, 5] },
            { label: '李四指头个数', value: [6, 6, 6, 6] },
          ]}
          isReferenceTypeVal
        />
      </Form.Item>
      <Form.Item name="object" label="下拉Value是对象">
        <AllowComplexValSelect
          options={[
            { label: '张三信息', value: { name: '张三', sex: '男' } },
            { label: '李四信息', value: { name: '李四', sex: '女' } },
          ]}
          isReferenceTypeVal
        />
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
