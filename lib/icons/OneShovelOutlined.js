"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function OneShovelOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M15.58 3.44l-3-3a1.4 1.4 0 00-1-.41 1.42 1.42 0 00-1 .41l-.13.13a1.39 1.39 0 000 2l.45.43L6 7.92 4.3 6.25a.63.63 0 00-.46-.19.61.61 0 00-.45.19L1.32 8.32a4.48 4.48 0 006.34 6.34l2.07-2.07a.65.65 0 000-.91L8.07 10 13 5.09l.47.46a1.4 1.4 0 002 0l.13-.13a1.39 1.39 0 00-.02-1.98zm-3.43.8L6.38 10l.52.52.12.12.2.2 1.27 1.27-1.68 1.7a3.29 3.29 0 01-4.65-4.65l1.68-1.68 1.29 1.28-1.3 1.3a.65.65 0 00-.16.4.62.62 0 00.62.62.65.65 0 00.4-.16l7.08-7.14.41.41zm2.59.34l-.13.13a.21.21 0 01-.15.06.19.19 0 01-.14-.06l-3-3a.21.21 0 01-.06-.15.19.19 0 01.06-.14l.13-.13a.19.19 0 01.14-.06.21.21 0 01.15.06l3 3a.19.19 0 01.06.14.21.21 0 01-.06.15z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

OneShovelOutlined.displayName = "OneShovelOutlined";
var _default = OneShovelOutlined;
exports["default"] = _default;