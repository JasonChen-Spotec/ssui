import React from 'react';
import { Form, Button } from 'antd';
import { LabelCustomizeRangePicker } from 'assui';

const Demo = () => {
  const onFinish = (value: any) => {
    console.log('value', value);
  };

  return (
    <Form onFinish={onFinish} style={{ width: 500 }}>
      <Form.Item name="time" rules={[{ required: true }]} label="label 类型">
        <LabelCustomizeRangePicker label="结算时间" />
      </Form.Item>
      <Form.Item name="date" rules={[{ required: true }]} label="普通 类型">
        <LabelCustomizeRangePicker rangePickerType="origin" showTime />
      </Form.Item>
      <Form.Item name="date" rules={[{ required: true }]} label="无自定义 类型">
        <LabelCustomizeRangePicker rangePickerType="origin" showTime showShortcutPanel={false} />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
