"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function LightningFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M14.4 6.1c0-.1-.2-.3-.6-.3h-4l1-4.8c0-.3 0-.5-.2-.7-.1-.2-.3-.3-.5-.3-.3 0-.5.1-.6.1-.1 0-.1.1-.1.1L1.7 8.8c-.2.2-.2.4-.1.7.1.1.3.3.7.3h3.6l-2 5.4v.1c0 .1 0 .3.2.6.1 0 .3.1.5.1.1 0 .3 0 .4-.1.1 0 .1-.1.2-.1l9-8.9.1-.1c.1-.1.3-.4.1-.7z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

LightningFilled.displayName = "LightningFilled";
var _default = LightningFilled;
exports["default"] = _default;