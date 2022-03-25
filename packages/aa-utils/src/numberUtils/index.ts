import BigNumber from 'bignumber.js';
import { roundingModeMap, HALF_UP } from './const/roundingModeMap';
import { strip, float2Fixed, digitLength } from './numberPrecision';
import { plus, minus, times, divide } from './numberPrecision/calculateFunc';

type RoundingModeConfig =
  | 'up'
  | 'down'
  | 'ceil'
  | 'floor'
  | 'halfUp'
  | 'halfDown'
  | 'halfEven'
  | 'halfCeil'
  | 'halfFloor';
export interface OptionsConfig {
  useGrouping?: boolean;
  usePlus?: boolean;
  roundingMode?: RoundingModeConfig;
  minFractionDigits?: number;
  maxFractionDigits?: number;
}

interface DefaultOptionsConfig extends OptionsConfig {
  roundingMode: RoundingModeConfig;
  minFractionDigits: number;
  maxFractionDigits: number;
}

const defaultOptions: DefaultOptionsConfig = {
  useGrouping: false,
  usePlus: false,
  roundingMode: HALF_UP,
  minFractionDigits: 2,
  maxFractionDigits: 2,
};

const formatNumber = (value: BigNumber.Value, options?: OptionsConfig): string => {
  const { useGrouping, minFractionDigits, maxFractionDigits, usePlus, roundingMode } = {
    ...defaultOptions,
    ...options,
  };

  const formatMethod = useGrouping ? 'toFormat' : 'toFixed';
  const numList = `${value}`.split('.');
  const decimalPart = numList[1] || '';
  const decimalPartLength = decimalPart.length;

  let resultFractionDigits: number = minFractionDigits;

  if (minFractionDigits !== maxFractionDigits) {
    if (decimalPartLength > maxFractionDigits) {
      resultFractionDigits = maxFractionDigits;
    } else if (decimalPartLength > minFractionDigits) {
      resultFractionDigits = decimalPartLength;
    } else {
      resultFractionDigits = minFractionDigits;
    }
  }

  const numberObj = new BigNumber(value);

  const formatValue = numberObj[formatMethod](resultFractionDigits, roundingModeMap[roundingMode]);

  if (+value > 0 && usePlus) {
    return `+${formatValue}`;
  }

  return formatValue;
};

export interface FormatFixedFractionOptions
  extends Omit<OptionsConfig, 'minFractionDigits' | 'maxFractionDigits'> {
  fractionDigits?: number;
}

const formatFixedFraction = (value: BigNumber.Value, options?: FormatFixedFractionOptions) => {
  const { fractionDigits = 8, ...restOptions } = options || {};
  const resultOptions = {
    minFractionDigits: fractionDigits,
    maxFractionDigits: fractionDigits,
    ...restOptions,
  };
  return formatNumber(value, resultOptions);
};

export interface formatPercentOptions extends OptionsConfig {
  useUnit?: boolean;
}

const defaultPercentOptions = {
  useUnit: true,
};

const formatPercent = (value: BigNumber.Value, options?: formatPercentOptions) => {
  const { useUnit, ...restFormatNumberOptions } = {
    ...defaultPercentOptions,
    ...options,
  };

  const resultValue = times(value, 100);
  const formatValue = formatNumber(resultValue, restFormatNumberOptions);
  if (useUnit) {
    return `${formatValue}%`;
  }

  return formatValue;
};

const isGreaterThan = (value: BigNumber.Value, base: BigNumber.Value) => {
  const numberObj = new BigNumber(value);
  return numberObj.isGreaterThan(base);
};

const isGreaterThanOrEqualTo = (value: BigNumber.Value, base: BigNumber.Value) => {
  const numberObj = new BigNumber(value);
  return numberObj.isGreaterThanOrEqualTo(base);
};

const isLessThan = (value: BigNumber.Value, base: BigNumber.Value) => {
  const numberObj = new BigNumber(value);
  return numberObj.isLessThan(base);
};

const isLessThanOrEqualTo = (value: BigNumber.Value, base: BigNumber.Value) => {
  const numberObj = new BigNumber(value);
  return numberObj.isLessThanOrEqualTo(base);
};

export default {
  formatNumber,
  formatPercent,
  formatFixedFraction,
  BigNumber,
  strip,
  plus,
  minus,
  times,
  divide,
  float2Fixed,
  digitLength,
  isLessThan,
  isLessThanOrEqualTo,
  isGreaterThan,
  isGreaterThanOrEqualTo,
};
