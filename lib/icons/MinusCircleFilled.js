"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

function MinusCircleFilled(props) {
  var IconNode = function IconNode() {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 0a8 8 0 108 8 8 8 0 00-8-8zm5.09 9.11H2.91V6.89h10.18v2.22z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, props, {
    component: IconNode
  }));
}

var _default = MinusCircleFilled;
exports["default"] = _default;