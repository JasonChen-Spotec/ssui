const formattedNumberFunc = options => {
  const { value, numberStyle, callback, minimumFractionDigits = 0, ...rest } = options;
  const finalValue = value || 0;

  const formattedNumber = new Intl.NumberFormat(
    'en-US',
    { minimumFractionDigits, maximumFractionDigits: 2, ...rest }
  ).format(finalValue);

  let formattedCurrency;
  if (numberStyle === 'percent') {
    formattedCurrency = `${formattedNumber}%`;
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
