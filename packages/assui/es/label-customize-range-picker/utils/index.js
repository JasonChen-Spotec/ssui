var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
import dateUtils from "aa-utils/es/dateUtils";
/** 1整天的毫秒数 */
export var ONE_DAY_MILLISECOND = 1000 * 60 * 60 * 24;
/** 1分钟的毫秒数 */
export var ONE_MINUTE_MILLISECOND = 1000 * 60;
export var formatMaxScope = function formatMaxScope(dateStampTuple, maxScope) {
  var _a, _b;
  var now = dateUtils.getToday().endOf('day');
  var _c = __read(dateStampTuple || [], 2),
    start = _c[0],
    end = _c[1];
  var startStamp = (_a = start === null || start === void 0 ? void 0 : start.clone().startOf('day')) !== null && _a !== void 0 ? _a : null;
  var endStamp = (_b = end === null || end === void 0 ? void 0 : end.clone().endOf('day')) !== null && _b !== void 0 ? _b : null;
  if (startStamp && endStamp) {
    if (endStamp.diff(startStamp, 'day') > maxScope) {
      startStamp = endStamp.clone().subtract(maxScope - 1, 'day').startOf('day');
    }
  }
  if (!startStamp && !endStamp) {
    startStamp = now.clone().subtract(maxScope - 1, 'day').startOf('day');
    endStamp = now.clone().endOf('day');
  }
  if (startStamp || endStamp) {
    startStamp = startStamp !== null && startStamp !== void 0 ? startStamp : endStamp.clone().subtract(maxScope - 1, 'day').startOf('day');
    endStamp = endStamp !== null && endStamp !== void 0 ? endStamp : startStamp.clone().add(maxScope - 1, 'day').endOf('day');
  }
  return [startStamp, endStamp];
};
/** 开始时间和结束时间相差的天数 */
export var getDateDiffScope = function getDateDiffScope(date, maxScope) {
  var momentDiffDay = (date[1].diff(date[0]) + 1) / ONE_DAY_MILLISECOND;
  var finalScope = momentDiffDay < maxScope ? momentDiffDay : maxScope;
  return finalScope;
};
/** showTime下的所需的时间撮 */
export var getTimeDiffOfShowTime = function getTimeDiffOfShowTime(scope) {
  return scope * ONE_DAY_MILLISECOND - ONE_MINUTE_MILLISECOND;
};