"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function EarthFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 0a8 8 0 108 8 8 8 0 00-8-8zm-.8 14.34A6.39 6.39 0 011.6 8a6.15 6.15 0 01.17-1.43L5.6 10.4v.8a1.6 1.6 0 001.6 1.6v1.54zm5.52-2a1.6 1.6 0 00-1.52-1.14h-.8V8.8a.8.8 0 00-.8-.8H4.8V6.4h1.6a.8.8 0 00.8-.8V4h1.6a1.6 1.6 0 001.6-1.6v-.33a6.4 6.4 0 012.32 10.25z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

EarthFilled.displayName = "EarthFilled";
var _default = EarthFilled;
exports["default"] = _default;