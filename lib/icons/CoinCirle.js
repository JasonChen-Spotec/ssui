"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function CoinCirle(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 9.9c-2 0-3.7-.6-3.7-1.7v1c0 1 1.7 1.9 3.7 1.9s3.7-.8 3.7-1.9v-1c0 1-1.7 1.7-3.7 1.7zm0 1.8c-2 0-3.7-.6-3.7-1.7v1c0 1 1.7 1.9 3.7 1.9s3.7-.8 3.7-1.9v-1c0 1.1-1.7 1.7-3.7 1.7zM8 8c-2 0-3.7-.6-3.7-1.7v1c0 1 1.7 1.9 3.7 1.9s3.7-.8 3.7-1.9v-1C11.7 7.4 10 8 8 8zm0-4.9c-2 0-3.7.8-3.7 1.9v.6c0 1 1.7 1.9 3.7 1.9s3.7-.8 3.7-1.9v-.7c0-1-1.7-1.8-3.7-1.8z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 .8c4 0 7.3 3.3 7.3 7.2S12 15.3 8 15.3.7 12 .7 8 4 .8 8 .8M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CoinCirle.displayName = "CoinCirle";
var _default = CoinCirle;
exports["default"] = _default;