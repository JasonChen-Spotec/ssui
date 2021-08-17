/**
 * title: 格式化数据
 * desc: 默认`最小2位小数`，`最大2位小数`，`无分隔符`，`小数四舍五入`，`无+`
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
      <Descriptions.Item label="2332.2">{formatNumber(2332.2)}</Descriptions.Item>
      <Descriptions.Item label="-2332.225(有分隔符)">
        {formatNumber(-2332.225, { useGrouping: true })}
      </Descriptions.Item>
      <Descriptions.Item label="2332.2(最小保留2位小数)">
        {formatNumber(2332.2, { minFractionDigits: 2 })}
      </Descriptions.Item>
      <Descriptions.Item label="2332.228(最大保留2位小数)">
        {formatNumber(2332.228, { maxFractionDigits: 2 })}
      </Descriptions.Item>
      <Descriptions.Item label="2332.2282323(固定保留4位小数)">
        {formatNumber(2332.2282323, { maxFractionDigits: 4, minFractionDigits: 4 })}
      </Descriptions.Item>
    </Descriptions>
  </div>
);

export default Demo;
