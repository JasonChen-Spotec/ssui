"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

function SvgPie(props) {
  return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8.07 8.69l-.32-.12-.09-.09-1.93-1.93L3.14 4a6.48 6.48 0 009.61 8.69 6.18 6.18 0 001.19-1.88l-1.89-.68zm-.67-1.5l-.89-.9L3.18 3A6.46 6.46 0 017.4 1.21zm.82-5.72a6.48 6.48 0 016.31 6.63 6.61 6.61 0 01-.31 1.82l-6-2.13z"
  }));
}

var _default = SvgPie;
exports["default"] = _default;