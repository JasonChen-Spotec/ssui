"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function FileTextCircleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 8,
      cy: 8,
      r: 8
    }), /*#__PURE__*/React.createElement("path", {
      fill: "inherit",
      d: "M10.34 4.08H5.66a.68.68 0 00-.66.67v6.5a.68.68 0 00.68.67h2.73a.35.35 0 00.36-.34v-1a.72.72 0 01.72-.71h1.15a.36.36 0 00.36-.38V4.75a.68.68 0 00-.66-.67zm-.48 2.61H6.14a.26.26 0 110-.51h3.72a.26.26 0 110 .51zm0-1.08H6.14a.26.26 0 110-.51h3.72a.26.26 0 110 .51z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "inherit",
      d: "M9.18 10.82v.8a.3.3 0 00.51.22l1.13-1.13a.3.3 0 00-.22-.51h-.8a.62.62 0 00-.62.62z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

FileTextCircleFilled.displayName = "FileTextCircleFilled";
var _default = FileTextCircleFilled;
exports["default"] = _default;