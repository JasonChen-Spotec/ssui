"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SquareForbidOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M3.9 11.3h3.2c.2 0 .4.2.4.4s-.2.4-.4.4H3.5c-.4 0-.7-.3-.7-.7v-8c0-.4.3-.7.7-.7h6.9c.4 0 .7.3.7.7v3.1c0 .2-.2.4-.4.4s-.4-.2-.4-.4V3.8c0-.2-.1-.3-.3-.3H4c-.2 0-.3.1-.3.3V11c0 .2.1.3.2.3zm9.4-4.5c-.3 0-.6-.3-.6-.6V1.6c0-.2-.2-.4-.4-.4H1.6c-.2 0-.4.2-.4.4v11.9c0 .2.2.4.4.4H7c.3 0 .6.3.6.6s-.3.6-.6.6H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h11.9c.6 0 1 .4 1 1v5.2c0 .4-.3.6-.6.6z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M12.4 8.9c-2 0-3.6 1.6-3.6 3.6s1.7 3.5 3.6 3.5 3.6-1.6 3.6-3.6-1.6-3.5-3.6-3.5zm2.7 3.5c0 .6-.2 1.2-.5 1.6l-3.7-3.7c.4-.3 1-.5 1.6-.5 1.4 0 2.6 1.2 2.6 2.6zm-5.3 0c0-.6.2-1.1.5-1.6l3.7 3.8c-.4.3-1 .5-1.6.5-1.4 0-2.6-1.2-2.6-2.7z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

SquareForbidOutlined.displayName = "SquareForbidOutlined";
var _default = SquareForbidOutlined;
exports["default"] = _default;