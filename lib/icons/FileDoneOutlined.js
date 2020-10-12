"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../components/Icon"));

function FileDoneOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M12.27 16H3.73a2.64 2.64 0 01-2.66-2.67V4.8L5.76 0h6.51a2.64 2.64 0 012.66 2.67v10.66A2.64 2.64 0 0112.27 16zM2.13 5.23v8.1a1.64 1.64 0 001.6 1.6h8.54a1.64 1.64 0 001.6-1.6V2.67a1.64 1.64 0 00-1.6-1.6H6.19z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M4.48 5.33H1.92V4.27h2.56a.84.84 0 00.85-.86V.53H6.4v2.88a1.91 1.91 0 01-1.92 1.92zm2.24 6a.63.63 0 01-.43-.11L4.16 8.85a.53.53 0 01.75-.74l2.24 2.24a.51.51 0 010 .74.57.57 0 01-.43.22z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M6.72 11.31a.63.63 0 01-.43-.11.53.53 0 010-.75l4.59-4.58a.53.53 0 01.75.74l-4.48 4.48a.57.57 0 01-.43.22z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

var _default = FileDoneOutlined;
exports["default"] = _default;