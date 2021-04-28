"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function BarFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M6.3 16h-1c-.5 0-.8-.4-.8-.8V.8c0-.4.3-.8.8-.8h1c.5 0 .8.4.8.8v14.3c0 .5-.4.9-.8.9zm-4.5 0h-1c-.4 0-.8-.4-.8-.8V4.4c0-.5.4-.8.8-.8h1c.5 0 .8.4.8.8v10.8c.1.4-.3.8-.8.8zm8.9 0h-1c-.5 0-.8-.4-.8-.8V8c0-.5.4-.8.8-.8h1c.5 0 .8.4.8.8v7.1c.1.5-.3.9-.8.9zm4.5 0h-1c-.5 0-.8-.4-.8-.8V6.8c0-.5.4-.8.8-.8h1c.4 0 .8.4.8.8v8.3c0 .5-.4.9-.8.9z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

BarFilled.displayName = "BarFilled";
var _default = BarFilled;
exports["default"] = _default;