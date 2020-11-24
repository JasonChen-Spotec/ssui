"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var formattedNumberFunc = function formattedNumberFunc(options) {
  var value = options.value,
      numberStyle = options.numberStyle,
      callback = options.callback,
      _options$minimumFract = options.minimumFractionDigits,
      minimumFractionDigits = _options$minimumFract === void 0 ? 0 : _options$minimumFract,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(options, ["value", "numberStyle", "callback", "minimumFractionDigits"]);
  var finalValue = value || 0;
  var formattedNumber = new Intl.NumberFormat('en-US', Object.assign({
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: 2
  }, rest)).format(finalValue);
  var formattedCurrency;

  if (numberStyle === 'percent') {
    formattedCurrency = formattedNumber + "%";
  } else if (numberStyle === 'decimalinreport') {
    formattedCurrency = formattedNumber.indexOf('-') !== -1 ? "($" + formattedNumber.split('-')[1] + ")" : "$" + formattedNumber;
  } else {
    formattedCurrency = formattedNumber.indexOf('-') !== -1 ? "-$" + formattedNumber.split('-')[1] : "$" + formattedNumber;
  }

  if (typeof callback === 'function') {
    return callback(formattedCurrency);
  }

  return formattedCurrency;
};

var _default = formattedNumberFunc;
exports["default"] = _default;