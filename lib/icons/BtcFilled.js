"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function BtcFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 8,
      cy: 8,
      r: 8
    }), /*#__PURE__*/React.createElement("path", {
      fill: "inherit",
      d: "M10 9.83a.94.94 0 01-.17.31.82.82 0 01-.21.19 1.61 1.61 0 01-.91.28H7.18V8.39H8.8a1.31 1.31 0 011.08.51.91.91 0 01.18.53 1.13 1.13 0 01-.07.39zM7.18 5.31h1.27a1.22 1.22 0 011 .46.88.88 0 01.17.5 1 1 0 01-.07.36.76.76 0 01-.15.28.86.86 0 01-.2.18 1.57 1.57 0 01-.84.26H7.18V5.31zm3.42 2.36a1.73 1.73 0 00.92-1.57c0-1.26-1.26-1.84-2-1.92h-.26V3H8v1.2h-.82V3H5.9v1.17H4.33v1.06h.44c.42 0 .61.27.61.45v4.64a.29.29 0 01-.28.29h-.48l-.24 1.2h1.53V13h1.27v-1.2H8V13h1.26v-1.17h.09a2.44 2.44 0 002.71-2.2 2.17 2.17 0 00-1.46-1.96z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

BtcFilled.displayName = "BtcFilled";
var _default = BtcFilled;
exports["default"] = _default;