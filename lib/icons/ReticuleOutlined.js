"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function ReticuleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M15 15.22H1A.6.6 0 01.56 15a.62.62 0 01-.16-.46l1-10A.6.6 0 012 4h12a.6.6 0 01.6.54l1 10a.62.62 0 01-.16.46.6.6 0 01-.44.22zM1.66 14h12.68l-.88-8.81H2.54z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M11 7.22a.59.59 0 01-.6-.59V4.38a2.4 2.4 0 10-4.8 0v2.25a.6.6 0 01-1.2 0V4.38a3.6 3.6 0 017.2 0v2.25a.59.59 0 01-.6.59z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

ReticuleOutlined.displayName = "ReticuleOutlined";
var _default = ReticuleOutlined;
exports["default"] = _default;