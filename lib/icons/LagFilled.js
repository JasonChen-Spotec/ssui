"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function LagFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M1.2 11.5C.4 10.4 0 9.1 0 7.8 0 3.9 3.6.7 8 .7s8 3.2 8 7.1-3.6 7.1-8 7.1c-1.2 0-2.4-.2-3.5-.7l-3.4 1.1c-.2.1-.5 0-.7-.2s-.2-.4-.2-.7l1-2.9z",
      fill: "inherit"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      className: "lag-filled_svg__st0",
      d: "M11 10.7c0-.2-.1-.4-.1-.4l-.1-.3-1.9-5.1c-.2-.5-.6-.8-1.1-.8s-.8.3-1.1.9l-1.9 5.1-.1.3s-.2.6.5.9h.3c.3 0 .6-.2.7-.5l.3-.9h2.7l.4.9c.1.3.3.5.7.5.3 0 .6-.1.7-.4v-.2zM6.9 8.6l.9-2.9 1 2.9H6.9z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

LagFilled.displayName = "LagFilled";
var _default = LagFilled;
exports["default"] = _default;