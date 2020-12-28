"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function CircleCancelOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm6.5 8c0 1.5-.5 2.9-1.4 4L4 2.9C5.1 2 6.5 1.5 8 1.5c3.6 0 6.5 2.9 6.5 6.5zm-13 0c0-1.5.5-2.9 1.4-4l9.1 9.1c-1.1.9-2.5 1.4-4 1.4-3.6 0-6.5-2.9-6.5-6.5z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CircleCancelOutlined.displayName = "CircleCancelOutlined";
var _default = CircleCancelOutlined;
exports["default"] = _default;