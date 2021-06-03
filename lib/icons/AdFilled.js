"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function AdFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M15.5 5H12L9.3 2.3c.4-.7.2-1.6-.5-2.1S7.1 0 6.7.7c-.3.5-.3 1.1 0 1.6L4 5H.5c-.3 0-.5.2-.5.5v10c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5v-10c0-.3-.2-.5-.5-.5zm-8-2.1c.3.1.7.1 1 0L10.6 5H5.4l2.1-2.1z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "inherit",
      d: "M6.6 8.5H2.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h3.7c.3 0 .6.3.6.6 0 .4-.3.6-.6.6zM13.1 11.3H2.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h10.2c.3 0 .6.3.6.6s-.3.6-.6.6zM13.1 14H2.9c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h10.2c.3 0 .6.3.6.6s-.3.6-.6.6z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

AdFilled.displayName = "AdFilled";
var _default = AdFilled;
exports["default"] = _default;