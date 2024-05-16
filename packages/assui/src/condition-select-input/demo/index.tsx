import { Form } from 'antd';
import { ConditionSelectInput } from 'assui';
import { InputTypeEnum } from 'assui/lib/condition-select-input';

const demo = () => {
  const onChange = (value: any) => {
    console.log('---onChange', value.selectValue, value.inputValue);
  };

  const onSelectChange = (value: any) => {
    console.log('---onSelectChange', value.selectValue, value.inputValue);
  };

  const options = [
    { label: 'banana', value: 1 },
    { label: 'apple', value: 2 },
  ];

  const selectOptions = [
    {
      label: 'banana',
      value: 1,
      children: [
        { label: '一斤', value: 5 },
        { label: '两斤', value: 8 },
      ],
    },
    {
      label: 'apple',
      value: 2,
      children: [
        { label: '一斤', value: 6 },
        { label: '两斤', value: 10 },
      ],
    },
  ];

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
    >
      <Form.Item name="inputSelect">
        <ConditionSelectInput
          onChange={onChange}
          selectProps={{ options, allowClear: true }}
          hiddenInputKeys={[1]}
          optionsList={options}
        />
      </Form.Item>

      <Form.Item name="selectSelect">
        <ConditionSelectInput
          onChange={onSelectChange}
          inputType={InputTypeEnum.SELECT}
          selectProps={{ options, allowClear: true }}
          conditionSelectProps={{
            allowClear: true,
          }}
          optionsList={selectOptions}
          onBlur={(value) => {
            console.log(value, '触发了');
          }}
        />
      </Form.Item>
    </Form>
  );
};

export default demo;
