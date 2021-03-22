"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function LightningOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M5.87 9.37H2.73a.59.59 0 01-.54-.8L5.31.38A.57.57 0 015.85 0h5.27a.58.58 0 01.54.81L9.85 5.27h3.42a.59.59 0 01.44 1L5.32 15.8a.59.59 0 01-1-.54l1.55-5.89zm.39-8.2l-2.68 7h3.05a.59.59 0 01.59.59.77.77 0 010 .15l-1.14 4.24L12 6.44H9a.59.59 0 01-.55-.81l1.82-4.46z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

LightningOutlined.displayName = "LightningOutlined";
var _default = LightningOutlined;
exports["default"] = _default;