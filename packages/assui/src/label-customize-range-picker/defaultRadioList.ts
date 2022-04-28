import moment from 'moment';
import type { Moment } from 'moment';

const now = moment();

export enum dateTypeEnum {
  TODAY = 1,
  YESTERDAY = 2,
  WEEK = 3,
  LAST_WEEK = 4,
  MONTH = 5,
  LAST_MONTH = 6,
  QUARTER = 7,
  LAST_QUARTER = 8,
  BEFORE_7_DAY = 9,
  BEFORE_14_DAY = 10,
  BEFORE_30_DAY = 11,
  BEFORE_90_DAY = 12,
  BEFORE_180_DAY = 13,
  BEFORE_365_DAY = 14,
}

export type RadioListType = {
  key: string | number | dateTypeEnum;
  text: string;
  value: [Moment, Moment];
};

const defaultRadioList: RadioListType[] = [
  {
    key: dateTypeEnum.TODAY,
    text: '今日',
    value: [now, now],
  },
  {
    key: dateTypeEnum.YESTERDAY,
    text: '昨日',
    value: [now.clone().subtract(1, 'day'), now.clone().subtract(1, 'day').endOf('day')],
  },
  {
    key: dateTypeEnum.WEEK,
    text: '本周',
    value: [now.clone().startOf('week'), now.clone().endOf('week')],
  },
  {
    key: dateTypeEnum.LAST_WEEK,
    text: '上周',
    value: [
      now.clone().subtract(1, 'week').startOf('week'),
      now.clone().subtract(1, 'week').endOf('week'),
    ],
  },
  {
    key: dateTypeEnum.MONTH,
    text: '本月',
    value: [now.clone().startOf('month'), now.clone().endOf('month')],
  },
  {
    key: dateTypeEnum.LAST_MONTH,
    text: '上月',
    value: [
      now.clone().subtract(1, 'month').startOf('month'),
      now.clone().subtract(1, 'month').endOf('month'),
    ],
  },
  {
    key: dateTypeEnum.QUARTER,
    text: '本季度',
    value: [now.clone().startOf('quarter'), now.clone().endOf('quarter')],
  },
  {
    key: dateTypeEnum.LAST_QUARTER,
    text: '上季度',
    value: [
      now.clone().subtract(1, 'quarter').startOf('quarter'),
      now.clone().subtract(1, 'quarter').endOf('quarter'),
    ],
  },
  {
    key: dateTypeEnum.BEFORE_7_DAY,
    text: '最近7天',
    value: [now.clone().subtract(6, 'day').startOf('day'), now.endOf('day')],
  },
  {
    key: dateTypeEnum.BEFORE_14_DAY,
    text: '最近14天',
    value: [now.clone().subtract(13, 'day').startOf('day'), now.endOf('day')],
  },
  {
    key: dateTypeEnum.BEFORE_30_DAY,
    text: '最近30天',
    value: [now.clone().subtract(29, 'day').startOf('day'), now.endOf('day')],
  },
  {
    key: dateTypeEnum.BEFORE_90_DAY,
    text: '最近90天',
    value: [now.clone().subtract(89, 'day').startOf('day'), now.endOf('day')],
  },
  {
    key: dateTypeEnum.BEFORE_180_DAY,
    text: '最近180天',
    value: [now.clone().subtract(179, 'day').startOf('day'), now.endOf('day')],
  },
  {
    key: dateTypeEnum.BEFORE_365_DAY,
    text: '最近365天',
    value: [now.clone().subtract(364, 'day').startOf('day'), now.endOf('day')],
  },
];

export default defaultRadioList;
