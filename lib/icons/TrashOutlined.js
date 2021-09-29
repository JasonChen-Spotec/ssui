"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TrashOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15.4 2.6h-3.8v-.8c0-1-.8-1.8-1.8-1.8H6.2c-1 0-1.8.8-1.8 1.8v.8H.6c-.3 0-.5.2-.5.5s.2.5.5.5h1.5v10.9c0 .8.7 1.5 1.5 1.5h8.8c.8 0 1.5-.7 1.5-1.5V3.6h1.5c.3 0 .5-.2.5-.5-.1-.3-.3-.5-.5-.5zm-10-.8c0-.5.4-.8.8-.8h3.6c.4 0 .8.4.8.8v.8H5.4v-.8zm7.5 12.7c0 .3-.2.5-.5.5H3.6c-.3 0-.5-.2-.5-.5V3.6h9.8v10.9z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5.2 14c.3 0 .5-.2.5-.5V5.1c0-.3-.2-.5-.5-.5-.2 0-.5.2-.5.5v8.5c0 .2.2.4.5.4zM8.2 14c.3 0 .5-.2.5-.5V5.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5v8.5c0 .2.2.4.5.4zM10.8 14c.3 0 .5-.2.5-.5V5.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5v8.5c0 .2.2.4.5.4z"
    })));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

TrashOutlined.displayName = "TrashOutlined";
var _default = TrashOutlined;
exports["default"] = _default;