"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function AgreementMoney(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M9.6 3.6c0-1.3-2.1-1.2-2.1-1.8 0-.3.2-.4.6-.4.4 0 .7.1 1 .4l.4-.5C9.3.9 8.9.7 8.4.7V0h-.5v.7c-.7.1-1.2.5-1.2 1.1 0 1.3 2.1 1.1 2.1 1.8 0 .3-.2.5-.7.5-.5 0-.9-.2-1.3-.5l-.2.6c.3.3.9.5 1.3.5v.8h.6v-.8c.7-.1 1.1-.5 1.1-1.1z",
      fill: "#ef6f53"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M2.9 2.9c0 .6.3 1.6 1.1 1.6s1-1 1-1.6-.4-1.1-1-1.1-1.1.5-1.1 1.1zM11.1 2.9c0 .6.3 1.6 1.1 1.6s1.1-1 1.1-1.6-.5-1.1-1.1-1.1-1.1.5-1.1 1.1zM13.3 5l-.7 1.1-.3-.8.3-.3h-.7l.3.3-.3.8-.8-1.1h-.3C10.1 5 9.4 6 8 8.2 6.6 6.1 5.9 5 5.2 5H2.9c-.6 0-1.2.6-1.2 1.2v3.5c0 .1 0 .2.1.3l.4.4c.1.1.2.3.2.5l.2 4.8c0 .2.2.3.3.3h.3c.2 0 .3-.1.3-.3l.4-4.8c0-.1.1-.1.1-.1.1 0 .1.1.1.1l.3 4.8c0 .2.2.3.3.3H5c.2 0 .3-.1.3-.3l.3-8.2L8 9.2l2.2-1.8.3 8.2c0 .2.2.3.3.3h.3c.2 0 .3-.1.3-.3l.3-4.8c0-.1.1-.1.1-.1.1 0 .1.1.1.1l.4 4.8c0 .2.2.3.3.3h.3c.2 0 .3-.1.3-.3l.2-4.8c0-.2.1-.3.2-.5l.4-.4c.1-.1.1-.2.1-.3V6.2c.2-.6-.2-1.1-.8-1.2z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

AgreementMoney.displayName = "AgreementMoney";
var _default = AgreementMoney;
exports["default"] = _default;