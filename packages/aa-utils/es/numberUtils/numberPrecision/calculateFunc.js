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
import BigNumber from 'bignumber.js';
var buildCalculateFunc = function buildCalculateFunc(method) {
  return function () {
    var value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      value[_i] = arguments[_i];
    }
    var _a = __read(value),
      firstValue = _a[0],
      restValues = _a.slice(1);
    var resultValue = new BigNumber(firstValue);
    if (restValues.length > 0) {
      restValues.forEach(function (v) {
        resultValue = resultValue[method](v);
      });
    }
    return resultValue.toString();
  };
};
export var plus = buildCalculateFunc('plus');
export var times = buildCalculateFunc('times');
export var minus = buildCalculateFunc('minus');
export var divide = buildCalculateFunc('dividedBy');
