/**
 * title: percent
 * desc: 默认`最小2位小数`，`最大2位小数`，`四舍五入`，`无+`
 */

import React from 'react';
import { Descriptions } from 'antd';
import { numberUtils } from 'aa-utils';

const { formatPercent } = numberUtils;

export default () => (
  <Descriptions column={1}>
    <Descriptions.Item label="0.12343">{formatPercent(0.12343)}</Descriptions.Item>

    <Descriptions.Item label="-0.1(无百分号)">
      {formatPercent('-0.1', { useUnit: false })}
    </Descriptions.Item>

    <Descriptions.Item label="-0.252523(保留3位小数)">
      {formatPercent('-0.252523', { minFractionDigits: 3, maxFractionDigits: 3 })}
    </Descriptions.Item>

    <Descriptions.Item label="-0.1(usePlus)">
      {formatPercent('0.1', { usePlus: true })}
    </Descriptions.Item>

    <Descriptions.Item label="0.252523(usePlus)">
      {formatPercent('-0.252523', { usePlus: true })}
    </Descriptions.Item>
  </Descriptions>
);
