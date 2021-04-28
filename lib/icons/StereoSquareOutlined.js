"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function StereoSquareOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M15.3 3.7L8.3.1c-.2-.1-.4-.1-.7 0l-7 3.6c-.2.1-.3.4-.3.7v7.4c0 .3.2.6.4.7l7 3.5c.2.1.5.1.7 0l7-3.5c.3-.1.4-.4.4-.7V4.4c-.1-.3-.2-.5-.5-.7zM7.9 7.2L5.3 5.9l5.9-3.2L13.8 4c0 .1-5.9 3.2-5.9 3.2zM8 1.1l2.1 1.1-6 3.2-2.3-1.2L8 1.1zm-6.7 4l2.5 1.2V9c0 .3.2.5.5.5s.5-.2.5-.5V6.8l2.7 1.3v6.5l-6.2-3.1V5.1zm7.2 9.6V8.1l6.2-3.3v6.8l-6.2 3.1z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

StereoSquareOutlined.displayName = "StereoSquareOutlined";
var _default = StereoSquareOutlined;
exports["default"] = _default;