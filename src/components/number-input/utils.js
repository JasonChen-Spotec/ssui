/* eslint-disable no-useless-escape */
export const filterInt = ({ value, enableMinus, preValue }) => {
  let nextValue = value.replace(/[^\-\d]/g, '');

  if (!enableMinus) {
    nextValue = value.replace(/[^\d]/g, '');
  }

  const intNumberReg = /^\-?\d+$/;

  if (nextValue && nextValue.length > 1 && !intNumberReg.test(nextValue)) {
    return preValue;
  }

  return nextValue;
};


export const filterFloat = ({ value, preValue, precision, enableMinus }) => {
  let nextValue = value.replace(/[^\-\d.]/g, '');
  const matchDecimalPoint = nextValue.match(/[.]/g) || [];
  if (matchDecimalPoint.length > 1) {
    return preValue;
  }

  if (!enableMinus) {
    nextValue = value.replace(/[^0-9.]/g, '');
  }

  const floatNumberReg = /^\-?\d+\.?\d*$/;

  if (nextValue && nextValue.length > 1 && !floatNumberReg.test(nextValue)) {
    return preValue;
  }

  const twoDecialNumReg = new RegExp(`^(\\-)*(\\d+)\\.(\\d{${precision}}).*$`);

  return nextValue.replace(twoDecialNumReg, '$1$2.$3');
};
