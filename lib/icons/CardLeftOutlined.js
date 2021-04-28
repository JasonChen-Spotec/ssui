"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function CardLeftOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M11 9c0-.3-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5s.2.5.5.5h1c.3 0 .5-.2.5-.5zM2.5 10.5c-.3 0-.5.2-.5.5s.2.5.5.5h4c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-4z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 1.5H2c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h7.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H2c-.6 0-1-.4-1-1v-7h14v3.6c0 .3.2.5.5.5s.5-.2.5-.5V3.5c0-1.1-.9-2-2-2zm-13 3v-1c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v1H1z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 9c0-.3-.2-.5-.5-.5h-5c-.3 0-.5.2-.5.5s.2.5.5.5h5c.3 0 .5-.2.5-.5zM11.8 12.6l2.4-2.2c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-2.8 2.5c-.1.1-.2.2-.2.4 0 .1 0 .3.1.4l2.8 2.9c.1.1.2.2.4.2.1 0 .3 0 .3-.1.2-.2.2-.5 0-.7l-2.3-2.7z"
    })));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CardLeftOutlined.displayName = "CardLeftOutlined";
var _default = CardLeftOutlined;
exports["default"] = _default;