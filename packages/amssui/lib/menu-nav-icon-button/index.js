"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var MenuNavIconButton = function MenuNavIconButton(props) {
  var _onClick = props.onClick,
    className = props.className;
  var _ref = (0, useControllableValue_1["default"])(props, {
      valuePropName: 'status'
    }),
    status = _ref[0],
    setStatus = _ref[1];
  return (0, jsx_runtime_1.jsx)("div", {
    className: (0, classnames_1["default"])('menu-nav-icon', {
      open: status
    }, className),
    onClick: function onClick() {
      var nextStatus = !status;
      setStatus(nextStatus);
      _onClick == null || _onClick();
    },
    children: (0, jsx_runtime_1.jsxs)("div", {
      className: "menu-nav-icon-wrap",
      children: [(0, jsx_runtime_1.jsx)("span", {
        className: "menu-nav-icon-bar"
      }), (0, jsx_runtime_1.jsx)("span", {
        className: "menu-nav-icon-bar"
      }), (0, jsx_runtime_1.jsx)("span", {
        className: "menu-nav-icon-bar"
      })]
    })
  });
};
exports["default"] = MenuNavIconButton;