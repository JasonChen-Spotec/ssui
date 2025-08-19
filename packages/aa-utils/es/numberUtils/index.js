var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import BigNumber from 'bignumber.js';
import isNaN from 'lodash/isNaN';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';
import { HALF_UP, roundingModeMap } from './const/roundingModeMap';
import { digitLength, float2Fixed, strip } from './numberPrecision';
import { divide, minus, plus, times } from './numberPrecision/calculateFunc';
var defaultOptions = {
  useGrouping: false,
  usePlus: false,
  roundingMode: HALF_UP,
  minFractionDigits: 2,
  maxFractionDigits: 2,
};
var checkValue = function checkValue(value) {
  if (isNull(value) || isUndefined(value) || isNaN(value)) {
    return '0';
  }
  return value;
};
var formatNumber = function formatNumber(value, options) {
  var val = checkValue(value);
  var _a = __assign(__assign({}, defaultOptions), options),
    useGrouping = _a.useGrouping,
    minFractionDigits = _a.minFractionDigits,
    maxFractionDigits = _a.maxFractionDigits,
    usePlus = _a.usePlus,
    roundingMode = _a.roundingMode;
  var formatMethod = useGrouping ? 'toFormat' : 'toFixed';
  var numList = ''.concat(val).split('.');
  var decimalPart = numList[1] || '';
  var decimalPartLength = decimalPart.length;
  var resultFractionDigits = minFractionDigits;
  if (minFractionDigits !== maxFractionDigits) {
    if (decimalPartLength > maxFractionDigits) {
      resultFractionDigits = maxFractionDigits;
    } else if (decimalPartLength > minFractionDigits) {
      resultFractionDigits = decimalPartLength;
    } else {
      resultFractionDigits = minFractionDigits;
    }
  }
  var numberObj = new BigNumber(val);
  var formatValue = numberObj[formatMethod](
    resultFractionDigits,
    roundingModeMap[roundingMode],
  );
  if (+val > 0 && usePlus) {
    return '+'.concat(formatValue);
  }
  return formatValue;
};
var formatFixedFraction = function formatFixedFraction(value, options) {
  var _a = options || {},
    _b = _a.fractionDigits,
    fractionDigits = _b === void 0 ? 8 : _b,
    restOptions = __rest(_a, ['fractionDigits']);
  var resultOptions = __assign(
    {
      minFractionDigits: fractionDigits,
      maxFractionDigits: fractionDigits,
    },
    restOptions,
  );
  return formatNumber(value, resultOptions);
};
var defaultPercentOptions = {
  useUnit: true,
};
var formatPercent = function formatPercent(value, options) {
  var val = checkValue(value);
  var _a = __assign(__assign({}, defaultPercentOptions), options),
    useUnit = _a.useUnit,
    restFormatNumberOptions = __rest(_a, ['useUnit']);
  var resultValue = times(val, 100);
  var formatValue = formatNumber(resultValue, restFormatNumberOptions);
  if (useUnit) {
    return ''.concat(formatValue, '%');
  }
  return formatValue;
};
var isGreaterThan = function isGreaterThan(value, base) {
  var numberObj = new BigNumber(value);
  return numberObj.isGreaterThan(base);
};
var isGreaterThanOrEqualTo = function isGreaterThanOrEqualTo(value, base) {
  var numberObj = new BigNumber(value);
  return numberObj.isGreaterThanOrEqualTo(base);
};
var isLessThan = function isLessThan(value, base) {
  var numberObj = new BigNumber(value);
  return numberObj.isLessThan(base);
};
var isLessThanOrEqualTo = function isLessThanOrEqualTo(value, base) {
  var numberObj = new BigNumber(value);
  return numberObj.isLessThanOrEqualTo(base);
};
export default {
  formatNumber: formatNumber,
  formatPercent: formatPercent,
  formatFixedFraction: formatFixedFraction,
  BigNumber: BigNumber,
  strip: strip,
  plus: plus,
  minus: minus,
  times: times,
  divide: divide,
  float2Fixed: float2Fixed,
  digitLength: digitLength,
  isLessThan: isLessThan,
  isLessThanOrEqualTo: isLessThanOrEqualTo,
  isGreaterThan: isGreaterThan,
  isGreaterThanOrEqualTo: isGreaterThanOrEqualTo,
};
