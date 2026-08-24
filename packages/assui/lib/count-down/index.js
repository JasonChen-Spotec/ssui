"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var useCountDown_1 = tslib_1.__importDefault(require("ahooks/lib/useCountDown"));
var isFunction_1 = tslib_1.__importDefault(require("lodash/isFunction"));
var CountDown = function CountDown(_ref) {
  var options = _ref.options,
    render = _ref.render;
  var _ref2 = (0, useCountDown_1["default"])(options),
    countDown = _ref2[0],
    formattedRes = _ref2[1];
  var days = formattedRes.days,
    hours = formattedRes.hours,
    minutes = formattedRes.minutes,
    seconds = formattedRes.seconds,
    milliseconds = formattedRes.milliseconds;
  if ((0, isFunction_1["default"])(render)) {
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {
      children: render(formattedRes, countDown)
    });
  }
  return (0, jsx_runtime_1.jsxs)("div", {
    children: [days, " days ", hours, " hours ", minutes, " minutes ", seconds, " seconds ", milliseconds]
  });
};
exports["default"] = CountDown;