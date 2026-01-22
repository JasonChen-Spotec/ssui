import useControllableValue from 'ahooks/lib/useControllableValue';
import Col from 'antd/lib/grid/col';
import Row from 'antd/lib/grid/row';
import Select from 'antd/lib/select';
import omit from 'lodash/omit';
import isNil from 'lodash/isNil';
import React from 'react';
import classNames from 'classnames';
import ArrowDownOutlined from 'a-icons/lib/ArrowDownOutlined';
import type { ConditionSelectProps, ValueType } from './types';

const ConditionSelect = ({
  option,
  value,
  onChange,
  selectProps,
  selectName,
}: ConditionSelectProps) => {
  const [componentValue, setComponentValue] = useControllableValue({ value, onChange });
  const current = React.useMemo(() => {
    if (isNil(componentValue) || isNil(componentValue[selectName]) || !option || option.length === 0) {
      return null;
    }
    const result = option.find((item) => item.value === componentValue[selectName]);
    if (result) {
      return result;
    }
    return null;
  }, [componentValue, option]);

  const DynamicComponent = current?.component;
  const componentProps = omit<ValueType>(current?.componentProps, 'parseValue');
  const fieldProps = current?.componentProps;

  const handleTypeChange = (val: string) => {
    setComponentValue({
      [selectName]: val,
    });
  };

  const handleInputChange = (v: any) => {
    setComponentValue({
      ...componentValue,
      [componentProps.name]: v,
    });
  };

  const firstSpan = DynamicComponent ? 10 : 24;

  return (
    <Row gutter={10}>
      <Col span={firstSpan}>
        <Select
          onChange={handleTypeChange}
          value={componentValue?.[selectName]}
          allowClear
          className={classNames('condition-select', selectProps?.className)}
          suffixIcon={<ArrowDownOutlined />}
          {...selectProps}
        >
          {option.map((item) => (
            <Select.Option key={item.value} value={item.value}>
              {item.label}
            </Select.Option>
          ))}
        </Select>
      </Col>
      {DynamicComponent && (
        <Col span={14}>
          {React.createElement(DynamicComponent, {
            ...componentProps,
            value: componentValue[componentProps.name],
            onChange: (v: any) => {
              const parseValue = fieldProps?.parseValue;
              if (parseValue) {
                const parseValueResult = parseValue(v);
                handleInputChange(parseValueResult);
                return;
              }
              handleInputChange(v);
            },
          })}
        </Col>
      )}
    </Row>
  );
};
export default ConditionSelect;
