import { dateTypeEnum } from './getDateScope';

export type RadioListType = {
  key: dateTypeEnum;
  text: string;
};

const getRadioList = () => [
  {
    key: dateTypeEnum.TODAY,
    text: '今日',
  },
  {
    key: dateTypeEnum.YESTERDAY,
    text: '昨日',
  },
  {
    key: dateTypeEnum.WEEK,
    text: '本周',
  },
  {
    key: dateTypeEnum.LAST_WEEK,
    text: '上周',
  },
  {
    key: dateTypeEnum.MONTH,
    text: '本月',
  },
  {
    key: dateTypeEnum.LAST_MONTH,
    text: '上月',
  },
  {
    key: dateTypeEnum.QUARTER,
    text: '本季度',
  },
  {
    key: dateTypeEnum.LAST_QUARTER,
    text: '上季度',
  },
  {
    key: dateTypeEnum.BEFORE_7_DAY,
    text: '最近7天',
  },
  {
    key: dateTypeEnum.BEFORE_14_DAY,
    text: '最近14天',
  },
  {
    key: dateTypeEnum.BEFORE_30_DAY,
    text: '最近30天',
  },
  {
    key: dateTypeEnum.BEFORE_90_DAY,
    text: '最近90天',
  },
  {
    key: dateTypeEnum.BEFORE_180_DAY,
    text: '最近180天',
  },
  {
    key: dateTypeEnum.BEFORE_365_DAY,
    text: '最近365天',
  },
];

export default getRadioList;
