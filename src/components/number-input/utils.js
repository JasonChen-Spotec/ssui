export const filterInt = value => value.replace(/[^\d]/g, '');
export const filterFloat = ({ value, preValue, precision }) => {
  const nextValue = value.replace(/[^0-9.]/g, '');
  const matchDecimalPoint = nextValue.match(/[.]/g) || [];
  if (matchDecimalPoint.length > 1) {
    return preValue;
  }
  const twoDecialNumReg = new RegExp(`^(\\-)*(\\d+)\\.(\\d{${precision}}).*$`);
  return nextValue.replace(twoDecialNumReg, '$1$2.$3');
};
