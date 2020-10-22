"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function DownloadFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M16 11.4v3.1c0 .3-.1.5-.3.7-.2.2-.4.3-.7.3H.9c-.3 0-.5-.1-.7-.3-.1-.3-.2-.5-.2-.7v-3.1c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h4.5l1.3 1.3c.4.4.8.5 1.3.5s.9-.2 1.3-.5l1.3-1.3h4.5c.3 0 .5.1.7.3 0 .2.1.4.1.7zm-3.1-5.5c.1.3.1.5-.1.7l-4.3 4.3c-.2.1-.3.2-.5.2s-.3-.1-.4-.2L3.3 6.6c-.2-.2-.3-.4-.2-.7.1-.2.3-.4.6-.4h2.5V1.2c0-.2.1-.3.2-.4s.3-.2.4-.2h2.5c.2 0 .3.1.4.2s.2.3.2.4v4.3h2.5c.2 0 .4.2.5.4zm-.8 8.1c.1-.1.2-.3.2-.4 0-.2-.1-.3-.2-.4-.1-.1-.3-.2-.4-.2-.2 0-.3.1-.4.2s-.2.3-.2.4c0 .2.1.3.2.4s.3.2.4.2c.2 0 .3-.1.4-.2zm2.5 0c.1-.1.2-.3.2-.4 0-.2-.1-.3-.2-.4-.1-.1-.3-.2-.4-.2s-.3.1-.4.2c-.1.1-.2.3-.2.4 0 .2.1.3.2.4.1.1.3.2.4.2.1 0 .3-.1.4-.2z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

var _default = DownloadFilled;
exports["default"] = _default;