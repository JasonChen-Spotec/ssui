"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function Btc(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 8,
      cy: 8,
      r: 8
    }), /*#__PURE__*/React.createElement("path", {
      fill: "inherit",
      className: "btc_svg__st0",
      d: "M10.8 7.8c.3-.4.4-.8.4-1.3 0-1.1-.8-2-1.9-2.1H9V2.8c0-.1-.1-.2-.2-.2h-.5c-.1 0-.2.1-.2.2v1.6h-.9V2.8c0-.1-.1-.2-.2-.1h-.5c-.1 0-.2.1-.2.2v1.6H4.5c-.1 0-.2.1-.2.2v.5c0 .1.1.2.2.2.6 0 1 .4 1 1v3.4c0 .4-.3.8-.8.8-.1 0-.1.1-.2.1l-.1.6c0 .1.1.2.2.2h1.8v1.6c0 .1.1.2.2.2h.6c.1 0 .2-.1.1-.2v-1.6h.9v1.6c0 .1.1.2.2.1H9c.1 0 .2-.1.2-.2v-1.6h.8c1.1 0 1.9-1 1.9-2.1-.2-.5-.5-1.1-1.1-1.5zm-3.6-2h1.4c.5 0 .9.4.9.9s-.4.9-.9.9H7.2V5.8zM9 10.3H7.2V8.4H9c.5 0 .9.4.9.9s-.4 1-.9 1z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

Btc.displayName = "Btc";
var _default = Btc;
exports["default"] = _default;