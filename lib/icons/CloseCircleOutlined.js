"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function CloseCircleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.9c-3.8 0-6.9-3.1-6.9-6.9 0-3.8 3.1-6.9 6.9-6.9 3.8 0 6.9 3.1 6.9 6.9 0 3.8-3.1 6.9-6.9 6.9z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.7 5.3c-.2-.3-.5-.3-.8 0L8 7.2 6.1 5.3c-.3-.3-.6-.3-.8 0-.3.2-.3.5 0 .8L7.2 8 5.3 9.9c-.3.3-.3.5 0 .8.3.3.5.3.8 0L8 8.8l1.9 1.9c.3.3.5.3.8 0 .3-.3.3-.5 0-.8L8.8 8l1.9-1.9c.3-.3.3-.6 0-.8z"
    })));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CloseCircleOutlined.displayName = "CloseCircleOutlined";
var _default = CloseCircleOutlined;
exports["default"] = _default;