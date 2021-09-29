"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TvMoney(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      id: "tv-money_svg__\\u56FE\\u5C42_1",
      xmlns: "http://www.w3.org/2000/svg",
      x: 0,
      y: 0,
      viewBox: "0 0 16 16",
      xmlSpace: "preserve"
    }, props), /*#__PURE__*/React.createElement("style", null, ".tv-money_svg__st0{fill:#285a83}.tv-money_svg__st1{fill:#ef6f53}"), /*#__PURE__*/React.createElement("path", {
      className: "tv-money_svg__st0",
      d: "M14.4 11.3H1.6c-.9 0-1.6-.7-1.6-1.6V2.1C0 1.2.7.5 1.6.5h12.8c.9 0 1.6.7 1.6 1.6v7.6c0 .9-.7 1.6-1.6 1.6zM1.6 1.4c-.4 0-.7.3-.7.7v7.6c0 .4.3.7.7.7h12.8c.4 0 .7-.3.7-.7V2.1c0-.4-.3-.7-.7-.7H1.6zM15.5 13.4H.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h15.1c.3 0 .5.2.5.5-.1.3-.3.5-.6.5zM15.5 15.4H.5c-.3 0-.5-.2-.5-.4 0-.3.2-.5.5-.5h15.1c.3 0 .5.2.5.5-.1.2-.3.4-.6.4z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "tv-money_svg__st1",
      d: "M8.7 8.8H6.2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7H7.3c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h2.5c.3 0 .5.2.5.5s-.2.5-.5.5H7.3c-.4 0-.7.3-.7.7V5c0 .4.3.7.7.7h1.4c.9 0 1.6.7 1.6 1.6s-.7 1.5-1.6 1.5z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "tv-money_svg__st1",
      d: "M8.1 3.9c-.3 0-.5-.2-.5-.5v-1c0-.2.2-.4.5-.4s.5.2.5.5v1c-.1.2-.3.4-.5.4zM8.1 9.9c-.3 0-.5-.2-.5-.5V8.3c0-.3.2-.5.5-.5s.4.2.4.5v1.2c0 .2-.2.4-.4.4z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

TvMoney.displayName = "TvMoney";
var _default = TvMoney;
exports["default"] = _default;