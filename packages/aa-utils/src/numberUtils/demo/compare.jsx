/**
 * title: compare
 * desc: 基于bignumber大小比较
 */

import React from 'react';
import { Descriptions } from 'antd';
import { numberUtils } from 'aa-utils';

const { isLessThan, isLessThanOrEqualTo, isGreaterThan, isGreaterThanOrEqualTo } =
  numberUtils;

export default () => (
  <Descriptions column={1}>
    <Descriptions.Item label="是否小于">
      isLessThan('12345123451234512345', '12345123451234512399'):
      {` ${isLessThan('12345123451234512345', '12345123451234512399')}`}
    </Descriptions.Item>

    <Descriptions.Item label="是否小于等于">
      isLessThanOrEqualTo('77777777.77777778', '77777777.77777777'):
      {` ${isLessThanOrEqualTo('77777777.77777778', '77777777.77777777')}`}
    </Descriptions.Item>

    <Descriptions.Item label="是否大于">
      isGreaterThan('12345123451234512399', '12345123451234512345'):
      {` ${isGreaterThan('12345123451234512399', '12345123451234512345')}`}
    </Descriptions.Item>

    <Descriptions.Item label="是否大于等于">
      isGreaterThanOrEqualTo('77777777.77777777', '77777777.77777778'):
      {` ${isGreaterThanOrEqualTo('77777777.77777777', '77777777.77777778')}`}
    </Descriptions.Item>
  </Descriptions>
);
