"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function DragOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M7.4 15.8L5 13.4c-.4-.3-.4-.8-.1-1.2.3-.4.8-.4 1.2-.1l.1.1.9.9v-2.6c0-.5.4-.8.8-.9.5 0 .8.4.9.8V13l1-.9c.3-.3.9-.3 1.2 0 .3.3.3.9 0 1.2l-2.4 2.4c-.2.2-.4.3-.6.3-.2 0-.4-.1-.6-.2zm4.8-4.8c-.3-.3-.3-.9 0-1.2l.9-.9h-2.6c-.5 0-.8-.5-.8-.9s.4-.7.8-.8h2.6l-.9-1c-.4-.3-.4-.8-.1-1.2.3-.4.8-.4 1.2-.1l.1.1 2.4 2.4c.3.3.3.9 0 1.2L13.4 11c-.4.3-.9.3-1.2 0zm-9.5 0L.2 8.6c-.3-.3-.3-.9 0-1.2L2.7 5c.3-.4.8-.5 1.2-.2s.4.8.1 1.2c0 .1-.1.1-.2.2l-.9 1h2.6c.5 0 .8.5.8.9s-.4.7-.8.8H2.9l.9.9c.4.2.5.8.3 1.2-.3.4-.8.5-1.2.2-.1-.1-.2-.1-.2-.2zm4.5-5.5V2.9l-1 .9c-.3.4-.9.4-1.2 0-.3-.3-.3-.8 0-1.1L7.4.3c.2-.2.4-.3.6-.3.2 0 .4.1.6.2L11 2.7c.4.3.4.8.1 1.2-.3.3-.9.4-1.2.1l-.1-.1-.9-1v2.6c0 .5-.4.8-.9.8-.5-.1-.8-.4-.8-.8z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

DragOutlined.displayName = "DragOutlined";
var _default = DragOutlined;
exports["default"] = _default;