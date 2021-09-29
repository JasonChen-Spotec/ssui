"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function BarFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M6.3 16h-1c-.5 0-.8-.4-.8-.8V.8c0-.4.3-.8.8-.8h1c.5 0 .8.4.8.8v14.3c0 .5-.4.9-.8.9zm-4.5 0h-1c-.4 0-.8-.4-.8-.8V4.4c0-.5.4-.8.8-.8h1c.5 0 .8.4.8.8v10.8c.1.4-.3.8-.8.8zm8.9 0h-1c-.5 0-.8-.4-.8-.8V8c0-.5.4-.8.8-.8h1c.5 0 .8.4.8.8v7.1c.1.5-.3.9-.8.9zm4.5 0h-1c-.5 0-.8-.4-.8-.8V6.8c0-.5.4-.8.8-.8h1c.4 0 .8.4.8.8v8.3c0 .5-.4.9-.8.9z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

BarFilled.displayName = "BarFilled";
var _default = BarFilled;
exports["default"] = _default;