"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function MBalance(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      id: "m-balance_svg__\\u56FE\\u5C42_1",
      xmlns: "http://www.w3.org/2000/svg",
      x: 0,
      y: 0,
      viewBox: "0 0 16 16",
      xmlSpace: "preserve"
    }, props), /*#__PURE__*/React.createElement("style", null, ".m-balance_svg__st0{fill:#285a83}.m-balance_svg__st1{fill:#ef6f53}"), /*#__PURE__*/React.createElement("path", {
      className: "m-balance_svg__st0",
      d: "M14.8 8.4h-3.9c-.2 0-.4-.2-.4-.4s.2-.4.4-.4h3.9c.2 0 .4.2.4.4s-.2.4-.4.4zM5.5 9.8H1.6c-.2 0-.4-.2-.4-.4s.2-.4.4-.4h3.9c.2 0 .4.2.4.4s-.2.4-.4.4z"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "rotate(-8.251 11.126 2.801)",
      className: "m-balance_svg__st0",
      d: "M9.4 2.4h3.5v.9H9.4z"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "rotate(-8.251 4.96 3.696)",
      className: "m-balance_svg__st0",
      d: "M3.4 3.3h3.2v.9H3.4z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "m-balance_svg__st0",
      d: "M15.6 14.3H.4c-.2 0-.4-.2-.4-.4s.2-.4.4-.4h15.1c.2 0 .4.2.4.4.1.2-.1.4-.3.4zM7.6 4.8h.9v8.7h-.9z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "m-balance_svg__st1",
      d: "M12.9 10.5c-1.3 0-2.4-1.1-2.4-2.4 0-.2 0-.5.1-.7l1.9-5.1c.1-.2.2-.3.4-.3s.3.1.4.3l1.8 5c.1.3.1.5.1.8 0 1.4-1 2.4-2.3 2.4zm0-6.7l-1.5 4c0 .1-.1.3-.1.4 0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.2 0-.3-.1-.5l-1.3-3.9zM3.5 11.9c-1.3 0-2.4-1.1-2.4-2.4 0-.2 0-.5.1-.7l1.9-5.1c.1-.2.2-.3.4-.3s.3.1.4.3l1.8 5c.2.3.2.6.2.8 0 1.3-1 2.4-2.4 2.4zm.1-6.7l-1.5 4c0 .1-.1.2-.1.3 0 .9.7 1.5 1.5 1.5S5 10.3 5 9.5c0-.2 0-.3-.1-.5L3.6 5.2z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "m-balance_svg__st0",
      d: "M8 5.2c-1 0-1.9-.8-1.9-1.9S7 1.5 8 1.5s1.9.8 1.9 1.9S9 5.2 8 5.2zm0-2.9c-.5 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.5-1-1-1z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

MBalance.displayName = "MBalance";
var _default = MBalance;
exports["default"] = _default;