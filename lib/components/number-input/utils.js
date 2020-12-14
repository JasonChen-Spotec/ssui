"use strict";

exports.__esModule = true;
exports.filterFloat = exports.filterInt = void 0;

var filterInt = function filterInt(value) {
  return value.replace(/[^\d]/g, '');
};

exports.filterInt = filterInt;

var filterFloat = function filterFloat(_ref) {
  var value = _ref.value,
      preValue = _ref.preValue,
      precision = _ref.precision;
  var nextValue = value.replace(/[^0-9.]/g, '');
  var matchDecimalPoint = nextValue.match(/[.]/g) || [];

  if (matchDecimalPoint.length > 1) {
    return preValue;
  }

  var twoDecialNumReg = new RegExp("^(\\-)*(\\d+)\\.(\\d{" + precision + "}).*$");
  return nextValue.replace(twoDecialNumReg, '$1$2.$3');
};

exports.filterFloat = filterFloat;