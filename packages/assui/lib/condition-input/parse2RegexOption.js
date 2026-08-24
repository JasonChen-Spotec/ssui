"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var isRegExp_1 = tslib_1.__importDefault(require("lodash/isRegExp"));
var isString_1 = tslib_1.__importDefault(require("lodash/isString"));
var isObject_1 = tslib_1.__importDefault(require("lodash/isObject"));
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
  if ((0, isRegExp_1["default"])(regex)) {
    return parseRegex2RegexOption(regex);
  }
  if ((0, isString_1["default"])(regex)) {
    return parseString2RegexOption(regex);
  }
  if ((0, isObject_1["default"])(regex)) {
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
exports["default"] = parse2RegexOption;