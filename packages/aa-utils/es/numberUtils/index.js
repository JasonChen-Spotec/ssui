var _excluded = ["fractionDigits"],
  _excluded2 = ["useUnit"];
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import BigNumber from 'bignumber.js';
import isNull from 'lodash/isNull';
import isNaN from 'lodash/isNaN';
import isUndefined from 'lodash/isUndefined';
import { roundingModeMap, HALF_UP } from './const/roundingModeMap';
import { strip, float2Fixed, digitLength } from './numberPrecision';
import { plus, minus, times, divide } from './numberPrecision/calculateFunc';
var defaultOptions = {
  useGrouping: false,
  usePlus: false,
  roundingMode: HALF_UP,
  minFractionDigits: 2,
  maxFractionDigits: 2
};
var checkValue = function checkValue(value) {
  if (isNull(value) || isUndefined(value) || isNaN(value)) {
    return '0';
  }
  return value;
};
var formatNumber = function formatNumber(value, options) {
  var val = checkValue(value);
  var _defaultOptions$optio = _extends({}, defaultOptions, options),
    useGrouping = _defaultOptions$optio.useGrouping,
    minFractionDigits = _defaultOptions$optio.minFractionDigits,
    maxFractionDigits = _defaultOptions$optio.maxFractionDigits,
    usePlus = _defaultOptions$optio.usePlus,
    roundingMode = _defaultOptions$optio.roundingMode;
  var formatMethod = useGrouping ? 'toFormat' : 'toFixed';
  var numList = ("" + val).split('.');
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
  var formatValue = numberObj[formatMethod](resultFractionDigits, roundingModeMap[roundingMode]);
  if (+val > 0 && usePlus) {
    return "+" + formatValue;
  }
  return formatValue;
};
var formatFixedFraction = function formatFixedFraction(value, options) {
  var _ref = options || {},
    _ref$fractionDigits = _ref.fractionDigits,
    fractionDigits = _ref$fractionDigits === void 0 ? 8 : _ref$fractionDigits,
    restOptions = _objectWithoutPropertiesLoose(_ref, _excluded);
  var resultOptions = _extends({
    minFractionDigits: fractionDigits,
    maxFractionDigits: fractionDigits
  }, restOptions);
  return formatNumber(value, resultOptions);
};
var defaultPercentOptions = {
  useUnit: true
};
var formatPercent = function formatPercent(value, options) {
  var val = checkValue(value);
  var _defaultPercentOption = _extends({}, defaultPercentOptions, options),
    useUnit = _defaultPercentOption.useUnit,
    restFormatNumberOptions = _objectWithoutPropertiesLoose(_defaultPercentOption, _excluded2);
  var resultValue = times(val, 100);
  var formatValue = formatNumber(resultValue, restFormatNumberOptions);
  if (useUnit) {
    return formatValue + "%";
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
  isGreaterThanOrEqualTo: isGreaterThanOrEqualTo
};