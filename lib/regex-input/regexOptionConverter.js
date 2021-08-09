"use strict";

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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isRegExp_1 = __importDefault(require("lodash/isRegExp"));

var isString_1 = __importDefault(require("lodash/isString"));

var isObject_1 = __importDefault(require("lodash/isObject"));

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
  if (isRegExp_1["default"](regex)) {
    return parseRegex2RegexOption(regex);
  }

  if (isString_1["default"](regex)) {
    return parseString2RegexOption(regex);
  }

  if (isObject_1["default"](regex)) {
    return __assign(__assign(__assign({}, defaultOptionValues), {
      isValid: !!regex.pattern
    }), regex);
  }

  return {
    isValid: false
  };
};

exports["default"] = parse2RegexOption;