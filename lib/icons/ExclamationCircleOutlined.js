"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function ExclamationCircleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.9c-3.8 0-6.9-3.1-6.9-6.9S4.2 1.1 8 1.1s6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M7.1 4.3c0 .5.4.9.9.9s.9-.4.9-.9-.4-.9-.9-.9-.9.4-.9.9zM8 12.8c-.5 0-.9-.4-.9-.9V7c0-.5.4-.9.9-.9s.9.4.9.9v4.9c0 .5-.4.9-.9.9z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

var _default = ExclamationCircleOutlined;
exports["default"] = _default;