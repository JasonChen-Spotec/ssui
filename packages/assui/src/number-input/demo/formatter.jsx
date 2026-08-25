/**
 * title: 格式化展示
 * desc: 通过 formatter 格式化数字，以展示具有具体含义的数据；parser 负责把展示格式转回数字
 */

import React, { useState } from 'react';
import { NumberInput } from 'assui';
import { Descriptions } from 'antd';

const Demo = () => {
  const [money, setMoney] = useState(1000);
  const [percent, setPercent] = useState(100);

  // 展示格式：在数字上每 3 位加一个千分位逗号，并加上 $ 前缀，如 1000 -> $ 1,000
  const moneyFormatter = (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // 输入格式：把展示值里的 $、空格、逗号都去掉，还原成纯数字，如 $ 1,000 -> 1000
  const moneyParser = (value) => value.replace(/[\s$,]/g, '');

  return (
    <>
      <Descriptions layout="vertical" column={8}>
        <Descriptions.Item label="钱" span={8}>
          <NumberInput
            value={money}
            formatter={moneyFormatter}
            parser={moneyParser}
            onChange={setMoney}
          />
        </Descriptions.Item>
        <Descriptions.Item label="百分比" span={8}>
          <NumberInput
            value={percent}
            formatter={(value) => `${value}%`}
            parser={(value) => value.replace('%', '')}
            onChange={setPercent}
          />
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default Demo;
