"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimeDiffOfShowTime = exports.getDateDiffScope = exports.formatMaxScope = exports.ONE_MINUTE_MILLISECOND = exports.ONE_DAY_MILLISECOND = void 0;
var tslib_1 = require("tslib");
var dateUtils_1 = tslib_1.__importDefault(require("aa-utils/lib/dateUtils"));
/** 1整天的毫秒数 */
exports.ONE_DAY_MILLISECOND = 1000 * 60 * 60 * 24;
/** 1分钟的毫秒数 */
exports.ONE_MINUTE_MILLISECOND = 1000 * 60;
var formatMaxScope = function formatMaxScope(dateStampTuple, maxScope) {
  var _start$clone$startOf, _end$clone$endOf;
  var now = dateUtils_1["default"].getToday().endOf('day');
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
exports.formatMaxScope = formatMaxScope;
/** 开始时间和结束时间相差的天数 */
var getDateDiffScope = function getDateDiffScope(date, maxScope) {
  var momentDiffDay = (date[1].diff(date[0]) + 1) / exports.ONE_DAY_MILLISECOND;
  var finalScope = momentDiffDay < maxScope ? momentDiffDay : maxScope;
  return finalScope;
};
exports.getDateDiffScope = getDateDiffScope;
/** showTime下的所需的时间撮 */
var getTimeDiffOfShowTime = function getTimeDiffOfShowTime(scope) {
  return scope * exports.ONE_DAY_MILLISECOND - exports.ONE_MINUTE_MILLISECOND;
};
exports.getTimeDiffOfShowTime = getTimeDiffOfShowTime;