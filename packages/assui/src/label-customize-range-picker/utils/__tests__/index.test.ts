import moment from 'moment';
import dateUtils from 'aa-utils/lib/dateUtils';
import type { RangeValue } from 'rc-picker/lib/interface';
import { formatMaxScope } from '../index';

type MomentTuple = RangeValue<moment.Moment>;

const { formatDateTime } = dateUtils;

const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss';
const now = dateUtils.getToday().endOf('day');

const onlyStart: MomentTuple = [moment('1995-5-15'), null];
const onlyEnd: MomentTuple = [null, moment('1995-5-15')];
const greaterThanScope: MomentTuple = [moment('1995-5-1'), moment('1995-5-15')];
const lessThanScope: MomentTuple = [moment('1995-5-13'), moment('1995-5-15')];
const notProvided: MomentTuple = [null, null];

const getStamp = (tuple: MomentTuple) => {
  const [start, end] = formatMaxScope(tuple, 10);
  return [formatDateTime(start, dateTimeFormat), formatDateTime(end, dateTimeFormat)];
};

describe('formatMaxScope', () => {
  it('formatMaxScope should be work fine when no date provided', () => {
    const last10days = now.clone().subtract(9, 'day').startOf('day');

    expect(formatMaxScope(null, 10)).toEqual([last10days, now]);
    expect(formatMaxScope(notProvided, 10)).toEqual([last10days, now]);
  });

  it('formatMaxScope should work fine when only one date', () => {
    expect(getStamp(onlyStart)).toEqual(['1995-05-15 00:00:00', '1995-05-24 23:59:59']);
    expect(getStamp(onlyEnd)).toEqual(['1995-05-06 00:00:00', '1995-05-15 23:59:59']);
  });

  it('formatMaxScope should be work fine when data difference greater or less than maxScope', () => {
    expect(getStamp(greaterThanScope)).toEqual(['1995-05-06 00:00:00', '1995-05-15 23:59:59']);
    expect(getStamp(lessThanScope)).toEqual(['1995-05-13 00:00:00', '1995-05-15 23:59:59']);
  });
});
