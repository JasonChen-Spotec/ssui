"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function LockFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M12.55 5.33h-.76V3.81a3.81 3.81 0 10-7.62 0v1.52h-.76a1.53 1.53 0 00-1.53 1.53v7.62A1.52 1.52 0 003.41 16h9.14a1.52 1.52 0 001.52-1.52V6.86a1.53 1.53 0 00-1.52-1.53zM8 12.19a1.53 1.53 0 111.5-1.52A1.52 1.52 0 018 12.19zm2.36-6.86H5.61V3.81a2.37 2.37 0 014.73 0z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

LockFilled.displayName = "LockFilled";
var _default = LockFilled;
exports["default"] = _default;