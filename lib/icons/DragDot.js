"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function DragDot(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 4.8,
      cy: 8,
      r: 1.6
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 11.2,
      cy: 8,
      r: 1.6
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 4.8,
      cy: 14.4,
      r: 1.6
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 11.2,
      cy: 14.4,
      r: 1.6
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 4.8,
      cy: 1.6,
      r: 1.6
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 11.2,
      cy: 1.6,
      r: 1.6
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

DragDot.displayName = "DragDot";
var _default = DragDot;
exports["default"] = _default;