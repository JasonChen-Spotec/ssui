"use strict";

exports.__esModule = true;
exports.filterFloat = exports.filterInt = void 0;

/* eslint-disable no-useless-escape */
var filterInt = function filterInt(_ref) {
  var value = _ref.value,
      enableMinus = _ref.enableMinus,
      preValue = _ref.preValue;
  var nextValue = value.replace(/[^\-\d]/g, '');

  if (!enableMinus) {
    nextValue = value.replace(/[^\d]/g, '');
  }

  var intNumberReg = /^\-?\d+$/;

  if (nextValue && nextValue.length > 1 && !intNumberReg.test(nextValue)) {
    return preValue;
  }

  return nextValue;
};

exports.filterInt = filterInt;

var filterFloat = function filterFloat(_ref2) {
  var value = _ref2.value,
      preValue = _ref2.preValue,
      precision = _ref2.precision,
      enableMinus = _ref2.enableMinus;
  var nextValue = value.replace(/[^\-\d.]/g, '');
  var matchDecimalPoint = nextValue.match(/[.]/g) || [];

  if (matchDecimalPoint.length > 1) {
    return preValue;
  }

  if (!enableMinus) {
    nextValue = value.replace(/[^0-9.]/g, '');
  }

  var floatNumberReg = /^\-?\d+\.?\d*$/;

  if (nextValue && nextValue.length > 1 && !floatNumberReg.test(nextValue)) {
    return preValue;
  }

  var twoDecialNumReg = new RegExp("^(\\-)*(\\d+)\\.(\\d{" + precision + "}).*$");
  return nextValue.replace(twoDecialNumReg, '$1$2.$3');
};

exports.filterFloat = filterFloat;