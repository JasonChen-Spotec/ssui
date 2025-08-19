import BigNumber from 'bignumber.js';
import { digitLength, float2Fixed, strip } from './numberPrecision';
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
type Value = BigNumber.Value | null | undefined;
export interface FormatFixedFractionOptions
  extends Omit<OptionsConfig, 'minFractionDigits' | 'maxFractionDigits'> {
  fractionDigits?: number;
}
export interface formatPercentOptions extends OptionsConfig {
  useUnit?: boolean;
}
declare const _default: {
  formatNumber: (value: Value, options?: OptionsConfig) => string;
  formatPercent: (value: Value, options?: formatPercentOptions) => string;
  formatFixedFraction: (value: Value, options?: FormatFixedFractionOptions) => string;
  BigNumber: typeof BigNumber;
  strip: typeof strip;
  plus: (...value: BigNumber.Value[]) => string;
  minus: (...value: BigNumber.Value[]) => string;
  times: (...value: BigNumber.Value[]) => string;
  divide: (...value: BigNumber.Value[]) => string;
  float2Fixed: typeof float2Fixed;
  digitLength: typeof digitLength;
  isLessThan: (value: BigNumber.Value, base: BigNumber.Value) => boolean;
  isLessThanOrEqualTo: (value: BigNumber.Value, base: BigNumber.Value) => boolean;
  isGreaterThan: (value: BigNumber.Value, base: BigNumber.Value) => boolean;
  isGreaterThanOrEqualTo: (value: BigNumber.Value, base: BigNumber.Value) => boolean;
};
export default _default;
