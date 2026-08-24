"use strict";

function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.divide = exports.minus = exports.times = exports.plus = void 0;
var tslib_1 = require("tslib");
var bignumber_js_1 = tslib_1.__importDefault(require("bignumber.js"));
var buildCalculateFunc = function buildCalculateFunc(method) {
  return function () {
    for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
      value[_key] = arguments[_key];
    }
    var firstValue = value[0],
      restValues = _arrayLikeToArray(value).slice(1);
    var resultValue = new bignumber_js_1["default"](firstValue);
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