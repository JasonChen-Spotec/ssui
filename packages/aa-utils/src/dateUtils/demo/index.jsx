/**
 * title: 格式化
 * desc: 默认： `dateFormat = 'YYYY-MM-DD'`, `timeFormat = 'HH:mm'`
 */

import React from 'react';
import { Descriptions, Typography } from 'antd';
import { dateUtils } from 'aa-utils';
import moment from 'moment';

const { Title } = Typography;

const dateMoment = moment(1721088000000);

dateUtils.timeZoneOffset = 10800;

const Demo = () => (
  <div>
    <Title level={3}>时间戳的格式</Title>
    <div>utc+0 为2024/07/16 00:00的时间戳为： 1721088000000</div>
    <div>utc+0格式化： {dateUtils.utcFormatDate(1721088000000, 'YYYY/MM/DD HH:mm')}</div>
    <div>本地时间格式化：{moment(1721088000000).format('YYYY/MM/DD HH:mm')}</div>
    <div>偏移3小时：{moment(1721088000000).utcOffset(3).format('YYYY/MM/DD HH:mm')}</div>
    <div>默认本地时区时间戳： {dateMoment.valueOf()}</div>
    <div>加偏移量时区时间戳： {moment(1721088000000).utcOffset(3).valueOf()}</div>
    <div>utc时间戳： {dateMoment.utc().valueOf()}</div>
    (同一时间的时间戳与时区或者偏移量没有关系)
    <div style={{ marginBottom: 40 }}></div>
    <Title level={3}>dateUtils.getToday() 获取当前时间</Title>
    <div>
      今天({dateUtils.getToday().valueOf()})：{' '}
      {dateUtils.getToday().format('YYYY-MM-DD HH:mm')}
    </div>
    <div>
      UTC-0的今天({dateUtils.getToday(0).valueOf()})：{' '}
      {dateUtils.getToday(0).format('YYYY-MM-DD HH:mm')}
    </div>
    (不带偏移量返回本地时区的moment，带偏移返回带偏移量的moment格式化结果不同，时间戳相同)
    <div style={{ marginBottom: 40 }}></div>
    <Title level={3}>
      formatDateTime使用dateUtils设置的偏移量格式化时间(没有设置偏移量会使用本地时区)
    </Title>
    <Descriptions column={1}>
      <Descriptions.Item label="格式化日期时间">
        {dateUtils.formatDateTime(dateMoment)}
      </Descriptions.Item>
      <Descriptions.Item label="格式化日期">
        {dateUtils.formatDate(dateMoment)}
      </Descriptions.Item>
      <Descriptions.Item label="格式化时间">
        {dateUtils.formatTime(dateMoment)}
      </Descriptions.Item>
      <Descriptions.Item label="格式化日期(自定义格式)">
        {dateUtils.formatDate(dateMoment, 'YYYY/MM/DD')}
      </Descriptions.Item>
      <Descriptions.Item label="格式化日期时间(自定义格式)">
        {dateUtils.formatDateTime(dateMoment, 'YYYY/MM/DD HH:mm')}
      </Descriptions.Item>
    </Descriptions>
    <Title level={3}>utcFormatDate：用utc格式化</Title>
    <Descriptions column={1}>
      <Descriptions.Item label="默认utc+0">
        {dateUtils.utcFormatDate(dateMoment)}
      </Descriptions.Item>

      <Descriptions.Item label="utc+3">
        {dateUtils.utcFormatDate(dateMoment, { utcOffset: 3 })}
      </Descriptions.Item>
    </Descriptions>
  </div>
);

export default Demo;
