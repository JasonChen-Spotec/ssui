import isRegExp from 'lodash/isRegExp';
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';

export interface RegexOptionType {
  isValid: boolean;
  replacement: string;
}

type regexParamsType = RegExp | string | { pattern: RegExp; replacement?: string };

export interface ResultType extends RegexOptionType {
  pattern: RegExp;
}

const defaultOptionValues: RegexOptionType = {
  isValid: true,
  replacement: '',
};

const parseRegex2RegexOption = (regex: RegExp, options?: RegexOptionType) => ({
  ...defaultOptionValues,
  pattern: regex,
  ...options,
});

const parseString2RegexOption = (regexString: string, options?: RegexOptionType) =>
  parseRegex2RegexOption(new RegExp(regexString), options);

const parse2RegexOption = (regex: regexParamsType): ResultType => {
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
      ...regex,
    };
  }
  return { isValid: false, replacement: '', pattern: /./ };
};

export default parse2RegexOption;
