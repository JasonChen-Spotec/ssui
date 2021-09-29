"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function PiggyBank(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M16 10.1c0-.1-.1-.3-.3-.3-.1 0-.3.1-.3.3 0 .1-.1.1-.1.1-.3 0-.5-.2-.5-.5V8.4c0-.5-.4-.9-.9-.9h-.4c-.1-.3-.3-.7-.5-1-.1-.1-.2-.1-.3 0-.4.4-1.7 1.2-3.6.7C7.8 6.8 7.2 5.4 7 4.8c0-.2-.2-.3-.3-.2-.4.1-1.2.3-2 .9-.2.2-.6.2-.8 0-.1-.2-.2-.3-.3-.4-.1-.2-.5-.2-.6.1-.2.4-.6 1.3-1 3 0 0-.5 1.3-1.1 1.1-.6-.2-.9-.2-.9.1 0 .3.3 2 .3 2h.2c.3 0 .6.1.8.3.5.4 1.4 1.1 2.5 1.4.3.1.5.3.5.5l.4 1.2c0 .1.2.2.3.2h.4c.1 0 .3-.1.3-.2l.4-1.3c.1-.2.2-.3.4-.2.5.1 1.4.3 2.6 0 .2 0 .4.1.4.2l.5 1.4c0 .1.2.2.3.2h.3c.1 0 .2-.1.3-.2l.7-1.4c.1-.3.4-.5.7-.7.4-.2 1.1-.8 1.4-1.9.2-1 .2-1.9 0-2.7h.2c.2 0 .3.2.3.3v1.3c0 .6.5 1 1 1 .5-.1.8-.3.8-.7zM3.8 9.2c-.4 0-.6-.3-.6-.6s.3-.6.6-.6.6.3.6.6-.3.6-.6.6z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.4 1.4C8.9 1.4 7.7 2.5 7.7 4s1.2 2.6 2.6 2.6S13 5.5 13 4s-1.1-2.6-2.6-2.6zm.2 4.1v.6h-.4v-.6c-.4 0-.8-.2-1-.4l.3-.4c.3.2.6.3 1 .3.3 0 .5-.1.5-.3 0-.6-1.6-.5-1.6-1.4 0-.5.3-.8.9-.8v-.6h.4v.5c.4 0 .6.2.9.4l-.3.4c-.2-.2-.4-.3-.8-.3-.3 0-.5.1-.5.3 0 .5 1.6.4 1.6 1.4 0 .5-.4.8-1 .9z",
      fill: "#ef6f53"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

PiggyBank.displayName = "PiggyBank";
var _default = PiggyBank;
exports["default"] = _default;