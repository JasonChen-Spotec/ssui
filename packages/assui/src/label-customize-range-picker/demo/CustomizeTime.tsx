import React from 'react';
import { Form, Button } from 'antd';
import moment from 'moment';
import { LabelCustomizeRangePicker } from 'assui';
import type { RadioListType } from 'assui/lib/label-customize-range-picker';
import { dateTypeEnum } from 'assui/lib/label-customize-range-picker/defaultRadioList';

const Demo = () => {
  const now = moment();

  const onFinish = (value: any) => {
    console.log('value', value);
  };

  const [form] = Form.useForm();

  React.useEffect(() => {
    form.setFieldsValue({
      date: [now.clone().startOf('month'), now.clone().endOf('day')],
      time: [now.clone().startOf('month'), now.clone().endOf('day')],
    });
  }, []);

  const radioList: RadioListType[] = [
    {
      key: '本周',
      text: '本周',
      value: [now.clone().startOf('week'), now.clone().endOf('day')],
    },
    {
      key: 'MONTH',
      text: '本月',
      value: [now.clone().startOf('month'), now.clone().endOf('day')],
    },
    {
      key: '今天',
      text: '今天',
      value: [now.clone().startOf('day'), now.clone().endOf('day')],
    },
    {
      key: '明天',
      text: '明天',
      value: [
        now.clone().add(1, 'day').startOf('day'),
        now.clone().add(1, 'day').endOf('day'),
      ],
    },
    {
      key: '未来七天',
      text: '未来七天',
      value: [
        now.clone().add(1, 'day').startOf('day'),
        now.clone().add(7, 'day').endOf('day'),
      ],
    },
  ];

  const customizeTimeList = [
    dateTypeEnum.BEFORE_365_DAY,
    dateTypeEnum.BEFORE_180_DAY,
    dateTypeEnum.BEFORE_7_DAY,
    dateTypeEnum.MONTH,
  ];

  return (
    <Form onFinish={onFinish} style={{ width: 500 }} form={form}>
      <Form.Item name="time" rules={[{ required: true }]}>
        <LabelCustomizeRangePicker label="完全自定义" radioList={radioList} />
      </Form.Item>
      <Form.Item name="date" rules={[{ required: true }]}>
        <LabelCustomizeRangePicker
          label="半自定义"
          customizeTimeList={customizeTimeList}
        />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};

export default Demo;
