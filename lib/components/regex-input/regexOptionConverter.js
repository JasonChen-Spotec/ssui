"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _isRegExp = _interopRequireDefault(require("lodash/isRegExp"));

var _isString = _interopRequireDefault(require("lodash/isString"));

var _isObject = _interopRequireDefault(require("lodash/isObject"));

var defaultOptionValues = {
  isValid: true,
  replacement: ''
};

var parseRegex2RegexOption = function parseRegex2RegexOption(regex, options) {
  return Object.assign({}, defaultOptionValues, {
    pattern: regex
  }, options);
};

var parseString2RegexOption = function parseString2RegexOption(regexString, options) {
  return parseRegex2RegexOption(new RegExp(regexString), options);
};

var parse2RegexOption = function parse2RegexOption(regex) {
  if ((0, _isRegExp["default"])(regex)) {
    return parseRegex2RegexOption(regex);
  }

  if ((0, _isString["default"])(regex)) {
    return parseString2RegexOption(regex);
  }

  if ((0, _isObject["default"])(regex)) {
    return Object.assign({}, defaultOptionValues, {
      isValid: !!regex.pattern
    }, regex);
  }

  return {
    isValid: false
  };
};

var _default = parse2RegexOption;
exports["default"] = _default;