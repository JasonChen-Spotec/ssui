"use strict";

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
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
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimeDiffOfShowTime = exports.getDateDiffScope = exports.formatMaxScope = exports.ONE_MINUTE_MILLISECOND = exports.ONE_DAY_MILLISECOND = void 0;
var dateUtils_1 = __importDefault(require("aa-utils/lib/dateUtils"));
/** 1整天的毫秒数 */
exports.ONE_DAY_MILLISECOND = 1000 * 60 * 60 * 24;
/** 1分钟的毫秒数 */
exports.ONE_MINUTE_MILLISECOND = 1000 * 60;
var formatMaxScope = function formatMaxScope(dateStampTuple, maxScope) {
  var _a, _b;
  var now = dateUtils_1["default"].getToday().endOf('day');
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