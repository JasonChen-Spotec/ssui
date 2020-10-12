"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

function CardFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M12.5 4.5h-1c-.3 0-.5.2-.5.5v2.1c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V4.9c0-.2-.2-.4-.5-.4zm1.5-3H2c-1.1 0-2 .8-2 1.9v9.1c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3.4c0-1.1-.9-1.9-2-1.9zM8.5 12.6h-6c-.3 0-.6-.2-.6-.4 0-.3.2-.6.4-.6h6.1c.3 0 .5.2.6.4 0 .3-.1.5-.4.6 0-.1 0-.1-.1 0zm0-2h-6c-.3 0-.5-.1-.6-.4 0-.3.1-.5.4-.6h6.1c.4-.1.6.1.7.4 0 .3-.1.5-.4.6h-.2zm5.5-3c0 .6-.5 1-1 1h-2c-.5 0-1-.4-1-1V4.5c0-.5.4-1 1-1h2c.5 0 1 .4 1 1v3.1z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

var _default = CardFilled;
exports["default"] = _default;