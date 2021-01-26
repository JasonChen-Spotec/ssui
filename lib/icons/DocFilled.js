"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function DocFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M10.8 0c.5 0 1 .2 1.4.6l2.2 2.2c.4.3.6.8.6 1.4V14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h7.8zM8.3 11H4.8c-.5 0-.8.3-.8.7 0 .4.3.8.7.8h3.5c.4 0 .8-.3.8-.7 0-.5-.3-.8-.7-.8zm3-3.5H4.8c-.5 0-.8.3-.8.7 0 .5.3.8.8.8h6.5c.4 0 .7-.3.7-.8 0-.4-.3-.7-.7-.7zm0-3.5H4.8c-.5 0-.8.3-.8.8 0 .4.3.7.8.7h6.5c.4 0 .8-.3.8-.7-.1-.5-.4-.8-.8-.8z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

DocFilled.displayName = "DocFilled";
var _default = DocFilled;
exports["default"] = _default;