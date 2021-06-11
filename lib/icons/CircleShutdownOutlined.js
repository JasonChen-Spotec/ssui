"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function CircleShutdownOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M8 16c-4.1 0-7.5-3.1-8-7.2S2.4 1 6.4.2s8 1.6 9.2 5.5-.7 8.1-4.5 9.7c-1 .4-2 .6-3.1.6zM8 .9C4.1.9.9 4.1.9 8c0 3.9 3.2 7.1 7.1 7.1 3.9 0 7.1-3.2 7.1-7.1C15.1 4.1 11.9.9 8 .9z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 8.5c-.3 0-.5-.2-.5-.4V4c0-.3.2-.5.5-.5s.5.3.5.5v4c0 .1-.1.2-.1.3-.1.1-.3.2-.4.2zm2.8-3.8c1 .8 1.6 2.1 1.7 3.4-.1 2.4-2.1 4.4-4.4 4.4s-4.4-1.9-4.4-4.4c0-1.3.6-2.6 1.7-3.4.1-.1.2-.1.3-.1.1-.1.3.1.3.4 0 .1-.1.2-.1.3C5 5.9 4.4 7 4.4 8.1c.1 2 1.6 3.5 3.6 3.5s3.5-1.5 3.6-3.5c0-1.1-.5-2.1-1.4-2.8-.1-.1-.2-.2-.2-.3 0-.2.2-.4.4-.4.2-.1.3 0 .4.1z"
    })));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CircleShutdownOutlined.displayName = "CircleShutdownOutlined";
var _default = CircleShutdownOutlined;
exports["default"] = _default;