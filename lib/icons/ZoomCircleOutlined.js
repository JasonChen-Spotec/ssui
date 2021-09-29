"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ZoomCircleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 1a7 7 0 11-7 7 7 7 0 017-7m0-1a8 8 0 108 8 8 8 0 00-8-8z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M12.12 3.5a.36.36 0 01.37.36v3a.38.38 0 01-.75 0V4.77l-2.32 2.4a.49.49 0 01-.3.07.46.46 0 01-.3-.07.78.78 0 010-.6l2.4-2.32h-2.1a.36.36 0 01-.38-.38.35.35 0 01.38-.37zM7.17 8.82c-.15-.08-.45-.15-.6 0l-2.32 2.39V9.12a.36.36 0 00-.38-.38.35.35 0 00-.37.38v3a.37.37 0 00.36.37h3a.38.38 0 000-.75H4.77l2.4-2.32a.88.88 0 000-.6zm.07-4.95a.35.35 0 00-.37-.37h-3a.36.36 0 00-.36.36v3a.35.35 0 00.37.37.35.35 0 00.38-.37V4.77l2.31 2.32a.3.3 0 00.3.15.49.49 0 00.3-.07.88.88 0 000-.6l-2.4-2.32h2.1a.35.35 0 00.37-.38zm4.87 4.87a.35.35 0 00-.37.38v2.09L9.42 8.89a.46.46 0 00-.6 0 .62.62 0 000 .53l2.32 2.32h-2a.38.38 0 100 .75h3a.37.37 0 00.37-.37v-3a.36.36 0 00-.4-.38z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

ZoomCircleOutlined.displayName = "ZoomCircleOutlined";
var _default = ZoomCircleOutlined;
exports["default"] = _default;