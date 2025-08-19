var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
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
        error: error,
      };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
import useCountDown from 'ahooks/es/useCountDown';
import isFunction from 'lodash/isFunction';
import React from 'react';
var CountDown = function CountDown(_a) {
  var options = _a.options,
    render = _a.render;
  var _b = __read(useCountDown(options), 2),
    countDown = _b[0],
    formattedRes = _b[1];
  var days = formattedRes.days,
    hours = formattedRes.hours,
    minutes = formattedRes.minutes,
    seconds = formattedRes.seconds,
    milliseconds = formattedRes.milliseconds;
  if (isFunction(render)) {
    return /*#__PURE__*/ React.createElement(
      React.Fragment,
      null,
      render(formattedRes, countDown),
    );
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    days,
    ' days ',
    hours,
    ' hours ',
    minutes,
    ' minutes ',
    seconds,
    ' seconds ',
    milliseconds,
  );
};
export default CountDown;
