"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function TransformFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm5.5 9l-4 2.6c-.2.2-.6.1-.6-.2v-1.1c0-.2-.2-.3-.4-.4H2.6c-.2-.1-.3-.2-.3-.3v-.8c0-.2.2-.3.4-.4h10.6c.2.1.3.4.2.6zm.2-1.8c0 .2-.2.3-.4.3H2.6c-.2 0-.3-.2-.2-.4V7l4-2.6c.2-.1.6-.1.6.2v1.2c0 .2.2.4.4.4h5.9c.2 0 .4.2.4.3v.7z"
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 8,
      cy: 8,
      r: 8
    }), /*#__PURE__*/React.createElement("path", {
      fill: "inherit",
      d: "M13.2 8.4H2.7c-.2 0-.3.2-.4.4v.8c0 .2.1.3.3.3h5.9c.2 0 .3.2.4.4v1.1c0 .3.4.4.6.2l4-2.6v-.1c0-.1-.1-.4-.3-.5z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "inherit",
      className: "transform-filled_svg__st0",
      d: "M13.6 6.5c0-.2-.2-.3-.4-.3H7.3c-.2 0-.3-.2-.4-.4V4.6c0-.3-.4-.3-.6-.2L2.4 7v.1c-.1.2 0 .4.2.5h10.7c.2 0 .3-.2.4-.3l-.1-.8z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

TransformFilled.displayName = "TransformFilled";
var _default = TransformFilled;
exports["default"] = _default;