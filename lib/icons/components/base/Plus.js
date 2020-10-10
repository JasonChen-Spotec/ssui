"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

function SvgPlus(props) {
  return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M15.44 7.44H8.56V.56a.56.56 0 00-1.12 0v6.88H.56a.56.56 0 000 1.12h6.88v6.88a.56.56 0 001.12 0V8.56h6.88a.56.56 0 100-1.12z"
  }));
}

var _default = SvgPlus;
exports["default"] = _default;