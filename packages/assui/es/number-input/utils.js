var intNumberReg = /^-?\d+$/;
export var filterInt = function filterInt(_ref) {
  var value = _ref.value,
    enableMinus = _ref.enableMinus,
    preValue = _ref.preValue;
  var nextValue = value.replace(/[^\d-]/g, '');
  if (!enableMinus) {
    nextValue = value.replace(/\D/g, '');
  }
  if (nextValue && nextValue.length > 1 && !intNumberReg.test(nextValue)) {
    return preValue != null ? preValue : '';
  }
  return nextValue;
};
export var filterFloat = function filterFloat(_ref2) {
  var value = _ref2.value,
    _ref2$preValue = _ref2.preValue,
    preValue = _ref2$preValue === void 0 ? '' : _ref2$preValue,
    _ref2$precision = _ref2.precision,
    precision = _ref2$precision === void 0 ? 2 : _ref2$precision,
    enableMinus = _ref2.enableMinus;
  var nextValue = value.replace(/[^\d.-]/g, '');
  var matchDecimalPoint = nextValue.match(/\./g) || [];
  if (matchDecimalPoint.length > 1) {
    return preValue;
  }
  if (!enableMinus) {
    nextValue = value.replace(/[^\d.]/g, '');
  }
  var floatNumberReg = /^-?(?:\d+\.?\d*|\.\d+)$/;
  if (nextValue && nextValue.length > 1 && !floatNumberReg.test(nextValue)) {
    return preValue;
  }
  var twoDecimalNumReg = new RegExp("^(\\-)*(\\d+)\\.(\\d{" + precision + "}).*$");
  return nextValue.replace(twoDecimalNumReg, '$1$2.$3');
};