"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function BookmarkFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M12.9 15.9l-4.1-2.2c-.5-.3-1.1-.3-1.5 0l-4.2 2.2c-.3.2-.7 0-.8-.2 0-.1-.1-.2-.1-.3V1.9C2.2.9 3.1 0 4.1 0h7.7c1.1 0 1.9.9 1.9 1.9v13.5c0 .3-.3.6-.6.6 0 0-.1 0-.2-.1z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

BookmarkFilled.displayName = "BookmarkFilled";
var _default = BookmarkFilled;
exports["default"] = _default;