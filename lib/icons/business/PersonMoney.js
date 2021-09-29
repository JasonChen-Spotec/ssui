"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function PersonMoney(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      id: "person-money_svg__\\u56FE\\u5C42_1",
      xmlns: "http://www.w3.org/2000/svg",
      x: 0,
      y: 0,
      viewBox: "0 0 16 16",
      xmlSpace: "preserve"
    }, props), /*#__PURE__*/React.createElement("style", null, ".person-money_svg__st0{fill:#ef6f53}.person-money_svg__st1{fill:#285a83}"), /*#__PURE__*/React.createElement("path", {
      className: "person-money_svg__st0",
      d: "M9 12.8c0-.9-1.4-.8-1.4-1.2 0-.2.2-.3.4-.3.3 0 .5.1.7.3l.3-.4c-.2-.2-.4-.3-.8-.4v-.5h-.3v.5c-.5.1-.8.3-.8.7 0 .8 1.4.8 1.4 1.2 0 .2-.2.3-.5.3s-.6-.1-.9-.3l-.2.4c.2.2.6.3.9.4v.5h.4v-.5c.5 0 .8-.3.8-.7zM5.3 11.7c0-.6-1-.5-1-.8 0-.1.1-.2.3-.2.2 0 .3.1.5.2l.2-.2c-.1-.1-.3-.2-.5-.3v-.3h-.3v.3c-.3 0-.5.2-.5.5 0 .6 1 .5 1 .8 0 .1-.1.2-.3.2-.2 0-.4-.1-.6-.2l-.2.3c.2.1.4.2.6.2v.4h.2v-.4c.4 0 .6-.2.6-.5zM12.1 11.7c0-.6-1-.5-1-.8 0-.1.1-.2.3-.2.2 0 .3.1.5.2l.2-.2c-.1-.1-.3-.2-.5-.3v-.3h-.2v.3c-.3 0-.5.2-.5.5 0 .6 1 .5 1 .8 0 .1-.1.2-.3.2-.2 0-.4-.1-.6-.2l-.3.3c.2.1.4.2.6.2v.4h.2v-.4c.3 0 .6-.2.6-.5z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "person-money_svg__st1",
      d: "M9.6 6.6l-1 1.5-.5-1.2.4-.4H7.4l.4.4-.4 1.2-1-1.5c-1.3.2-2.2 1.3-2.2 2.6 0 .1.1.2.2.2h7.1c.1 0 .2-.1.2-.2.1-1.3-.8-2.4-2.1-2.6zM4.6 4.4c0 .8-.4 2.1-1.4 2.1S1.8 5.2 1.8 4.4 2.5 3 3.2 3s1.4.6 1.4 1.4zM3.4 9.2c0-.4.1-.7.2-1.1l-.2-.8.4-.4h-1l.4.4-.3 1L1.8 7C.8 7.2 0 8.1 0 9.2c0 .1.1.2.2.2h3.5c-.2 0-.3-.1-.3-.2zM11.4 4.4c0 .8.4 2.1 1.4 2.1s1.4-1.3 1.4-2.1S13.5 3 12.8 3s-1.4.6-1.4 1.4zM6.3 3.6C6.3 4.5 6.8 6 8 6s1.7-1.5 1.7-2.4S8.9 1.9 8 1.9s-1.7.8-1.7 1.7zM12.6 9.2c0-.4-.1-.7-.2-1.1l.3-.8-.4-.4h1l-.4.4.3 1 1-1.3c1 .2 1.8 1.1 1.8 2.2 0 .1-.1.2-.2.2h-3.5c.2 0 .3-.1.3-.2z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

PersonMoney.displayName = "PersonMoney";
var _default = PersonMoney;
exports["default"] = _default;