"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function DashboardOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      "data-name": "\\u56FE\\u5C42 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M12.08 14.77a.6.6 0 01-.5-.27.61.61 0 01.17-.83A6.77 6.77 0 0014.8 8a6.88 6.88 0 00-.21-1.7A6.81 6.81 0 008 1.2a6.56 6.56 0 00-2 .31 6.8 6.8 0 00-1.75 12.16.6.6 0 11-.67 1A8 8 0 1115.75 6 7.89 7.89 0 0116 8a8 8 0 01-3.58 6.67.61.61 0 01-.34.1z"
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 8.04,
      cy: 8.01,
      r: 0.97
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M10.77 12.58a.6.6 0 01-.34-1.1 4.41 4.41 0 002-3.68 4.54 4.54 0 00-.14-1.1 4.41 4.41 0 10-6.7 4.78.6.6 0 11-.67 1 5.62 5.62 0 011.43-10A5.87 5.87 0 018 2.19a5.61 5.61 0 015.43 4.21 5.49 5.49 0 01.18 1.4 5.6 5.6 0 01-2.51 4.68.6.6 0 01-.33.1z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M7.53 7.18l2.65-1.45c.21-.13.42 0 .27.29L8.93 8.39z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

DashboardOutlined.displayName = "DashboardOutlined";
var _default = DashboardOutlined;
exports["default"] = _default;