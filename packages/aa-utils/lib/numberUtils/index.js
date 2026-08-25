"use strict";

var _excluded = ["fractionDigits"],
  _excluded2 = ["useUnit"];
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var bignumber_js_1 = tslib_1.__importDefault(require("bignumber.js"));
var isNull_1 = tslib_1.__importDefault(require("lodash/isNull"));
var isNaN_1 = tslib_1.__importDefault(require("lodash/isNaN"));
var isUndefined_1 = tslib_1.__importDefault(require("lodash/isUndefined"));
var roundingModeMap_1 = require("./const/roundingModeMap");
var numberPrecision_1 = require("./numberPrecision");
var calculateFunc_1 = require("./numberPrecision/calculateFunc");
var defaultOptions = {
  useGrouping: false,
  usePlus: false,
  roundingMode: roundingModeMap_1.HALF_UP,
  minFractionDigits: 2,
  maxFractionDigits: 2
};
var checkValue = function checkValue(value) {
  if ((0, isNull_1["default"])(value) || (0, isUndefined_1["default"])(value) || (0, isNaN_1["default"])(value)) {
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
  var numberObj = new bignumber_js_1["default"](val);
  var formatValue = numberObj[formatMethod](resultFractionDigits, roundingModeMap_1.roundingModeMap[roundingMode]);
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
  var resultValue = (0, calculateFunc_1.times)(val, 100);
  var formatValue = formatNumber(resultValue, restFormatNumberOptions);
  if (useUnit) {
    return formatValue + "%";
  }
  return formatValue;
};
var isGreaterThan = function isGreaterThan(value, base) {
  var numberObj = new bignumber_js_1["default"](value);
  return numberObj.isGreaterThan(base);
};
var isGreaterThanOrEqualTo = function isGreaterThanOrEqualTo(value, base) {
  var numberObj = new bignumber_js_1["default"](value);
  return numberObj.isGreaterThanOrEqualTo(base);
};
var isLessThan = function isLessThan(value, base) {
  var numberObj = new bignumber_js_1["default"](value);
  return numberObj.isLessThan(base);
};
var isLessThanOrEqualTo = function isLessThanOrEqualTo(value, base) {
  var numberObj = new bignumber_js_1["default"](value);
  return numberObj.isLessThanOrEqualTo(base);
};
exports["default"] = {
  formatNumber: formatNumber,
  formatPercent: formatPercent,
  formatFixedFraction: formatFixedFraction,
  BigNumber: bignumber_js_1["default"],
  strip: numberPrecision_1.strip,
  plus: calculateFunc_1.plus,
  minus: calculateFunc_1.minus,
  times: calculateFunc_1.times,
  divide: calculateFunc_1.divide,
  float2Fixed: numberPrecision_1.float2Fixed,
  digitLength: numberPrecision_1.digitLength,
  isLessThan: isLessThan,
  isLessThanOrEqualTo: isLessThanOrEqualTo,
  isGreaterThan: isGreaterThan,
  isGreaterThanOrEqualTo: isGreaterThanOrEqualTo
};