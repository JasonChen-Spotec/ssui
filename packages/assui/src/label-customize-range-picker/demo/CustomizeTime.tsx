import React from 'react';
import { Form, Button } from 'antd';
import { LabelCustomizeRangePicker } from 'assui';

const { dateTypeEnum } = LabelCustomizeRangePicker;

const Demo = () => {
  const onFinish = (value: any) => {
    console.log('value', value);
  };

  const customizeTimeList = [dateTypeEnum.TODAY, dateTypeEnum.WEEK, dateTypeEnum.MONTH];

  return (
    <Form onFinish={onFinish} style={{ width: 500 }}>
      <Form.Item name="time" rules={[{ required: true }]}>
        <LabelCustomizeRangePicker
          label="结算时间"
          customizeTimeList={customizeTimeList}
        />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
