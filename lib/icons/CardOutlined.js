"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function CardOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M14.1 1.3H1.9c-1 0-1.9.8-1.9 1.8v9.8c0 1 .8 1.8 1.9 1.8h12.2c1 0 1.9-.8 1.9-1.8V3.1c0-1-.8-1.8-1.9-1.8zm-12.2.9h12.2c.5 0 1 .4 1 .9v1.5H.9V3.1c0-.5.5-.9 1-.9zm12.2 11.6H1.9c-.5 0-1-.4-1-.9V7.5H15v5.4c.1.5-.4.9-.9.9z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5.2 9.7H4.1c-.4 0-.7.3-.7.7v.3c0 .4.3.7.7.7h1.1c.4 0 .7-.3.7-.7v-.3c0-.4-.3-.7-.7-.7z"
    })));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CardOutlined.displayName = "CardOutlined";
var _default = CardOutlined;
exports["default"] = _default;