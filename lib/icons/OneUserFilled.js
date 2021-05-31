"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function OneUserFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M11.3 1.9h-.8C10.1.5 8.7-.3 7.3.1c-.9.2-1.5.9-1.8 1.8h-.8c-1.6 0-2.8 1.3-2.8 2.8v8.4c0 1.6 1.3 2.8 2.8 2.8h6.5c1.6 0 2.8-1.3 2.8-2.8V4.7c.1-1.5-1.2-2.8-2.7-2.8zM8 1.2c.4 0 .7.3.7.7s-.3.7-.7.7c-.4 0-.7-.3-.7-.7s.3-.7.7-.7zm0 4c1 0 1.7.8 1.7 1.8S9 8.7 8 8.7 6.3 7.9 6.3 7C6.3 6 7 5.2 8 5.2zm2.9 7.4c-.2.3-.6.4-.9.4H6c-.3 0-.7-.2-.9-.4-.2-.3-.3-.6-.2-.9C5.3 10 7 8.9 8.7 9.3c1.2.3 2.1 1.2 2.4 2.4.1.3 0 .7-.2.9z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

OneUserFilled.displayName = "OneUserFilled";
var _default = OneUserFilled;
exports["default"] = _default;