"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function CopyFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M10.6 11.4c.4 0 .8-.4.8-.8V.8c0-.4-.4-.8-.8-.8H.8C.4 0 0 .4 0 .8v9.8c0 .4.4.8.8.8h9.8z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M15.2 4.6h-2.6v7.1c0 .5-.4.9-.9.9H4.6v2.6c0 .4.4.8.8.8h9.8c.4 0 .8-.4.8-.8V5.4c0-.5-.4-.8-.8-.8z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CopyFilled.displayName = "CopyFilled";
var _default = CopyFilled;
exports["default"] = _default;