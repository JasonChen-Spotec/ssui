"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

function UserAddFilled(props) {
  var IconNode = function IconNode() {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M6 7.2c1.5 0 2.8-1.2 2.8-2.7v-.9C8.8 2 7.5.8 6 .8S3.2 2 3.2 3.6v.9C3.2 6 4.5 7.2 6 7.2zm4.6 2.5c-2.9-1.2-6.2-1.2-9.1 0C.5 10.1 0 11 0 12v1.1c0 .7.5 1.4 1.1 1.6 1.6.3 3.3.5 4.9.5 1.6 0 3.3-.2 4.8-.6.7-.2 1.1-.9 1.1-1.6v-1.1c.1-.9-.4-1.8-1.3-2.2zM14 5.2v-2h-1.2v2h-2v1.1h2v2H14v-2h2v-1l-2-.1z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, props, {
    component: IconNode
  }));
}

var _default = UserAddFilled;
exports["default"] = _default;