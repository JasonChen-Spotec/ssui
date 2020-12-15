import isRegExp from 'lodash/isRegExp';
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';

const defaultOptionValues = {
  isValid: true,
  replacement: ''
};

const parseRegex2RegexOption = (regex, options) => ({
  ...defaultOptionValues,
  pattern: regex,
  ...options
});

const parseString2RegexOption = (regexString, options) =>
  parseRegex2RegexOption(new RegExp(regexString), options);

const parse2RegexOption = regexOptions => {
  let regexOption = { isValid: false };
  const { regex, ...options } = regexOptions;
  if (isRegExp(regex)) {
    regexOption = parseRegex2RegexOption(regex, options);
  }
  if (isString(regex)) {
    regexOption = parseString2RegexOption(regex, options);
  }
  if (isObject(regex)) {
    regexOption = {
      ...defaultOptionValues,
      ...regex,
      ...options
    };
  }
  return regexOption;
};

export default parse2RegexOption;
