/* eslint-disable no-useless-escape */
export var filterInt = function filterInt(_a) {
  var value = _a.value,
      enableMinus = _a.enableMinus,
      preValue = _a.preValue;
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
export var filterFloat = function filterFloat(_a) {
  var value = _a.value,
      preValue = _a.preValue,
      precision = _a.precision,
      enableMinus = _a.enableMinus;
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

  var twoDecimalNumReg = new RegExp("^(\\-)*(\\d+)\\.(\\d{" + precision + "}).*$");
  return nextValue.replace(twoDecimalNumReg, '$1$2.$3');
};