"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SharedFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M13.3 10.7c-.8 0-1.5.3-2 .9l-6.1-3c.1-.4.1-.7 0-1.1l5.4-2.7c.9 1.2 2.5 1.5 3.7.8s1.9-2.2 1.4-3.6-1.9-2.2-3.3-2-2.3 1.5-2.3 3c0 .2 0 .4.1.5L4.7 6.2c-.8-.8-1.9-1.1-3-.7C.7 5.9 0 6.9 0 8s.7 2.1 1.7 2.5c1 .4 2.2.1 2.9-.7l6.1 3c0 .2-.1.4-.1.5 0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7-1.2-2.6-2.7-2.6z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

SharedFilled.displayName = "SharedFilled";
var _default = SharedFilled;
exports["default"] = _default;