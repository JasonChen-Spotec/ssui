"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var AreaText = function AreaText(_ref) {
  var value = _ref.value,
    className = _ref.className;
  return (0, jsx_runtime_1.jsx)("div", {
    className: (0, classnames_1["default"])('area-text', className),
    children: value
  });
};
exports["default"] = AreaText;