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
    d: "M8 3.21C3.89 3.21 0 8 0 8s3.64 4.8 8 4.8 8-4.75 8-4.75c-4.24-5.28-8-4.84-8-4.84zm0 7.92A3.13 3.13 0 1111.13 8 3.13 3.13 0 018 11.13z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 8,
    cy: 8,
    r: 1.91
  }));
}

var _default = SvgEye;
exports["default"] = _default;