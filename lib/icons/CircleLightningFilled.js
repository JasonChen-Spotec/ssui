"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function CircleLightningFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 1a7 7 0 11-7 7 7 7 0 017-7m0-1a8 8 0 108 8 8 8 0 00-8-8z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M10.64 3.14H7.27a.76.76 0 00-.7.45L4.26 8.66h2.51l-1.51 4.52 6.9-6.53H9.28L11 3.71a.37.37 0 00-.36-.57z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CircleLightningFilled.displayName = "CircleLightningFilled";
var _default = CircleLightningFilled;
exports["default"] = _default;