/* eslint-disable no-useless-escape */

export interface FilterIntType {
  value: string;
  enableMinus?: boolean;
  preValue?: string;
}

const intNumberReg = /^-?\d+$/;

export const filterInt = ({ value, enableMinus, preValue }: FilterIntType): string => {
  let nextValue = value.replace(/[^\d\-]/g, '');

  if (!enableMinus) {
    nextValue = value.replace(/\D/g, '');
  }

  if (nextValue && nextValue.length > 1 && !intNumberReg.test(nextValue)) {
    return preValue ?? '';
  }

  return nextValue;
};

export interface FilterFloatType extends FilterIntType {
  precision?: number;
}

export const filterFloat = ({
  value,
  preValue = '',
  precision = 2,
  enableMinus,
}: FilterFloatType) => {
  let nextValue = value.replace(/[^\d.\-]/g, '');
  const matchDecimalPoint = nextValue.match(/\./g) || [];
  if (matchDecimalPoint.length > 1) {
    return preValue;
  }

  if (!enableMinus) {
    nextValue = value.replace(/[^\d.]/g, '');
  }

  const floatNumberReg = /^-?\d+\.?\d*$/;

  if (nextValue && nextValue.length > 1 && !floatNumberReg.test(nextValue)) {
    return preValue;
  }

  const twoDecimalNumReg = new RegExp(`^(\\-)*(\\d+)\\.(\\d{${precision}}).*$`);

  return nextValue.replace(twoDecimalNumReg, '$1$2.$3');
};
