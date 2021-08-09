var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

import isRegExp from 'lodash/isRegExp';
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';
var defaultOptionValues = {
  isValid: true,
  replacement: ''
};

var parseRegex2RegexOption = function parseRegex2RegexOption(regex, options) {
  return __assign(__assign(__assign({}, defaultOptionValues), {
    pattern: regex
  }), options);
};

var parseString2RegexOption = function parseString2RegexOption(regexString, options) {
  return parseRegex2RegexOption(new RegExp(regexString), options);
};

var parse2RegexOption = function parse2RegexOption(regex) {
  if (isRegExp(regex)) {
    return parseRegex2RegexOption(regex);
  }

  if (isString(regex)) {
    return parseString2RegexOption(regex);
  }

  if (isObject(regex)) {
    return __assign(__assign(__assign({}, defaultOptionValues), {
      isValid: !!regex.pattern
    }), regex);
  }

  return {
    isValid: false
  };
};

export default parse2RegexOption;