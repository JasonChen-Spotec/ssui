"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function PieceFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M.6 3.8C.6 5.9 3.9 7.6 8 7.6s7.4-1.7 7.4-3.8S12.1 0 8 0 .6 1.7.6 3.8zM8 8.7c-3 0-5.6-.9-6.7-2.3C.8 7 .6 7.4.6 8c0 2.1 3.3 3.8 7.4 3.8s7.4-1.7 7.4-3.8c0-.6-.2-1-.6-1.5C13.6 7.8 11 8.7 8 8.7zM8 13c-3.1 0-5.7-.9-6.7-2.3-.3.5-.6.9-.6 1.5C.6 14.3 3.9 16 8 16s7.4-1.7 7.4-3.8c0-.6-.2-1-.6-1.5C13.7 12.1 11.1 13 8 13z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

PieceFilled.displayName = "PieceFilled";
var _default = PieceFilled;
exports["default"] = _default;