/**
 * title: 格式化
 * desc: 默认： `dateFormat = 'YYYY-MM-DD'`, `timeFormat = 'HH:mm'`
 */

import React from 'react';
import { Descriptions } from 'antd';
import { dateUtils } from 'aa-utils';
import moment from 'moment';

const dateMoment = moment(1598343036538).utc();

const Demo = () => (
  <div>
    <Descriptions column={1}>
      <Descriptions.Item label="格式化日期">{dateUtils.formatDate(dateMoment)}</Descriptions.Item>
      <Descriptions.Item label="格式化日期(自定义格式)">
        {dateUtils.formatDate(dateMoment, 'YYYY/MM/DD')}
      </Descriptions.Item>
      <Descriptions.Item label="格式化时间">{dateUtils.formatTime(dateMoment)}</Descriptions.Item>
      <Descriptions.Item label="格式化时间(自定义格式)">
        {dateUtils.formatTime(dateMoment, 'HH:mm')}
      </Descriptions.Item>
      <Descriptions.Item label="格式化日期时间">
        {dateUtils.formatDateTime(dateMoment)}
      </Descriptions.Item>
      <Descriptions.Item label="格式化日期时间(自定义格式)">
        {dateUtils.formatDateTime(dateMoment, 'YYYY/MM/DD HH:mm')}
      </Descriptions.Item>
    </Descriptions>
  </div>
);

export default Demo;
