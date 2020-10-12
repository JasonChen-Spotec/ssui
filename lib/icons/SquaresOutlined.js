"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

function SquaresOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M1.1 10.2C.5 10.2 0 9.7 0 9.1V1.8C0 .8.9 0 1.9 0h4.2c.6 0 1.1.5 1.1 1.1V9c0 .6-.5 1.1-1.1 1.1 0 .1-5 .1-5 .1zm13.7-2.9h-5c-.6 0-1.1-.5-1.1-1.1v-5C8.7.5 9.2 0 9.8 0H14c1.1 0 1.9.9 1.9 1.9v4.2c.1.7-.4 1.2-1.1 1.2M1.9 16c-1 0-1.9-.8-1.9-1.9v-1.3c0-.6.5-1.1 1.1-1.1h5c.6 0 1.1.5 1.1 1.1v2.1c0 .6-.5 1.1-1.1 1.1H1.9zM14 16H9.8c-.6 0-1.1-.5-1.1-1.1v-5c0-.6.5-1.1 1.1-1.1h5c.6 0 1.1.5 1.1 1.1v4.2c.1 1-.8 1.9-1.9 1.9"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

var _default = SquaresOutlined;
exports["default"] = _default;