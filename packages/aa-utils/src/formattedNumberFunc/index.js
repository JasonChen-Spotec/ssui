import { strip } from '../numberPrecision';

const formattedNumberFunc = options => {
  const {
    value,
    numberStyle,
    callback,
    minimumFractionDigits = 0,
    maximumFractionDigits = 2,
    ...rest
  } = options;
  const finalValue = value || 0;

  const formattedNumber = new Intl.NumberFormat(
    'en-US',
    { minimumFractionDigits, maximumFractionDigits, ...rest }
  ).format(finalValue);

  let formattedCurrency;
  if (numberStyle === 'percent') {
    formattedCurrency = `${strip(formattedNumber * 100, maximumFractionDigits)}%`;
  } else if (numberStyle === 'decimalinreport') {
    formattedCurrency = formattedNumber.indexOf('-') !== -1 ?
    `($${formattedNumber.split('-')[1]})` : `$${formattedNumber}`;
  } else {
    formattedCurrency = formattedNumber.indexOf('-') !== -1 ?
    `-$${formattedNumber.split('-')[1]}` : `$${formattedNumber}`;
  }
  if (typeof callback === 'function') {
    return callback(formattedCurrency);
  }
  return formattedCurrency;
};

export default formattedNumberFunc;
