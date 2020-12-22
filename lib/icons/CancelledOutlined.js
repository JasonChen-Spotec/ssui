"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function CancelledOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M14.65 15.77L8 9.12l-6.65 6.65a.79.79 0 11-1.12-1.12L6.88 8 .23 1.35A.79.79 0 011.35.23L8 6.88 14.65.23a.79.79 0 111.12 1.12L9.12 8l6.65 6.65a.79.79 0 11-1.12 1.12z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CancelledOutlined.displayName = "CancelledOutlined";
var _default = CancelledOutlined;
exports["default"] = _default;