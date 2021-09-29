"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function AllocationOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M15.7 5.4l-4-4.5c-.2-.2-.5-.4-.7-.4-.3 0-.6.1-.7.4-.2.2-.3.5-.3.7v1.9H8.5c-.3 0-.5.2-.5.5s.2.5.5.5h2c.3 0 .5-.2.5-.5V1.6v-.1L15 6v.2l-4 4.5V8c0-.3-.2-.5-.5-.5H6V5.4c0-.6-.5-1.1-1-1.1-.3 0-.6.1-.7.3l-4 4.6c-.4.4-.4 1.1 0 1.5l3.9 4.4c.2.2.5.4.7.4.3 0 .6-.1.8-.4.2-.2.3-.5.3-.7v-1.9h1.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5v2.5L1 10v-.2l4-4.4V8c0 .3.2.5.5.5H10v2.1c0 .6.5 1.1 1 1.1.3 0 .6-.1.7-.3l4-4.5c.4-.5.4-1.1 0-1.5z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

AllocationOutlined.displayName = "AllocationOutlined";
var _default = AllocationOutlined;
exports["default"] = _default;