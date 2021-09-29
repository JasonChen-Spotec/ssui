"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function CFileFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M15.3 0H4.5c-.4 0-.7.3-.7.7v5.8H.7c-.4 0-.7.3-.7.7v6C0 14.7 1.3 16 2.8 16h10.3c1.6 0 2.8-1.3 2.8-2.8V.7c.1-.4-.2-.7-.6-.7zM3.8 13.7c0 .5-.4.9-.9.9-.8 0-1.5-.7-1.5-1.5V7.9h2.4v5.8zm8.8-1.9H7.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h5.4c.4 0 .7.3.7.7s-.3.7-.7.7zm0-3.1H7.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h5.4c.4 0 .7.3.7.7s-.3.7-.7.7zm0-3.2H7.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h5.4c.4 0 .7.3.7.7s-.3.7-.7.7z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CFileFilled.displayName = "CFileFilled";
var _default = CFileFilled;
exports["default"] = _default;