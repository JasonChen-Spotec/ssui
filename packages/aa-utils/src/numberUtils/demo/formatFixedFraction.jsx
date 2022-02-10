import React from 'react';
import { Descriptions, Typography } from 'antd';
import numberUtils from 'aa-utils/lib/numberUtils';

const { Title } = Typography;
const { formatFixedFraction } = numberUtils;

const Demo = () => (
  <div>
    <Title level={5}>格式化数字</Title>
    <Descriptions column={1}>
      <Descriptions.Item label="默认固定8位小数">{formatFixedFraction(2332.2)}</Descriptions.Item>
      <Descriptions.Item label="固定4位小数">
        {formatFixedFraction(-2332.225, { fractionDigits: 4 })}
      </Descriptions.Item>
    </Descriptions>
  </div>
);

export default Demo;
