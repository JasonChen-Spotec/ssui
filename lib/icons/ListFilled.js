"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ListFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M13.7 0h-11C2 0 1.4.6 1.4 1.3V15c0 .4.5.6.8.4l.9-.9c.2-.2.5-.2.7 0l1.4 1.3c.2.2.4.2.6 0l2.1-1.5c.2-.1.4-.1.5 0l2.1 1.5c.2.1.4.1.6 0l1.4-1.3c.2-.2.5-.2.7 0l.9.8c.3.3.8.1.8-.4V1.3C15 .6 14.4 0 13.7 0zm-11 3.3c0-.4.3-.7.7-.7h4.1c.4 0 .7.3.7.7 0 .4-.3.7-.7.7H3.4c-.4 0-.7-.3-.7-.7zM9.6 6c0 .4-.3.7-.7.7H3.4c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h5.5c.3 0 .7.4.7.7z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

ListFilled.displayName = "ListFilled";
var _default = ListFilled;
exports["default"] = _default;