"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function QrCode(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M0 7.5h7.5V0H0v7.5zm1.9-5.6h3.8v3.8H1.9V1.9zM8.5 0v7.5H16V0H8.5zm5.6 5.6h-3.8V1.9h3.8v3.7zM2.8 4.7h1.9V2.8H2.8v1.9zM0 16h7.5V8.5H0V16zm1.9-5.6h3.8v3.8H1.9v-3.8zm11.3-7.6h-1.9v1.9h1.9V2.8zM8.5 16h1.9v-1.9H8.5V16zm1.9-5.6v3.8h1.9v-3.8h-1.9zm3.7 3.7h-1.9V16H16v-3.8h-1.9v1.9zm0-3.7H16V8.5h-1.9v1.9zM8.5 8.5v1.9h1.9V8.5H8.5zm-5.7 4.7h1.9v-1.9H2.8v1.9z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

QrCode.displayName = "QrCode";
var _default = QrCode;
exports["default"] = _default;