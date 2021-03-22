"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function UmbrellaOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8.48 1.26V.53A.52.52 0 008 0a.53.53 0 00-.53.53v.74A7.3 7.3 0 00.7 8.54a.52.52 0 00.53.52h6.2v4.71a1.18 1.18 0 11-2.35 0 .52.52 0 00-.53-.52.52.52 0 00-.52.52 2.23 2.23 0 104.45 0V9.06h6.29a.52.52 0 00.53-.52 7.32 7.32 0 00-6.82-7.28zM5.31 8c0-1 .12-4.52 2.68-5.67C10.4 3.52 10.7 6.93 10.73 8zm.55-5.33A8.43 8.43 0 004.26 8H1.78a6.23 6.23 0 014.08-5.32zM11.78 8A9.06 9.06 0 0010 2.64 6.26 6.26 0 0114.23 8z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

UmbrellaOutlined.displayName = "UmbrellaOutlined";
var _default = UmbrellaOutlined;
exports["default"] = _default;