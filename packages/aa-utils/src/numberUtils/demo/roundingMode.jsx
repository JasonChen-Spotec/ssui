/**
 * title: roundingMode
 * desc: 截取浮点数
 */

import React from 'react';
import { Descriptions } from 'antd';
import { numberUtils } from 'aa-utils';

export default () => (
  <Descriptions column={1}>
    <Descriptions.Item label="1.1252(默认保留2位小数)">
      {numberUtils.formatNumber('1.1252', { roundingMode: 'down' })}
    </Descriptions.Item>

    <Descriptions.Item label="0.8(小数部分为无值)">
      {numberUtils.formatNumber('0.8', {
        roundingMode: 'down',
        minFractionDigits: 0,
        maxFractionDigits: 0,
      })}
    </Descriptions.Item>

    <Descriptions.Item label="-0.252523(保留3位小数)">
      {numberUtils.formatNumber('-12.252523', {
        roundingMode: 'down',
        minFractionDigits: 3,
        maxFractionDigits: 3,
      })}
    </Descriptions.Item>
  </Descriptions>
);
