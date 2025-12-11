"use strict";

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
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var react_1 = __importDefault(require("react"));
var useCountDown_1 = __importDefault(require("ahooks/lib/useCountDown"));
var isFunction_1 = __importDefault(require("lodash/isFunction"));
var CountDown = function CountDown(_a) {
  var options = _a.options,
    render = _a.render;
  var _b = __read((0, useCountDown_1["default"])(options), 2),
    countDown = _b[0],
    formattedRes = _b[1];
  var days = formattedRes.days,
    hours = formattedRes.hours,
    minutes = formattedRes.minutes,
    seconds = formattedRes.seconds,
    milliseconds = formattedRes.milliseconds;
  if ((0, isFunction_1["default"])(render)) {
    return react_1["default"].createElement(react_1["default"].Fragment, null, render(formattedRes, countDown));
  }
  return react_1["default"].createElement("div", null, days, " days ", hours, " hours ", minutes, " minutes ", seconds, " seconds ", milliseconds);
};
exports["default"] = CountDown;