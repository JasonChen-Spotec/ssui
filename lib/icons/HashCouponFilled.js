"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function HashCouponFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M13.6 11.5c.2.2.6.2.8 0l1.4-1.4c.2-.2.2-.6 0-.8L6.7.2c-.2-.2-.6-.2-.8 0L4.6 1.5c-.2.2-.2.6 0 .8.5.7.5 1.7-.1 2.3-.6.5-1.5.5-2.1 0-.2-.2-.6-.2-.8 0L.2 5.9c-.2.2-.2.6 0 .8l9.1 9.1c.2.2.6.2.8 0l1.4-1.4c.2-.2.2-.6 0-.8-.6-.6-.7-1.6-.1-2.2.6-.6 1.5-.6 2.2.1 0-.1 0-.1 0 0zM10.2 7c.3 0 .6.3.6.6v.8c0 .3-.3.6-.6.6s-.5-.3-.6-.6v-.8c0-.3.2-.6.6-.6zM5.9 9c-.2 0-.4-.1-.5-.2-.1-.1-.1-.2-.1-.4v-.8c0-.3.3-.6.6-.6s.5.3.6.6v.8c-.1.3-.3.6-.6.6zM8 11.8c-.2 0-.3-.1-.4-.2-.1-.1-.2-.3-.2-.4V4.8c0-.3.3-.6.6-.6s.6.3.6.6v6.4c0 .3-.3.6-.6.6z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

HashCouponFilled.displayName = "HashCouponFilled";
var _default = HashCouponFilled;
exports["default"] = _default;