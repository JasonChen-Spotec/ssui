/**
 * title: 大数据
 * desc: `formatNumber`的`value`可以传`string`也可以是`number`,但是在`value` 位数很多的时候，函数传参`number`会失去精度，所以必须传`string`
 */

import React from 'react';
import { Descriptions, Typography } from 'antd';
import numberUtils from 'aa-utils/lib/numberUtils';

const { Title } = Typography;
const { formatNumber } = numberUtils;

const Demo = () => (
  <div>
    <Title level={5}>格式化数字</Title>
    <Descriptions column={1}>
      <Descriptions.Item label="77777777.77777777(number)">
        {formatNumber(77777777.77777777, { minFractionDigits: 8, maxFractionDigits: 8 })}
      </Descriptions.Item>

      <Descriptions.Item label="77777777.77777777(string)">
        {formatNumber('77777777.77777777', { minFractionDigits: 8, maxFractionDigits: 8 })}
      </Descriptions.Item>
    </Descriptions>
  </div>
);

export default Demo;
