"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _padEnd = _interopRequireDefault(require("lodash/padEnd"));

var _isString = _interopRequireDefault(require("lodash/isString"));

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
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$usePlus = _options.usePlus,
        usePlus = _options$usePlus === void 0 ? false : _options$usePlus,
        restOptions = (0, _objectWithoutPropertiesLoose2["default"])(_options, ["usePlus"]);
    var formatValue = this.intlNumberFormat(value, restOptions);

    if (usePlus) {
      return "+" + formatValue;
    }

    return formatValue;
  };

  _proto.formatCurrency = function formatCurrency(value, options) {
    if (options === void 0) {
      options = {};
    }

    var _options2 = options,
        _options2$usePlus = _options2.usePlus,
        usePlus = _options2$usePlus === void 0 ? false : _options2$usePlus,
        restOptions = (0, _objectWithoutPropertiesLoose2["default"])(_options2, ["usePlus"]);
    var finalyOptions = Object.assign({
      style: 'currency',
      currency: 'USD'
    }, restOptions);
    var formatValue = this.intlNumberFormat(value, finalyOptions);

    if (usePlus) {
      return "+" + formatValue;
    }

    return formatValue;
  };

  _proto.formatPercent = function formatPercent(value, options) {
    if (options === void 0) {
      options = {};
    }

    var _options3 = options,
        _options3$usePlus = _options3.usePlus,
        usePlus = _options3$usePlus === void 0 ? false : _options3$usePlus,
        restOptions = (0, _objectWithoutPropertiesLoose2["default"])(_options3, ["usePlus"]);
    var finalyOptions = Object.assign({
      style: 'percent'
    }, restOptions);
    var formatValue = this.intlNumberFormat(value, finalyOptions);

    if (usePlus) {
      return "+" + formatValue;
    }

    return formatValue;
  };

  _proto.formatBigFloatNumber = function formatBigFloatNumber(value, options) {
    if (options === void 0) {
      options = {};
    }

    var defaultOptions = {
      useGrouping: false,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      usePlus: false
    };

    if (!(0, _isString["default"])(value)) {
      throw new Error('formatBigFloatNumber error, value type must string');
    }

    var _defaultOptions$optio = Object.assign({}, defaultOptions, options),
        useGrouping = _defaultOptions$optio.useGrouping,
        minimumFractionDigits = _defaultOptions$optio.minimumFractionDigits,
        maximumFractionDigits = _defaultOptions$optio.maximumFractionDigits,
        usePlus = _defaultOptions$optio.usePlus,
        rest = (0, _objectWithoutPropertiesLoose2["default"])(_defaultOptions$optio, ["useGrouping", "minimumFractionDigits", "maximumFractionDigits", "usePlus"]);

    var floatNumReg = new RegExp("^(\\-)*(\\d+).(\\d*).*$");
    var prefix = ("" + value).replace(floatNumReg, '$1');
    var decimalPart = ("" + value).replace(floatNumReg, '$3');
    var initPart = ("" + value).replace(floatNumReg, '$2');

    if (decimalPart.length > maximumFractionDigits) {
      decimalPart = decimalPart.substring(0, maximumFractionDigits);
    }

    if (decimalPart.length < minimumFractionDigits) {
      decimalPart = (0, _padEnd["default"])(decimalPart, minimumFractionDigits, '0');
    }

    if (useGrouping) {
      initPart = this.formatNumber(initPart, rest);
    }

    var resultValue = initPart + "." + decimalPart;

    if (prefix) {
      return "" + prefix + resultValue;
    }

    return usePlus ? "+" + resultValue : resultValue;
  };

  return NumberUtils;
}();

var _default = new NumberUtils();

exports["default"] = _default;