"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function CorrectOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M15.7 2.8c-.3-.3-.9-.3-1.2 0l-8.7 8.7-4.3-4.4C1.2 6.7.6 6.7.3 7c-.4.3-.4.9 0 1.2l4.7 5c0 .1.1.2.2.2.2.2.4.3.7.2.2 0 .5 0 .7-.2.1 0 .1-.1.2-.2l9-9.2c.3-.2.3-.8-.1-1.2z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CorrectOutlined.displayName = "CorrectOutlined";
var _default = CorrectOutlined;
exports["default"] = _default;