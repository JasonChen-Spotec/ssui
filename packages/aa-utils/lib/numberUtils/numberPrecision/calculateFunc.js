'use strict';

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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule
      ? mod
      : {
          default: mod,
        };
  };
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.divide = exports.minus = exports.times = exports.plus = void 0;
var bignumber_js_1 = __importDefault(require('bignumber.js'));
var buildCalculateFunc = function buildCalculateFunc(method) {
  return function () {
    var value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      value[_i] = arguments[_i];
    }
    var _a = __read(value),
      firstValue = _a[0],
      restValues = _a.slice(1);
    var resultValue = new bignumber_js_1['default'](firstValue);
    if (restValues.length > 0) {
      restValues.forEach(function (v) {
        resultValue = resultValue[method](v);
      });
    }
    return resultValue.toString();
  };
};
exports.plus = buildCalculateFunc('plus');
exports.times = buildCalculateFunc('times');
exports.minus = buildCalculateFunc('minus');
exports.divide = buildCalculateFunc('dividedBy');
