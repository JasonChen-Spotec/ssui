import dateUtils from 'aa-utils/lib/dateUtils';
import type { RangeValue } from 'rc-picker/lib/interface';
import type { Moment } from 'moment';

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
