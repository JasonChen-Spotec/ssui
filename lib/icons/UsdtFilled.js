"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function UsdtFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M0 8a8 8 0 108-8 8 8 0 00-8 8z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "inherit",
      d: "M8.88 7V5.81h2.87V4H4.18v1.81h2.88V7c-2.23.1-3.91.54-3.91 1.06s1.68 1 3.91 1.07V13h1.82V9.15c2.24-.1 3.94-.54 3.94-1.07S11.12 7.12 8.88 7zM8 8.79c-2.37 0-4.3-.38-4.3-.84s1.45-.74 3.38-.82V8.5h1.8V7.12c1.95.08 3.41.42 3.41.83s-1.93.84-4.29.84z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

UsdtFilled.displayName = "UsdtFilled";
var _default = UsdtFilled;
exports["default"] = _default;