import padEnd from 'lodash/padEnd';
import isString from 'lodash/isString';
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

  formatBigFloatNumber(value, options={}){
    const defaultOptions = {
      useGrouping: false,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      usePlus: false
    };

    if (!isString(value)) {
      throw new Error('formatBigFloatNumber error, value type must string');
    }

    const { useGrouping, minimumFractionDigits, maximumFractionDigits, usePlus, ...rest } = {...defaultOptions, ...options};

    const floatNumReg = new RegExp(`^(\\-)*(\\d+)\.(\\d\*).*$`)

    const prefix = `${value}`.replace(floatNumReg, '$1');
    let decimalPart = `${value}`.replace(floatNumReg, '$3');
    let initPart = `${value}`.replace(floatNumReg, '$2');

    if (decimalPart.length > maximumFractionDigits) {
      decimalPart = decimalPart.substring(0, maximumFractionDigits)
    }

    if (decimalPart.length < minimumFractionDigits) {
      decimalPart = padEnd(decimalPart, minimumFractionDigits, '0')
    }

    if (useGrouping) {
      initPart = this.formatNumber(initPart, rest)
    }

    let resultValue = `${initPart}.${decimalPart}`

    if (prefix) {
      return `${prefix}${resultValue}`;
    }

    return usePlus ? `+${resultValue}` : resultValue;
  }
}

export default new NumberUtils();
