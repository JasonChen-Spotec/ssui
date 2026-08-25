function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import BigNumber from 'bignumber.js';
var buildCalculateFunc = function buildCalculateFunc(method) {
  return function () {
    for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
      value[_key] = arguments[_key];
    }
    var firstValue = value[0],
      restValues = _arrayLikeToArray(value).slice(1);
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