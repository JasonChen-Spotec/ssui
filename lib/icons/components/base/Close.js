"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

function SvgClose(props) {
  return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    className: "close_svg__st0",
    d: "M.014 15.144L15.146.012l.849.848L.863 15.992z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    className: "close_svg__st0",
    d: "M15.153 15.986L.02.854.869.005l15.132 15.132z"
  }));
}

var _default = SvgClose;
exports["default"] = _default;