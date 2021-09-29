"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function CopyOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M13.2 0c1.2 0 2.2 1 2.2 2.2V11c0 1.2-1 2.2-2.2 2.2h-.6v.6c0 1.2-1 2.2-2.2 2.2H2.8c-1.2 0-2.2-1-2.2-2.2V4.9c0-1.2 1-2.2 2.2-2.2h.6v-.5C3.3 1 4.3 0 5.5 0h7.7zm-2.7 3.8H2.8c-.6 0-1 .4-1.1 1v8.9c0 .6.4 1 1 1.1h7.8c.6 0 1-.4 1.1-1V4.9c0-.6-.5-1.1-1.1-1.1zm2.7-2.7H5.5c-.6 0-1 .4-1.1 1v.7h6.1c1.2 0 2.2 1 2.2 2.2v7.2h.6c.6 0 1-.4 1.1-1v-9c-.1-.6-.5-1.1-1.2-1.1z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CopyOutlined.displayName = "CopyOutlined";
var _default = CopyOutlined;
exports["default"] = _default;