"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SafeMoney(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      id: "safe-money_svg__\\u56FE\\u5C42_1",
      xmlns: "http://www.w3.org/2000/svg",
      x: 0,
      y: 0,
      viewBox: "0 0 16 16",
      xmlSpace: "preserve"
    }, props), /*#__PURE__*/React.createElement("style", null, ".safe-money_svg__st0{fill:#ef6f53}.safe-money_svg__st1{fill:#285a83}"), /*#__PURE__*/React.createElement("path", {
      className: "safe-money_svg__st0",
      d: "M8.6 12.5H6.4c-.2 0-.4-.2-.4-.4s.2-.4.4-.4h2.3c.3 0 .6-.3.6-.6s-.3-.7-.7-.7H7.4C6.6 10.4 6 9.8 6 9v-.1c0-.8.6-1.4 1.4-1.4h2.3c.2 0 .4.2.4.4s-.2.4-.4.4H7.4c-.4 0-.6.3-.6.6V9c0 .3.3.6.6.6h1.2c.8 0 1.4.6 1.4 1.4s-.6 1.5-1.4 1.5z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "safe-money_svg__st0",
      d: "M8 8.2c-.2 0-.4-.2-.4-.5v-.9c0-.2.2-.4.4-.4s.4.2.4.4v.9c.1.3-.1.5-.4.5zM8 13.5c-.2 0-.4-.2-.4-.4V12c0-.2.2-.4.4-.4s.4.2.4.4v1.1c.1.3-.1.4-.4.4z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "safe-money_svg__st1",
      d: "M13.8 5.1H2.2c-.8 0-1.4.6-1.4 1.4v6.8c0 .8.6 1.4 1.4 1.4h11.5c.8 0 1.4-.6 1.4-1.4V6.5c.1-.8-.6-1.4-1.3-1.4zm.6 8.2c0 .3-.3.6-.6.6H2.2c-.3 0-.6-.3-.6-.6V6.5c0-.3.3-.6.6-.6h11.5c.3 0 .6.3.6.6v6.8zM15.7 3.9l-7-2.5c-.4-.2-1-.2-1.4 0l-7 2.5c-.2.1-.4.3-.3.5.1.2.2.3.4.3h.1l7-2.5c.3-.1.6-.1.8 0l7 2.5c.2.1.4 0 .5-.2.3-.3.1-.5-.1-.6z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

SafeMoney.displayName = "SafeMoney";
var _default = SafeMoney;
exports["default"] = _default;