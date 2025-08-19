/* eslint-disable no-useless-escape */
var intNumberReg = /^-?\d+$/;
export var filterInt = function filterInt(_a) {
  var value = _a.value,
    enableMinus = _a.enableMinus,
    preValue = _a.preValue;
  var nextValue = value.replace(/[^\d\-]/g, '');
  if (!enableMinus) {
    nextValue = value.replace(/\D/g, '');
  }
  if (nextValue && nextValue.length > 1 && !intNumberReg.test(nextValue)) {
    return preValue !== null && preValue !== void 0 ? preValue : '';
  }
  return nextValue;
};
export var filterFloat = function filterFloat(_a) {
  var value = _a.value,
    _b = _a.preValue,
    preValue = _b === void 0 ? '' : _b,
    _c = _a.precision,
    precision = _c === void 0 ? 2 : _c,
    enableMinus = _a.enableMinus;
  var nextValue = value.replace(/[^\d.\-]/g, '');
  var matchDecimalPoint = nextValue.match(/\./g) || [];
  if (matchDecimalPoint.length > 1) {
    return preValue;
  }
  if (!enableMinus) {
    nextValue = value.replace(/[^\d.]/g, '');
  }
  var floatNumberReg = /^-?\d+\.?\d*$/;
  if (nextValue && nextValue.length > 1 && !floatNumberReg.test(nextValue)) {
    return preValue;
  }
  var twoDecimalNumReg = new RegExp('^(\\-)*(\\d+)\\.(\\d{'.concat(precision, '}).*$'));
  return nextValue.replace(twoDecimalNumReg, '$1$2.$3');
};
