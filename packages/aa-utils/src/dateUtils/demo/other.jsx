/**
 * title: 提示
 * desc: 如果想并设置到一个时间的开始。请使用moment的`startOf`
 */

import React from 'react';
import { Descriptions } from 'antd';
import { dateUtils } from 'aa-utils';
import moment from 'moment';

const Demo = () => (
  <div>
    <Descriptions column={1}>
      <Descriptions.Item label="获取时间戳(默认当前时间)">
        {dateUtils.formatToTimestamp()}
      </Descriptions.Item>
      <Descriptions.Item label="获取时间戳(moment对象)">
        {dateUtils.formatToTimestamp(moment())}
      </Descriptions.Item>
      <Descriptions.Item label="获取时间戳(Date对象)">
        {dateUtils.formatToTimestamp(new Date())}
      </Descriptions.Item>
      <Descriptions.Item label="获取当前时间">
        {dateUtils.getToday().format(dateUtils.dateTimeFormat)}
      </Descriptions.Item>
      <Descriptions.Item label="获取时区">{dateUtils.getTimeZone()}</Descriptions.Item>
    </Descriptions>
  </div>
);

export default Demo;
