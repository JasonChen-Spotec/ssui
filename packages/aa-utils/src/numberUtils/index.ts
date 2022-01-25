import BigNumber from 'bignumber.js';
import { roundingModeMap, HALF_UP } from './const/roundingModeMap';
import { strip, float2Fixed, digitLength } from './numberPrecision';
import { plus, minus, times, divide } from './numberPrecision/calculateFunc';

type roundingModeConfig =
  | 'up'
  | 'down'
  | 'ceil'
  | 'floor'
  | 'halfUp'
  | 'halfDown'
  | 'halfEven'
  | 'halfCeil'
  | 'halfFloor';
export interface optionsConfig {
  useGrouping?: boolean;
  usePlus?: boolean;
  roundingMode?: roundingModeConfig;
  minFractionDigits?: number;
  maxFractionDigits?: number;
}

interface defaultOptionsConfig extends optionsConfig {
  roundingMode: roundingModeConfig;
  minFractionDigits: number;
  maxFractionDigits: number;
}

const defaultOptions: defaultOptionsConfig = {
  useGrouping: false,
  usePlus: false,
  roundingMode: HALF_UP,
  minFractionDigits: 2,
  maxFractionDigits: 2,
};

const formatNumber = (value: number | string, options?: optionsConfig): string => {
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

export interface formatPercentOptions extends optionsConfig {
  useUnit?: boolean;
}

const defaultPercentOptions = {
  useUnit: true,
};

const formatPercent = (value: number, options?: formatPercentOptions) => {
  const { useUnit, ...restFormatNumberOptions } = { ...defaultPercentOptions, ...options };

  const resultValue = times(value, 100);
  const formatValue = formatNumber(resultValue, restFormatNumberOptions);
  if (useUnit) {
    return `${formatValue}%`;
  }

  return formatValue;
};

export default {
  formatNumber,
  formatPercent,
  BigNumber,
  strip,
  plus,
  minus,
  times,
  divide,
  float2Fixed,
  digitLength,
};
