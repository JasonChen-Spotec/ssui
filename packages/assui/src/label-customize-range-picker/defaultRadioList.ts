import moment from 'moment';
import type { Moment } from 'moment';

const now = moment();

const TODAY = 1;
const YESTERDAY = 2;
const WEEK = 3;
const LAST_WEEK = 4;
const MONTH = 5;
const LAST_MONTH = 6;
const QUARTER = 7;
const LAST_QUARTER = 8;
const BEFORE_7_DAY = 9;
const BEFORE_14_DAY = 10;
const BEFORE_30_DAY = 11;
const BEFORE_90_DAY = 12;
const BEFORE_180_DAY = 13;
const BEFORE_365_DAY = 14;

export type RadioListType = {
  key: string | number;
  text: string;
  value: [Moment, Moment];
};

const defaultRadioList: RadioListType[] = [
  {
    key: TODAY,
    text: '今日',
    value: [now, now],
  },
  {
    key: YESTERDAY,
    text: '昨日',
    value: [now.clone().subtract(1, 'day'), now.clone().subtract(1, 'day').endOf('day')],
  },
  {
    key: WEEK,
    text: '本周',
    value: [now.clone().startOf('week'), now.clone().endOf('week')],
  },
  {
    key: LAST_WEEK,
    text: '上周',
    value: [
      now.clone().subtract(1, 'week').startOf('week'),
      now.clone().subtract(1, 'week').endOf('week'),
    ],
  },
  {
    key: MONTH,
    text: '本月',
    value: [now.clone().startOf('month'), now.clone().endOf('month')],
  },
  {
    key: LAST_MONTH,
    text: '上月',
    value: [
      now.clone().subtract(1, 'month').startOf('month'),
      now.clone().subtract(1, 'month').endOf('month'),
    ],
  },
  {
    key: QUARTER,
    text: '本季度',
    value: [now.clone().startOf('quarter'), now.clone().endOf('quarter')],
  },
  {
    key: LAST_QUARTER,
    text: '上季度',
    value: [
      now.clone().subtract(1, 'quarter').startOf('quarter'),
      now.clone().subtract(1, 'quarter').endOf('quarter'),
    ],
  },
  {
    key: BEFORE_7_DAY,
    text: '最近7天',
    value: [now.clone().subtract(6, 'day').startOf('day'), now.endOf('day')],
  },
  {
    key: BEFORE_14_DAY,
    text: '最近14天',
    value: [now.clone().subtract(13, 'day').startOf('day'), now.endOf('day')],
  },
  {
    key: BEFORE_30_DAY,
    text: '最近30天',
    value: [now.clone().subtract(29, 'day').startOf('day'), now.endOf('day')],
  },
  {
    key: BEFORE_90_DAY,
    text: '最近90天',
    value: [now.clone().subtract(89, 'day').startOf('day'), now.endOf('day')],
  },
  {
    key: BEFORE_180_DAY,
    text: '最近180天',
    value: [now.clone().subtract(179, 'day').startOf('day'), now.endOf('day')],
  },
  {
    key: BEFORE_365_DAY,
    text: '最近365天',
    value: [now.clone().subtract(364, 'day').startOf('day'), now.endOf('day')],
  },
];

export default defaultRadioList;
