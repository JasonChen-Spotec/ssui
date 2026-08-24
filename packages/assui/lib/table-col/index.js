"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var TableCol = function TableCol(_ref) {
  var children = _ref.children,
    width = _ref.width,
    className = _ref.className;
  return (0, jsx_runtime_1.jsx)("div", {
    style: {
      width: width + "px"
    },
    className: (0, classnames_1["default"])('a-table-col', className),
    children: children
  });
};
exports["default"] = TableCol;