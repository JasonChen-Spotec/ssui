"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ShrinkFilled(componentProps) {
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
      d: "M9.18 7.09a.33.33 0 00.23.09H12a.36.36 0 100-.72h-1.77l2.18-2.36a.37.37 0 000-.51.37.37 0 00-.51 0L9.79 5.9V4.23a.37.37 0 00-.37-.36.36.36 0 00-.36.36v2.6a.35.35 0 00.12.26zm-3.41-.61H4a.36.36 0 00-.36.36.35.35 0 00.36.35h2.57a.31.31 0 00.25-.1.38.38 0 00.12-.27V4.23a.36.36 0 00-.36-.36.36.36 0 00-.36.36V5.9l-2.1-2.28a.35.35 0 10-.53.47l2.18 2.39zm1.32 2.7a.37.37 0 00-.26-.12h-2.6a.36.36 0 00-.36.36.36.36 0 00.36.36H5.9l-2.29 2.1a.37.37 0 000 .51.36.36 0 00.5 0l2.38-2.18V12a.36.36 0 00.72 0V9.43a.33.33 0 00-.09-.23zm5.3 2.7L10.1 9.79h1.67a.37.37 0 00.36-.37.36.36 0 00-.36-.36h-2.6a.35.35 0 00-.28.14.33.33 0 00-.09.23V12a.36.36 0 00.36.36.36.36 0 00.36-.36v-1.77l2.38 2.18a.36.36 0 00.49-.53z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

ShrinkFilled.displayName = "ShrinkFilled";
var _default = ShrinkFilled;
exports["default"] = _default;