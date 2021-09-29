"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TipCirccleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M11.78 4.83h-1L9 3.2a1.44 1.44 0 00-2 0L5.18 4.83h-1a1.5 1.5 0 00-1.5 1.5v4.56a1.5 1.5 0 001.5 1.5h7.56a1.5 1.5 0 001.5-1.5V6.33a1.5 1.5 0 00-1.46-1.5zM7.49 3.72a.75.75 0 011 0l1.27 1.11H6.22zm5.1 7.17a.81.81 0 01-.81.81H4.22a.81.81 0 01-.81-.81V6.33a.8.8 0 01.81-.8h7.56a.8.8 0 01.81.8v4.56z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M10.68 7.91H5.23a.35.35 0 110-.7h5.45a.35.35 0 110 .7zm-1.63 2H5.23a.35.35 0 01-.35-.35.35.35 0 01.35-.34h3.82a.35.35 0 01.35.34.35.35 0 01-.35.37z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 .6A7.4 7.4 0 11.6 8 7.41 7.41 0 018 .6M8 0a8 8 0 108 8 8 8 0 00-8-8z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

TipCirccleOutlined.displayName = "TipCirccleOutlined";
var _default = TipCirccleOutlined;
exports["default"] = _default;