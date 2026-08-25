import dateUtils from "aa-utils/es/dateUtils";
/** 1整天的毫秒数 */
export var ONE_DAY_MILLISECOND = 1000 * 60 * 60 * 24;
/** 1分钟的毫秒数 */
export var ONE_MINUTE_MILLISECOND = 1000 * 60;
export var formatMaxScope = function formatMaxScope(dateStampTuple, maxScope) {
  var _start$clone$startOf, _end$clone$endOf;
  var now = dateUtils.getToday().endOf('day');
  var _ref = dateStampTuple || [],
    start = _ref[0],
    end = _ref[1];
  var startStamp = (_start$clone$startOf = start == null ? void 0 : start.clone().startOf('day')) != null ? _start$clone$startOf : null;
  var endStamp = (_end$clone$endOf = end == null ? void 0 : end.clone().endOf('day')) != null ? _end$clone$endOf : null;
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
    startStamp = startStamp != null ? startStamp : endStamp.clone().subtract(maxScope - 1, 'day').startOf('day');
    endStamp = endStamp != null ? endStamp : startStamp.clone().add(maxScope - 1, 'day').endOf('day');
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