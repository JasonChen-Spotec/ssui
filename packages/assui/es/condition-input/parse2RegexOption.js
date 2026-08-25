function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import isObject from 'lodash/isObject';
import isRegExp from 'lodash/isRegExp';
import isString from 'lodash/isString';
var defaultOptionValues = {
  isValid: true,
  replacement: ''
};
var parseRegex2RegexOption = function parseRegex2RegexOption(regex, options) {
  return _extends({}, defaultOptionValues, {
    pattern: regex
  }, options);
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
    return _extends({}, defaultOptionValues, {
      isValid: !!regex.pattern
    }, regex);
  }
  return {
    isValid: false,
    replacement: '',
    pattern: /./
  };
};
export default parse2RegexOption;