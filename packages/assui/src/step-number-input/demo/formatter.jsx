/**
 * title: 格式化展示
 * desc: 通过 formatter 格式化数字，以展示具有具体含义的数据
 */

import React, { useState } from 'react';
import { StepNumberInput } from 'assui';
import { Descriptions } from 'antd';

const Demo = () => {
  const [money, setMoney] = useState(1000);
  const [percentageNumber, setPercentageNumber] = useState(100);
  const onChange = (values) => {
    setMoney(values);
  };

  const onPercentageChange = (values) => {
    setPercentageNumber(values);
  };

  return (
    <>
      <Descriptions layout="vertical" column={8}>
        <Descriptions.Item label="钱" span={8}>
          <StepNumberInput
            value={money}
            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            onChange={onChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="百分比" span={8}>
          <StepNumberInput
            value={percentageNumber}
            formatter={(value) => `${value}%`}
            parser={(value) => value.replace('%', '')}
            onChange={onPercentageChange}
          />
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default Demo;
