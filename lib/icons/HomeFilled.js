"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function HomeFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8.9.3c-.5-.4-1.2-.4-1.7 0L.2 7c-.3.2-.3.6 0 .9.2.3.6.3.9 0l.1-.1v6.9c0 .7.6 1.3 1.3 1.3h3.7v-3.9c0-.5.4-.9.9-.9h1.8c.5 0 .9.4.9.9V16h3.8c.7 0 1.3-.6 1.3-1.3V7.9c.3.3.7.2.9 0 .2-.3.2-.7 0-.9L8.9.3z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

HomeFilled.displayName = "HomeFilled";
var _default = HomeFilled;
exports["default"] = _default;