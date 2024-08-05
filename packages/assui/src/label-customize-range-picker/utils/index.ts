import dateUtils from 'aa-utils/lib/dateUtils';
import type { RangeValue } from 'rc-picker/lib/interface';
import type { Moment } from 'moment';

/** 1整天的毫秒数 */
export const ONE_DAY_MILLISECOND = 1000 * 60 * 60 * 24;

/** 1分钟的毫秒数 */
export const ONE_MINUTE_MILLISECOND = 1000 * 60;

export const formatMaxScope = (dateStampTuple: RangeValue<Moment>, maxScope: number) => {
  const now = dateUtils.getToday().endOf('day');
  const [start, end] = dateStampTuple || [];
  let startStamp = start?.clone().startOf('day') ?? null;
  let endStamp = end?.clone().endOf('day') ?? null;

  if (startStamp && endStamp) {
    if (endStamp.diff(startStamp, 'day') > maxScope) {
      startStamp = endStamp
        .clone()
        .subtract(maxScope - 1, 'day')
        .startOf('day');
    }
  }

  if (!startStamp && !endStamp) {
    startStamp = now
      .clone()
      .subtract(maxScope - 1, 'day')
      .startOf('day');
    endStamp = now.clone().endOf('day');
  }

  if (startStamp || endStamp) {
    startStamp =
      startStamp ??
      endStamp!
        .clone()
        .subtract(maxScope - 1, 'day')
        .startOf('day');
    endStamp =
      endStamp ??
      startStamp!
        .clone()
        .add(maxScope - 1, 'day')
        .endOf('day');
  }

  return [startStamp, endStamp];
};

/** 开始时间和结束时间相差的天数 */
export const getDateDiffScope = (date: [Moment, Moment], maxScope: number): number => {
  const momentDiffDay = (date[1].diff(date[0]) + 1) / ONE_DAY_MILLISECOND;

  const finalScope = momentDiffDay < maxScope ? momentDiffDay : maxScope;

  return finalScope;
};

/** showTime下的所需的时间撮 */
export const getTimeDiffOfShowTime = (scope: number) =>
  scope * ONE_DAY_MILLISECOND - ONE_MINUTE_MILLISECOND;
