"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function CouponFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M16 12.8v-2.4c0-.2-.1-.3-.3-.3-1-.3-1.7-1.3-1.6-2.4.1-.9.7-1.5 1.6-1.8.2 0 .3-.2.3-.3V3.2c0-.9-.7-1.6-1.6-1.6H1.6C.7 1.6 0 2.3 0 3.2v2.4c0 .2.1.3.3.3 1 .3 1.7 1.3 1.6 2.4-.1.9-.7 1.5-1.6 1.8-.2 0-.3.2-.3.3v2.4c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6zM5.6 6.9c-.5 0-.8-.4-.8-.9 0-.4.4-.7.8-.7h4.7c.4 0 .8.3.8.7 0 .5-.3.9-.8.9H5.6zm4.8 3.8H5.6c-.4 0-.8-.3-.8-.7 0-.5.3-.9.8-.9h4.8c.4 0 .8.3.8.7 0 .5-.3.9-.8.9z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CouponFilled.displayName = "CouponFilled";
var _default = CouponFilled;
exports["default"] = _default;