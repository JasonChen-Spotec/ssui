"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function DoubleUpOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 7.1c.2 0 .4.1.6.3l7.1 7c.4.4.4.9 0 1.1-.4.4-.9.4-1.2 0L8 9.1l-6.6 6.4c-.4.4-.9.4-1.2 0s-.4-.9 0-1.1l7.1-7c.3-.2.5-.3.7-.3z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 .2c.2 0 .4.1.6.3l7.1 7c.4.4.4.9 0 1.1-.4.4-.9.4-1.2 0L8 2.2 1.4 8.7c-.3.3-.8.3-1.1 0s-.4-.9 0-1.1l7.1-7c.2-.3.4-.4.6-.4z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

DoubleUpOutlined.displayName = "DoubleUpOutlined";
var _default = DoubleUpOutlined;
exports["default"] = _default;