"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function UserFilled2(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 0h4.4v4.4c0 2.5-2 4.4-4.4 4.4s-4.4-2-4.4-4.4S5.5 0 8 0zM4 9.8h8c1.7 0 3.1 1.4 3.1 3.1v.4c0 1.5-1.2 2.7-2.7 2.7H3.6C2.1 16 .9 14.8.9 13.3v-.4c0-1.7 1.4-3.1 3.1-3.1z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

UserFilled2.displayName = "UserFilled2";
var _default = UserFilled2;
exports["default"] = _default;