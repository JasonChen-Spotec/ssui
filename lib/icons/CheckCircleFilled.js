"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

function CheckCircleFilled(props) {
  var IconNode = function IconNode() {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 0a8 8 0 108 8 8 8 0 00-8-8zm4.59 5.92L7.41 11.1a.73.73 0 01-.88.11l-.14-.11-3-3a.72.72 0 011-1L6.9 9.56l4.66-4.66a.74.74 0 011 0 .72.72 0 01.03 1.02z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, props, {
    component: IconNode
  }));
}

var _default = CheckCircleFilled;
exports["default"] = _default;