"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var isUndefined_1 = tslib_1.__importDefault(require("lodash/isUndefined"));
var View = react_1["default"].forwardRef(function (props, ref) {
  var children = props.children,
    className = props.className,
    split = props.split,
    size = props.size;
  var viewStyle = {
    flex: 1,
    position: 'relative',
    outline: 'none'
  };
  if (!(0, isUndefined_1["default"])(size)) {
    if (split === 'vertical') {
      viewStyle.width = size;
    } else {
      viewStyle.height = size;
      viewStyle.display = 'flex';
    }
    viewStyle.flex = 'none';
  }
  return (0, jsx_runtime_1.jsx)("div", {
    ref: ref,
    className: className,
    style: viewStyle,
    children: children
  });
});
exports["default"] = View;