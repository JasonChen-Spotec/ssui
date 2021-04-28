"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function DoubleDownOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M7.4 8.7l-7.1-7C-.1 1.4 0 .9.3.6s.8-.4 1.2 0L8 6.9 14.6.5c.3-.4.8-.4 1.2 0 .4.3.4.8 0 1.1l-7.1 7c-.3.3-.5.3-.7.3-.2 0-.4-.1-.6-.2z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M7.4 15.5l-7.1-7c-.4-.3-.3-.8 0-1.1s.8-.4 1.2 0L8 13.8l6.6-6.4c.3-.4.8-.4 1.2 0 .4.3.4.8 0 1.1l-7.1 7c-.2.2-.4.3-.6.3-.3 0-.5-.1-.7-.3z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

DoubleDownOutlined.displayName = "DoubleDownOutlined";
var _default = DoubleDownOutlined;
exports["default"] = _default;