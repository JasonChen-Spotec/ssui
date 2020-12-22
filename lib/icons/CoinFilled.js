"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function CoinFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M7.8 11c-3.3 0-6-1-6-2.7V10c0 1.7 2.7 3 6 3s6-1.3 6-3V8.3c0 1.7-2.7 2.7-6 2.7zm0 3c-3.3 0-6-1-6-2.7V13c0 1.7 2.7 3 6 3s6-1.3 6-3v-1.7c0 1.7-2.7 2.7-6 2.7zm0-6c-3.3 0-6-1-6-2.7V7c0 1.7 2.7 3 6 3s6-1.3 6-3V5.3c0 1.7-2.7 2.7-6 2.7zm0-8c-3.3 0-6 1.3-6 3v1c0 1.7 2.7 3 6 3s6-1.3 6-3V3c0-1.7-2.7-3-6-3z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CoinFilled.displayName = "CoinFilled";
var _default = CoinFilled;
exports["default"] = _default;