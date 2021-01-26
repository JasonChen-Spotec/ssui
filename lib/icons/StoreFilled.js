"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function StoreFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M1 1.9l-1 3c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2l-1-3c-.1-.3-.4-.6-.8-.6H1.8c-.3 0-.6.2-.8.6zm9 5.8c-.7.1-1.5-.2-2-.7-.5.5-1.3.8-2 .7-.7.1-1.5-.2-2-.7-.6.5-1.4.8-2.2.7v5.8c0 .7.7 1.2 1.2 1.2h9.8c.7 0 1.2-.5 1.2-1.2V7.7c-.8 0-1.6-.2-2.2-.8-.3.6-1.1.9-1.8.8z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

StoreFilled.displayName = "StoreFilled";
var _default = StoreFilled;
exports["default"] = _default;