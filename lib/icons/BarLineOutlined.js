"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function BarLineOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15.9.5c0-.1 0-.1 0 0-.1-.1-.1-.1 0 0-.1-.1-.3-.2-.4-.2H13c-.3 0-.5.2-.5.5s.2.5.5.5h1L8 6.5 4 5h-.2c-.1 0-.3.1-.4.2L.1 8.9c-.2.3-.1.6.1.8.2.2.6.2.7-.1l3-3.5 3.9 1.5H8c.1 0 .2-.1.3-.2L14.9 2v1.3c0 .3.2.5.5.5s.6-.3.6-.6V.8c0-.1-.1-.3-.1-.3zM1.1 15.6c-.4 0-.6-.3-.6-.6v-4c0-.4.3-.6.6-.6.4 0 .6.3.6.6v4c0 .3-.3.6-.6.6z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4.6 15.6c-.4 0-.6-.3-.6-.6V9c0-.4.3-.6.6-.6.4 0 .6.3.6.6v6c0 .3-.3.6-.6.6zM8.1 15.6c-.4 0-.6-.3-.6-.6v-4.3c0-.4.3-.6.6-.6.4 0 .6.3.6.6V15c0 .3-.3.6-.6.6zM11.6 15.6c-.4 0-.6-.3-.6-.6V8.5c0-.4.3-.6.6-.6.4 0 .6.3.6.6V15c0 .3-.3.6-.6.6zM15 15.6c-.4 0-.6-.3-.6-.6V6.4c0-.4.3-.6.6-.6.4 0 .6.3.6.6V15c0 .3-.3.6-.6.6z"
    })));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

BarLineOutlined.displayName = "BarLineOutlined";
var _default = BarLineOutlined;
exports["default"] = _default;