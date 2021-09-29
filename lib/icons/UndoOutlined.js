"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function UndoOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8.2 14.1c0-.4.3-.7.7-.7 1.5.1 2.9-.5 3.9-1.5 1.1-1 1.7-2.4 1.7-3.8.1-1.5-.5-2.9-1.5-3.9-1-1.1-2.4-1.7-3.8-1.7S6.5 3 5.4 4C4.3 5 3.7 6.3 3.6 7.8l1.6-1.1c.3-.2.7-.1 1 .2.1.1.1.2.1.4s-.1.4-.3.5l-2.9 2c-.3.2-.7.1-1-.2l-2-2.8c-.2-.4-.1-.8.2-1 .3-.2.7-.1.9.2l1.1 1.5c.1-.8.3-1.6.6-2.3.4-.9.9-1.6 1.6-2.2s1.4-1.1 2.2-1.4c.9-.3 1.8-.5 2.7-.4.9 0 1.8.2 2.6.6.8.4 1.5.9 2.1 1.5s1.1 1.4 1.4 2.2c.4.9.5 1.8.5 2.7 0 .9-.2 1.8-.6 2.6-.4.8-.9 1.5-1.5 2.1s-1.4 1.1-2.2 1.4c-.9.3-1.8.5-2.7.4-.5.1-.8-.2-.8-.6z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

UndoOutlined.displayName = "UndoOutlined";
var _default = UndoOutlined;
exports["default"] = _default;