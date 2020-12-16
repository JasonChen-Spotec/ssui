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

const parse2RegexOption = regex => {
  if (isRegExp(regex)) {
    return parseRegex2RegexOption(regex);
  }
  if (isString(regex)) {
    return parseString2RegexOption(regex);
  }
  if (isObject(regex)) {
    return {
      ...defaultOptionValues,
      isValid: !!regex.pattern,
      ...regex
    };
  }
  return { isValid: false };
};

export default parse2RegexOption;
