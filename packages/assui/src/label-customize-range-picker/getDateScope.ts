import moment from 'moment';

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
  PAST_7_DAY = 15,
  FUTURE_7_DAY = 16,
  TOMORROW = 17,
}

export const useDateScope = () => {
  const dateScopeList = [
    { key: dateTypeEnum.TODAY, value: [now, now] },
    {
      key: dateTypeEnum.YESTERDAY,
      value: [
        now.clone().subtract(1, 'day'),
        now.clone().subtract(1, 'day').endOf('day'),
      ],
    },
    {
      key: dateTypeEnum.WEEK,
      value: [now.clone().startOf('week'), now.clone().endOf('week')],
    },
    {
      key: dateTypeEnum.LAST_WEEK,
      value: [
        now.clone().subtract(1, 'week').startOf('week'),
        now.clone().subtract(1, 'week').endOf('week'),
      ],
    },
    {
      key: dateTypeEnum.MONTH,
      value: [now.clone().startOf('month'), now.clone().endOf('month')],
    },
    {
      key: dateTypeEnum.LAST_MONTH,
      value: [
        now.clone().subtract(1, 'month').startOf('month'),
        now.clone().subtract(1, 'month').endOf('month'),
      ],
    },
    {
      key: dateTypeEnum.QUARTER,
      value: [now.clone().startOf('quarter'), now.clone().endOf('quarter')],
    },
    {
      key: dateTypeEnum.LAST_QUARTER,
      value: [
        now.clone().subtract(1, 'quarter').startOf('quarter'),
        now.clone().subtract(1, 'quarter').endOf('quarter'),
      ],
    },
    {
      key: dateTypeEnum.BEFORE_7_DAY,
      value: [now.clone().subtract(6, 'day').startOf('day'), now.endOf('day')],
    },
    {
      key: dateTypeEnum.BEFORE_14_DAY,
      value: [now.clone().subtract(13, 'day').startOf('day'), now.endOf('day')],
    },
    {
      key: dateTypeEnum.BEFORE_30_DAY,
      value: [now.clone().subtract(29, 'day').startOf('day'), now.endOf('day')],
    },
    {
      key: dateTypeEnum.BEFORE_90_DAY,
      value: [now.clone().subtract(89, 'day').startOf('day'), now.endOf('day')],
    },
    {
      key: dateTypeEnum.BEFORE_180_DAY,
      value: [now.clone().subtract(179, 'day').startOf('day'), now.endOf('day')],
    },
    {
      key: dateTypeEnum.BEFORE_365_DAY,
      value: [now.clone().subtract(364, 'day').startOf('day'), now.endOf('day')],
    },
    {
      key: dateTypeEnum.PAST_7_DAY,
      value: [
        now.clone().subtract(7, 'day').startOf('day'),
        now.clone().subtract(1, 'day').endOf('day'),
      ],
    },
    {
      key: dateTypeEnum.TOMORROW,
      value: [
        now.clone().add(1, 'day').startOf('day'),
        now.clone().add(1, 'day').endOf('day'),
      ],
    },
    {
      key: dateTypeEnum.FUTURE_7_DAY,
      value: [
        now.clone().add(1, 'day').startOf('day'),
        now.clone().add(7, 'day').endOf('day'),
      ],
    },
  ];

  const dateScopeMap = {
    [dateTypeEnum.TODAY]: [now.clone().startOf('day'), now.clone().endOf('day')],
    [dateTypeEnum.YESTERDAY]: [
      now.clone().subtract(1, 'day').startOf('day'),
      now.clone().subtract(1, 'day').endOf('day'),
    ],
    [dateTypeEnum.WEEK]: [now.clone().startOf('week'), now.clone().endOf('week')],
    [dateTypeEnum.LAST_WEEK]: [
      now.clone().subtract(1, 'week').startOf('week'),
      now.clone().subtract(1, 'week').endOf('week'),
    ],
    [dateTypeEnum.MONTH]: [now.clone().startOf('month'), now.clone().endOf('month')],
    [dateTypeEnum.LAST_MONTH]: [
      now.clone().subtract(1, 'month').startOf('month'),
      now.clone().subtract(1, 'month').endOf('month'),
    ],
    [dateTypeEnum.QUARTER]: [
      now.clone().startOf('quarter'),
      now.clone().endOf('quarter'),
    ],
    [dateTypeEnum.LAST_QUARTER]: [
      now.clone().subtract(1, 'quarter').startOf('quarter'),
      now.clone().subtract(1, 'quarter').endOf('quarter'),
    ],
    [dateTypeEnum.BEFORE_7_DAY]: [
      now.clone().subtract(6, 'day').startOf('day'),
      now.endOf('day'),
    ],
    [dateTypeEnum.BEFORE_14_DAY]: [
      now.clone().subtract(13, 'day').startOf('day'),
      now.endOf('day'),
    ],
    [dateTypeEnum.BEFORE_30_DAY]: [
      now.clone().subtract(29, 'day').startOf('day'),
      now.endOf('day'),
    ],
    [dateTypeEnum.BEFORE_90_DAY]: [
      now.clone().subtract(89, 'day').startOf('day'),
      now.endOf('day'),
    ],
    [dateTypeEnum.BEFORE_180_DAY]: [
      now.clone().subtract(179, 'day').startOf('day'),
      now.endOf('day'),
    ],
    [dateTypeEnum.BEFORE_365_DAY]: [
      now.clone().subtract(364, 'day').startOf('day'),
      now.endOf('day'),
    ],
    [dateTypeEnum.PAST_7_DAY]: [
      now.clone().subtract(7, 'day').startOf('day'),
      now.clone().subtract(1, 'day').endOf('day'),
    ],
    [dateTypeEnum.TOMORROW]: [
      now.clone().add(1, 'day').startOf('day'),
      now.clone().add(1, 'day').endOf('day'),
    ],
    [dateTypeEnum.FUTURE_7_DAY]: [
      now.clone().add(1, 'day').startOf('day'),
      now.clone().add(7, 'day').endOf('day'),
    ],
  };

  return { dateScopeList, dateScopeMap };
};
