import moment from 'moment';
import type { Moment } from 'moment';
import dateUtils from 'aa-utils/lib/dateUtils';
import type { LangType } from '../messages';
import formatMessage from '../messages';

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

const getDefaultRadioList = (message: LangType) => {
  const now = dateUtils.getToday();
  const defaultRadioList: RadioListType[] = [
    {
      key: dateTypeEnum.TODAY,
      text: formatMessage(message, 'labelCustomizeRangePicker', 'toDay'),
      value: [now.clone().startOf('day'), now.clone().endOf('day')],
    },
    {
      key: dateTypeEnum.YESTERDAY,
      text: formatMessage(message, 'labelCustomizeRangePicker', 'yesterDay'),
      value: [
        now.clone().subtract(1, 'day').startOf('day'),
        now.clone().subtract(1, 'day').endOf('day'),
      ],
    },
    {
      key: dateTypeEnum.WEEK,
      text: formatMessage(message, 'labelCustomizeRangePicker', 'week'),
      value: [now.clone().startOf('week'), now.clone().endOf('day')],
    },
    {
      key: dateTypeEnum.LAST_WEEK,
      text: formatMessage(message, 'labelCustomizeRangePicker', 'lastWeek'),
      value: [
        now.clone().subtract(1, 'week').startOf('week'),
        now.clone().subtract(1, 'week').endOf('week'),
      ],
    },
    {
      key: dateTypeEnum.MONTH,
      text: formatMessage(message, 'labelCustomizeRangePicker', 'month'),
      value: [now.clone().startOf('month'), now.clone().endOf('day')],
    },
    {
      key: dateTypeEnum.LAST_MONTH,
      text: formatMessage(message, 'labelCustomizeRangePicker', 'lastMonth'),
      value: [
        now.clone().subtract(1, 'month').startOf('month'),
        now.clone().subtract(1, 'month').endOf('month'),
      ],
    },
    {
      key: dateTypeEnum.QUARTER,
      text: formatMessage(message, 'labelCustomizeRangePicker', 'quarter'),
      value: [now.clone().startOf('quarter'), now.clone().endOf('day')],
    },
    {
      key: dateTypeEnum.LAST_QUARTER,
      text: formatMessage(message, 'labelCustomizeRangePicker', 'lastQuarter'),
      value: [
        now.clone().subtract(1, 'quarter').startOf('quarter'),
        now.clone().subtract(1, 'quarter').endOf('quarter'),
      ],
    },
    {
      key: dateTypeEnum.BEFORE_7_DAY,
      text: formatMessage(message, 'labelCustomizeRangePicker', 'last7days'),
      value: [now.clone().subtract(6, 'day').startOf('day'), now.endOf('day')],
    },
    {
      key: dateTypeEnum.BEFORE_14_DAY,
      text: formatMessage(message, 'labelCustomizeRangePicker', 'last14days'),
      value: [now.clone().subtract(13, 'day').startOf('day'), now.endOf('day')],
    },
    {
      key: dateTypeEnum.BEFORE_30_DAY,
      text: formatMessage(message, 'labelCustomizeRangePicker', 'last30days'),
      value: [now.clone().subtract(29, 'day').startOf('day'), now.endOf('day')],
    },
    {
      key: dateTypeEnum.BEFORE_90_DAY,
      text: formatMessage(message, 'labelCustomizeRangePicker', 'last90days'),
      value: [now.clone().subtract(89, 'day').startOf('day'), now.endOf('day')],
    },
    {
      key: dateTypeEnum.BEFORE_180_DAY,
      text: formatMessage(message, 'labelCustomizeRangePicker', 'last180days'),
      value: [now.clone().subtract(179, 'day').startOf('day'), now.endOf('day')],
    },
    {
      key: dateTypeEnum.BEFORE_365_DAY,
      text: formatMessage(message, 'labelCustomizeRangePicker', 'last365days'),
      value: [now.clone().subtract(364, 'day').startOf('day'), now.endOf('day')],
    },
  ];

  return defaultRadioList;
};

export default getDefaultRadioList;
