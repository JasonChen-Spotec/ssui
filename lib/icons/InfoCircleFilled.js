"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function InfoCircleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM8 3.5c-.5 0-1 .4-1 1s.4 1 1 1 1-.4 1-1c0-.5-.4-1-1-1zm1 3.9c0-.4-.4-.8-.8-.8h-.4c-.4 0-.8.4-.8.8v4.7c0 .4.3.8.8.8h.4c.4 0 .8-.3.8-.8V7.4z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

InfoCircleFilled.displayName = "InfoCircleFilled";
var _default = InfoCircleFilled;
exports["default"] = _default;