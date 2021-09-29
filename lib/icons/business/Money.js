"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Money(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M13.6 0H2.4C1.5 0 .8.7.8 1.5v8.8c0 .7.4 1.4 1 1.8l5.6 3.7c.4.3 1 .3 1.4 0l5.6-3.7c.6-.4 1-1.1 1-1.8V1.5C15.2.7 14.5 0 13.6 0zM2.4 1h11.2c.4 0 .7.3.7.6v1.2H1.7V1.5c0-.3.3-.5.7-.5zm11.3 10.3l-5.2 3.5c-.3.2-.7.2-1 0l-5.2-3.5c-.3-.2-.6-.6-.6-1V3.7h12.5v6.6c.1.4-.1.7-.5 1z",
      fill: "#285a83"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8.7 8.1H7.2c-.4 0-.7-.3-.7-.6v-.1c0-.3.3-.6.7-.6h2.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H8.5v-.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v.6h-.3c-.9 0-1.6.7-1.6 1.6v.1c0 .8.7 1.5 1.6 1.5h1.4c.4 0 .8.3.8.6s-.4.6-.7.6H6.1c-.3 0-.5.2-.5.5s.2.5.5.5h1.5v.7c0 .3.2.5.5.5s.5-.2.5-.5v-.7h.2c.9 0 1.6-.7 1.6-1.6-.1-.8-.8-1.5-1.7-1.5z",
      fill: "#ef6f53"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

Money.displayName = "Money";
var _default = Money;
exports["default"] = _default;