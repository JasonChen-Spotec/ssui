"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isValidValue = function isValidValue(value) {
  return !!value || value === 0;
};

exports["default"] = isValidValue;