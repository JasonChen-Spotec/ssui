"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _numberPrecision = require("../numberPrecision");

var NumberUtils = /*#__PURE__*/function () {
  function NumberUtils() {
    this.strip = _numberPrecision.strip;
    this.plus = _numberPrecision.plus;
    this.minus = _numberPrecision.minus;
    this.times = _numberPrecision.times;
    this.divide = _numberPrecision.divide;
    this.round = _numberPrecision.round;
    this.digitLength = _numberPrecision.digitLength;
    this.float2Fixed = _numberPrecision.float2Fixed;
  }

  var _proto = NumberUtils.prototype;

  _proto.intlNumberFormat = function intlNumberFormat(value, options) {
    var defaultOptions = {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    };
    var formattedNumber = new Intl.NumberFormat('en-US', Object.assign({}, defaultOptions, options)).format(value);
    return formattedNumber;
  };

  _proto.formatNumber = function formatNumber(value, options) {
    return this.intlNumberFormat(value, options);
  };

  _proto.formatCurrency = function formatCurrency(value, options) {
    if (options === void 0) {
      options = {};
    }

    var finalyOptions = Object.assign({
      style: 'currency',
      currency: 'USD'
    }, options);
    return this.intlNumberFormat(value, finalyOptions);
  };

  _proto.formatPercent = function formatPercent(value, options) {
    var finalyOptions = Object.assign({
      style: 'percent'
    }, options);
    return this.intlNumberFormat(value, finalyOptions);
  };

  _proto.cutFloatNumber = function cutFloatNumber(value, precision) {
    if (precision === void 0) {
      precision = 3;
    }

    var getFloatNumReg = function getFloatNumReg(number) {
      return new RegExp("^(\\-)*(\\d+).(\\d{" + number + "}).*$");
    };

    var floatNumReg = getFloatNumReg(precision);
    return ("" + value).replace(floatNumReg, '$1$2.$3');
  };

  return NumberUtils;
}();

var _default = new NumberUtils();

exports["default"] = _default;