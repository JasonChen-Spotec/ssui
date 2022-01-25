/**
 * title: 大数据
 * desc: `formatNumber`的`value`可以传`string`也可以是`number`,但是在`value` 位数很多的时候，函数传参`number`会失去精度，所以必须传`string`
 */

import React from 'react';
import { Descriptions, Typography } from 'antd';
import { numberUtils } from 'aa-utils';

const { Title } = Typography;
const { times, plus, divide, minus } = numberUtils;

const Demo = () => (
  <div>
    <Title level={5}>数字</Title>
    <Descriptions column={1}>
      <Descriptions.Item label="乘法 times(2,2,3)">{times(2, 2, 3)}</Descriptions.Item>
      <Descriptions.Item label="加法 plus(0.1,0.2)">{plus(0.1, 0.2)}</Descriptions.Item>
      <Descriptions.Item label="除法 divide(12,2,2)">{divide(12, 2, 2)}</Descriptions.Item>
      <Descriptions.Item label="减法 minus(2,2,3)">{minus(2, 2, 3)}</Descriptions.Item>
    </Descriptions>
  </div>
);

export default Demo;
