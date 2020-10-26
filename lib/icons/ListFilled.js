"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function ListFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M13.7 0h-11C2 0 1.4.6 1.4 1.3V15c0 .4.5.6.8.4l.9-.9c.2-.2.5-.2.7 0l1.4 1.3c.2.2.4.2.6 0l2.1-1.5c.2-.1.4-.1.5 0l2.1 1.5c.2.1.4.1.6 0l1.4-1.3c.2-.2.5-.2.7 0l.9.8c.3.3.8.1.8-.4V1.3C15 .6 14.4 0 13.7 0zm-11 3.3c0-.4.3-.7.7-.7h4.1c.4 0 .7.3.7.7 0 .4-.3.7-.7.7H3.4c-.4 0-.7-.3-.7-.7zM9.6 6c0 .4-.3.7-.7.7H3.4c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h5.5c.3 0 .7.4.7.7z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

var _default = ListFilled;
exports["default"] = _default;