"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

function TriangleFilled(props) {
  var IconNode = function IconNode() {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M1.15 3.37L8 3.35l6.88.06a2.09 2.09 0 01.91.12.64.64 0 010 1l-7.28 8a.78.78 0 01-1 0l-7.28-8a.65.65 0 010-1c.13-.11.37-.16.94-.16z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, props, {
    component: IconNode
  }));
}

var _default = TriangleFilled;
exports["default"] = _default;