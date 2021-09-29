"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function GuilderFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M14.6.7v8c0 .6-.1 1.2-.3 1.8-.3.5-.6 1.1-.9 1.5-.3.5-.8.9-1.2 1.3-.5.4-.9.8-1.3 1.1-.4.3-.8.6-1.3.8-.4.3-.7.4-.9.5-.2.1-.3.2-.4.2-.2.1-.3.1-.4.1-.1 0-.2 0-.3-.1-.1 0-.3-.1-.4-.2s-.5-.3-.9-.5c-.5-.2-.9-.5-1.3-.8-.4-.3-.8-.6-1.3-1.1-.5-.4-.9-.9-1.2-1.3-.3-.5-.6-1-.9-1.6-.2-.5-.4-1.1-.4-1.7v-8c0-.2.1-.3.2-.5.2-.1.3-.2.5-.2h12c.2 0 .3.1.5.2.1.1.2.3.2.5zm-2 8V2H7.9v11.8c.8-.4 1.6-.9 2.2-1.4 1.7-1.3 2.5-2.5 2.5-3.7z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

GuilderFilled.displayName = "GuilderFilled";
var _default = GuilderFilled;
exports["default"] = _default;