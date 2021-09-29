"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function KeyOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M15.9 5.1c0 1.4-.5 2.6-1.5 3.6-1 .9-2.1 1.4-3.3 1.5-1.2.1-2.4-.2-3.4-1l-6.6 6.6c-.2.1-.3.2-.5.2s-.3-.1-.4-.2c-.2-.2-.2-.3-.2-.5 0-.1 0-.3.2-.4l6.6-6.6C6 7.2 5.6 6.1 5.7 4.8s.6-2.4 1.5-3.3C8.2.5 9.5 0 10.8 0s2.6.5 3.6 1.5c1 1.1 1.5 2.3 1.5 3.6zM4.7 14.8c.1.1.2.3.2.5s-.1.3-.2.4c-.1.1-.3.2-.5.2s-.3-.1-.5-.2l-1.4-1.3.9-.9 1.5 1.3zm.3-3.1L6.4 13c.1.1.2.3.2.5s-.1.4-.2.5c-.1.1-.3.2-.5.2s-.3-.1-.5-.2l-1.3-1.4.9-.9zm8.5-9.3c-.8-.7-1.7-1.1-2.7-1.1s-1.9.3-2.7 1.1c-.8.8-1.2 1.7-1.2 2.7S7.3 7 8 7.8c.8.8 1.8 1.2 2.8 1.2s1.9-.4 2.7-1.1c.7-.8 1.1-1.7 1.1-2.7 0-1.1-.3-2-1.1-2.8z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

KeyOutlined.displayName = "KeyOutlined";
var _default = KeyOutlined;
exports["default"] = _default;