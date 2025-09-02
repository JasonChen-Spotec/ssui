import { useControllableValue } from 'ahooks';
import { Col, Row, Select } from 'antd';
import { omit } from 'lodash';
import React, { useState } from 'react';
import type { ConditionSelectProps, DynamicComponentType, ValueType } from './types';

const ConditionSelect = ({
  option,
  value,
  onChange,
  id,
  selectProps,
}: ConditionSelectProps) => {
  const [, setComponentValue] = useControllableValue({ value, onChange });
  const [current, setCurrent] = useState<DynamicComponentType>(option[0]);
  const DynamicComponent = current?.component;
  const componentProps = omit<ValueType>(current?.componentProps, 'parseValue');
  const fieldProps = current?.componentProps;

  const handleTypeChange = (val: string) => {
    setCurrent(option.find((item) => item.value === val) as DynamicComponentType);
    setComponentValue({
      [id as string]: val,
    });
  };

  const handleInputChange = (v: any) => {
    setComponentValue({
      [id as string]: current?.value,
      [componentProps?.name as string]: v,
    });
  };

  const firstSpan = DynamicComponent ? 10 : 24;

  return (
    <Row gutter={10}>
      <Col span={firstSpan}>
        <Select
          onChange={handleTypeChange}
          value={current?.value as string}
          allowClear
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
