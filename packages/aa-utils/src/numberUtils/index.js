import { strip, plus, minus, times, divide, round, digitLength, float2Fixed } from '../numberPrecision';

class NumberUtils {
  constructor(){
    this.strip = strip;
    this.plus = plus;
    this.minus = minus;
    this.times = times;
    this.divide = divide;
    this.round = round;
    this.digitLength = digitLength;
    this.float2Fixed = float2Fixed;
  }

  intlNumberFormat(value, options){
    const defaultOptions = {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }
    const formattedNumber = new Intl.NumberFormat(
      'en-US',
      { ...defaultOptions, ...options }
    ).format(value);

    return formattedNumber
  }

  formatNumber(value, options = {}){
    const {usePlus = false, ...restOptions} = options;

    const formatValue = this.intlNumberFormat(value, restOptions);
    if (usePlus) {
      return `+${formatValue}`;
    }

    return formatValue;
  }

  formatCurrency(value, options = {}){
    const {usePlus = false, ...restOptions} = options;
    const finalyOptions = {
      style: 'currency',
      currency: 'USD',
      ...restOptions
    }

    const formatValue = this.intlNumberFormat(value, finalyOptions);
    if (usePlus) {
      return `+${formatValue}`;
    }

    return formatValue;
  }

  formatPercent(value, options = {}){
    const {usePlus = false, ...restOptions} = options;

    const finalyOptions = {
      style: 'percent',
      ...restOptions
    }
    const formatValue = this.intlNumberFormat(value, finalyOptions);
    if (usePlus) {
      return `+${formatValue}`;
    }

    return formatValue;
  }

  cutFloatNumber(value, precision = 3){
    const getFloatNumReg =  (number) => new RegExp(`^(\\-)*(\\d+)\.(\\d\{${number}\}).*$`)
    const floatNumReg = getFloatNumReg(precision);

    return `${value}`.replace(floatNumReg, '$1$2.$3')
  }
}

export default new NumberUtils();
