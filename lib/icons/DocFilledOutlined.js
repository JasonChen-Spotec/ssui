"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function DocFilledOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 .6A7.4 7.4 0 11.6 8 7.41 7.41 0 018 .6M8 0a8 8 0 108 8 8 8 0 00-8-8z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M10.64 3.72H5.36A1.3 1.3 0 004.05 5v6a1.3 1.3 0 001.31 1.29h5.28A1.3 1.3 0 0012 11V5a1.3 1.3 0 00-1.31-1.29zm-5.28 8a.71.71 0 01-.71-.7V5a.71.71 0 01.71-.7h5.28a.71.71 0 01.71.7v6a.71.71 0 01-.71.7zm2.76-6H5.85a.3.3 0 00-.3.3.29.29 0 00.3.3h2.27A.3.3 0 008.43 6a.31.31 0 00-.31-.3zm2 2H5.85a.3.3 0 00-.3.3.29.29 0 00.3.3h4.3a.3.3 0 00.31-.3.31.31 0 00-.31-.3zm0 2H5.85a.29.29 0 00-.3.3.3.3 0 00.3.3h4.3a.31.31 0 00.31-.3.3.3 0 00-.31-.3z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

DocFilledOutlined.displayName = "DocFilledOutlined";
var _default = DocFilledOutlined;
exports["default"] = _default;