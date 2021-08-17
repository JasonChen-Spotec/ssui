/**
 * title: usePlus
 * desc: 显示正负前缀
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
      <Descriptions.Item label="2332.2">
        {formatNumber(2332.2, { usePlus: true })}
      </Descriptions.Item>
      <Descriptions.Item label="-2332.225">
        {formatNumber(-2332.225, { usePlus: true })}
      </Descriptions.Item>
    </Descriptions>
  </div>
);

export default Demo;
