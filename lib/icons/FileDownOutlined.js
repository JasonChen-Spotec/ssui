"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function FileDownOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M12.9 16H2.6c-1.2 0-2.1-.8-2.1-1.8V4.6c0-.5.2-.9.7-1.3L4.3.6c.6-.4 1-.6 1.5-.6h7.4c1.2 0 2.1.8 2.1 1.8v12.4c0 1.1-1.4 1.8-2.4 1.8zM5.8.9c-.1 0-.5.1-.8.3L1.9 3.9c-.3.2-.4.5-.4.7v9.6c0 .5.5 1 1.1 1h10.3c.6 0 1.4-.5 1.4-1V1.8c0-.5-.5-1-1.1-1-.1.1-7.4.1-7.4.1z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M7.9 12.4c-.1 0-.3 0-.4-.1l-1.9-1.9c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l1.9 1.9c.2.2.2.5 0 .7 0 .1-.2.1-.3.1z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M7.9 12.4c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l1.9-1.9c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-1.9 1.9c0 .1-.2.1-.3.1z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M7.9 11.5c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5s.5.2.5.5v6c0 .3-.2.5-.5.5z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

FileDownOutlined.displayName = "FileDownOutlined";
var _default = FileDownOutlined;
exports["default"] = _default;