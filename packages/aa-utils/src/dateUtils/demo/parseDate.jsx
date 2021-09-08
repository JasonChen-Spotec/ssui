/**
 * title: 解析
 * desc: 默认： `dateFormat = 'YYYY-MM-DD'`, `timeFormat = 'HH:mm:ss'`
 */

import React from 'react';
import { Descriptions } from 'antd';
import { dateUtils } from 'aa-utils';
import dayjs from 'dayjs';

const Demo = () => (
  <div>
    <Descriptions column={1}>
      <Descriptions.Item label="解析日期">
        {dateUtils.parseDate('1995-09-23').format(dateUtils.dateFormat)}
      </Descriptions.Item>
      <Descriptions.Item label="解析日期(自定义格式)">
        {dateUtils.parseDate('1985/10/23', 'YYYY/MM/DD').format(dateUtils.dateFormat)}
      </Descriptions.Item>
      <Descriptions.Item label="解析时间">
        {dateUtils.parseTime('12:23:23').format(dateUtils.timeFormat)}
      </Descriptions.Item>
      <Descriptions.Item label="解析时间(自定义格式)">
        {dateUtils.parseTime('12-23-23', 'HH-mm-ss').format(dateUtils.timeFormat)}
      </Descriptions.Item>
      <Descriptions.Item label="解析日期时间(时间戳)">
        {dateUtils.parseDateTime(1598343036538).format(dateUtils.dateTimeFormat)}
      </Descriptions.Item>
      <Descriptions.Item label="解析日期时间(原生时间对象)">
        {dateUtils.parseDateTime(new Date(2018, 8, 18)).format(dateUtils.dateTimeFormat)}
      </Descriptions.Item>
      <Descriptions.Item label="解析日期时间(dayjs对象)">
        {dateUtils.parseDateTime(dayjs()).format(dateUtils.dateTimeFormat)}
      </Descriptions.Item>
    </Descriptions>
  </div>
);

export default Demo;
