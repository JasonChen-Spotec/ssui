"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function EyeInvisibleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M13.4 5.3l-2.2 2.2v.3C11.2 9.6 9.8 11 8 11h-.3l-1.4 1.4c.6.1 1.2.2 1.8.2 3.6 0 6.2-2.9 8-4.8-.9-.8-1.8-1.7-2.7-2.5zm-.6-2.7L11.4 4c-1-.6-2.2-.9-3.4-.9-2.9 0-5.2 1.8-8 4.8 1.2 1.4 2.5 2.6 3.9 3.6l-.9.9 1 1 9.7-9.7-.9-1.1zm-8 5.3c0-1.8 1.4-3.2 3.1-3.2.8 0 1.5.3 2.1.7l-.9.9C8.8 6.1 8.4 6 8 6c-1 0-1.9.8-1.9 1.8 0 .4.1.8.3 1.2l-1 .9c-.4-.5-.6-1.2-.6-2z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

EyeInvisibleFilled.displayName = "EyeInvisibleFilled";
var _default = EyeInvisibleFilled;
exports["default"] = _default;