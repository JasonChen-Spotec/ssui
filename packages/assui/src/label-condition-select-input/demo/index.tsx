import { Form } from 'antd';
import { LabelConditionSelectInput } from 'assui';
import { InputTypeEnum } from 'assui/lib/label-condition-select-input';

const testData = [
  {
    type: 1,
    name: 'Bank Transfer',
    order: 1,
    child: [
      {
        key: 1,
        val: 'Bank Transfer',
      },
      {
        key: 5,
        val: 'IDR PAY',
      },
      {
        key: 6,
        val: 'MYR PAY',
      },
      {
        key: 7,
        val: 'THB PAY',
      },
      {
        key: 8,
        val: 'VND PAY',
      },
      {
        key: 12,
        val: 'UnionPay 2',
      },
      {
        key: 13,
        val: 'UnionPay 3',
      },
      {
        key: 14,
        val: 'Poli PAY',
      },
      {
        key: 15,
        val: 'UnionPay5',
      },
      {
        key: 17,
        val: 'UnionPay1',
      },
      {
        key: 19,
        val: 'UnionPay4',
      },
      {
        key: 20,
        val: 'UnionPay6',
      },
      {
        key: 22,
        val: 'UnionPay8',
      },
      {
        key: 23,
        val: 'UnionPay9',
      },
      {
        key: 24,
        val: 'UnionPay10',
      },
      {
        key: 25,
        val: 'UnionPay7',
      },
      {
        key: 28,
        val: 'UnionPay 11',
      },
      {
        key: 29,
        val: 'UnionPay 12',
      },
      {
        key: 30,
        val: 'UnionPay 13',
      },
      {
        key: 31,
        val: 'UnionPay 14',
      },
    ],
  },
  {
    type: 2,
    name: 'ELECTRONIC_WALLET',
    order: 2,
    child: [
      {
        key: 4,
        val: 'OTC123',
      },
      {
        key: 21,
        val: 'OTC365',
      },
      {
        key: 32,
        val: 'Sticpay',
      },
      {
        key: 34,
        val: 'Alipay',
      },
      {
        key: 35,
        val: 'Alipay1',
      },
      {
        key: 36,
        val: 'CheezeePay',
      },
    ],
  },
  {
    type: 4,
    name: 'International Bank Wire',
    order: 4,
    child: [
      {
        key: 2,
        val: 'International Bank Wire',
      },
    ],
  },
  {
    type: 5,
    name: 'Internal Transfer',
    order: 5,
    child: [
      {
        key: 3,
        val: 'Internal Transfer',
      },
    ],
  },
  {
    type: 6,
    name: 'CopyWealth',
    order: 6,
    child: [
      {
        key: 33,
        val: 'CopyWealth',
      },
    ],
  },
  {
    type: 0,
    name: 'other',
    order: 7,
    child: [
      {
        key: 0,
        val: 'other',
      },
    ],
  },
];

const options1 = testData.map((item: any) => {
  const children = item.child.map((childItem) => ({
    label: childItem.val,
    value: childItem.key,
  }));

  return {
    label: item.name,
    value: item.type,
    children,
  };
});

const demo = () => {
  const onChange = (value: any) => {
    console.log('---onChange', value);
  };

  const onSelectChange = (value: any) => {
    console.log('---onSelectChange', value);
  };

  const options = [
    { label: 'banana', value: 1 },
    { label: 'apple', value: 2 },
  ];

  const onFieldsChange = (value: any) => {
    console.log(value, 'value');
  };

  return (
    <Form
      initialValues={{
        inputSelect: {
          selectValue: 2,
          inputValue: '1元',
        },
        selectSelect: {
          selectValue: 1,
          inputValue: 5,
        },
      }}
      onFieldsChange={onFieldsChange}
    >
      <Form.Item name="inputSelect">
        <LabelConditionSelectInput
          label="Vegetables"
          onChange={onChange}
          onChangeSelectType={(name) => {
            console.log('2323', name);
          }}
          selectProps={{ options, allowClear: true }}
          hiddenInputKeys={[1]}
          optionsList={options}
          onBlur={() => {
            console.log('触发了');
          }}
        />
      </Form.Item>

      <Form.Item name="selectSelect">
        <LabelConditionSelectInput
          label="Vegetables"
          onChange={onSelectChange}
          onChangeSelectType={(name) => {
            console.log('2323', name);
          }}
          inputType={InputTypeEnum.SELECT}
          selectProps={{ allowClear: true }}
          conditionSelectProps={{
            allowClear: true,
          }}
          optionsList={options1}
          onBlur={(value) => {
            console.log(value, '触发了');
          }}
        />
      </Form.Item>
      <Form.Item name="selectSelect1">
        <LabelConditionSelectInput
          label="Vegetables"
          onChange={onSelectChange}
          inputType={InputTypeEnum.SELECT}
          selectProps={{ allowClear: true }}
          conditionSelectProps={{
            allowClear: true,
            mode: 'multiple',
          }}
          optionsList={options1}
          onBlur={(value) => {
            console.log(value, 'onBlur触发了');
          }}
        />
      </Form.Item>
    </Form>
  );
};

export default demo;
