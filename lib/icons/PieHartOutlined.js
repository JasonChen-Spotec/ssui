"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function PieHartOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 200 200"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M93.8 23.9c0-4.3-3.8-7.7-8.1-7.2-47.8 5.1-84.3 44.4-82.9 90.9v.4c-1.2 49.5 39.8 90.6 91.8 91.9 43.9-.9 80.7-30.6 89.5-70.7 1.1-5-2.6-9.7-7.7-9.7H102c-4.5 0-8.2-3.7-8.2-8.2V23.9zm17.3 67.2c0 4 3.2 7.2 7.2 7.2h71.8c4 0 7.2-3.2 7.2-7.2.3-44.8-34.1-86.4-78.7-90.7-4-.4-7.6 2.8-7.6 6.8v83.9z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

var _default = PieHartOutlined;
exports["default"] = _default;