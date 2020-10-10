"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

function SvgEye(props) {
  return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M8 3.2C3.9 3.2 0 8 0 8s3.6 4.8 8 4.8S16 8 16 8c-4.2-5.2-8-4.8-8-4.8zm0 7.9c-1.7 0-3.1-1.4-3.1-3.1S6.3 4.9 8 4.9s3.1 1.4 3.1 3.1c0 1.7-1.4 3.1-3.1 3.1z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 8,
    cy: 8,
    r: 1.9
  }));
}

var _default = SvgEye;
exports["default"] = _default;