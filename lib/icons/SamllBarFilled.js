"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function SamllBarFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("rect", {
      fill: "currentColor",
      y: 5.03,
      width: 4,
      height: 10.97,
      rx: 1.11
    }), /*#__PURE__*/React.createElement("rect", {
      fill: "currentColor",
      x: 6,
      width: 4,
      height: 16,
      rx: 1.11
    }), /*#__PURE__*/React.createElement("rect", {
      fill: "currentColor",
      x: 12,
      y: 2.64,
      width: 4,
      height: 13.36,
      rx: 1.11
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

SamllBarFilled.displayName = "SamllBarFilled";
var _default = SamllBarFilled;
exports["default"] = _default;