"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function UserFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M7.83 0a4 4 0 00-4.08 4 4.08 4.08 0 008.16 0 4 4 0 00-4.08-4zm0 0a4 4 0 00-4.08 4 4.08 4.08 0 008.16 0 4 4 0 00-4.08-4zM6.3 9.33A5.22 5.22 0 001 14.5v.33C1 16 3.39 16 6.3 16h3.4c2.91 0 5.3 0 5.3-1.17v-.33a5.22 5.22 0 00-5.3-5.17z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

UserFilled.displayName = "UserFilled";
var _default = UserFilled;
exports["default"] = _default;