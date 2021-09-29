"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function CycleArrowFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("g", {
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M11.3 11.7c-.9.9-2.1 1.3-3.3 1.3-2.7 0-4.8-2.1-5-4.7h1.2L2.1 5.1 0 8.3h1.3c.2 3.6 3.1 6.5 6.7 6.5 1.7 0 3.3-.6 4.5-1.7.4-.3.4-.9.1-1.2-.3-.5-.9-.5-1.3-.2zM14.8 8c0-3.7-3-6.8-6.8-6.8-1.7 0-3.3.7-4.5 1.8-.4.3-.4.8-.1 1.2.3.4.9.4 1.2.1C5.6 3.4 6.8 3 8 3c2.8 0 5 2.2 5 5h-1.2l2.1 3.2L16 8h-1.2z"
    })));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CycleArrowFilled.displayName = "CycleArrowFilled";
var _default = CycleArrowFilled;
exports["default"] = _default;