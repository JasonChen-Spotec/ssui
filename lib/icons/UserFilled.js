"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

function UserFilled(props) {
  var IconNode = function IconNode() {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M3.7 4.2c0 2.4 1.9 4.2 4.2 4.2s4.2-1.9 4.2-4.2S10.3 0 8 0C5.6 0 3.7 1.9 3.7 4.2zm8 4.3h-.2c-.1 0-.2 0-.5.1l-.5.2c-.8.4-1.6.5-2.5.5-.8 0-1.8-.1-2.6-.5-.3-.1-.5-.2-.5-.2-.1-.1-.2-.1-.5-.1h-.2c-1.5.2-2.8 1.3-3.3 2.7-.4.8-.6 1.8-.5 2.7 0 .2.1.5.5.6 2.2 1.2 4.7 1.6 7.2 1.5 4.8 0 7.2-1.5 7.2-1.5.2-.1.4-.4.5-.7 0-.9-.2-1.8-.5-2.6-.7-1.4-2-2.5-3.6-2.7z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, props, {
    component: IconNode
  }));
}

var _default = UserFilled;
exports["default"] = _default;