"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Calendar(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      id: "calendar_svg__\\u56FE\\u5C42_1",
      xmlns: "http://www.w3.org/2000/svg",
      x: 0,
      y: 0,
      viewBox: "0 0 16 16",
      xmlSpace: "preserve"
    }, props), /*#__PURE__*/React.createElement("style", null, ".calendar_svg__st1{fill:#ef6f53}"), /*#__PURE__*/React.createElement("path", {
      d: "M14.4 1.9h-3V.7c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.1h-5V.7c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.1h-3C.7 1.9 0 2.6 0 3.5v10.7c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V3.5c0-.9-.7-1.6-1.6-1.6zm-12.8.9h3v1.1c0 .3.2.5.5.5s.5-.2.5-.5V2.8h5v1.1c0 .3.2.5.5.5s.5-.2.5-.5V2.8h3c.4 0 .7.3.7.7V6H.9V3.5c0-.4.3-.7.7-.7zm12.8 12H1.6c-.4 0-.7-.3-.7-.7V6.9h14.2v7.2c0 .4-.3.7-.7.7z",
      fill: "#285a83"
    }), /*#__PURE__*/React.createElement("path", {
      className: "calendar_svg__st1",
      d: "M4.7 9.9h-2c-.3 0-.5-.2-.5-.5.1-.2.3-.4.5-.4h2c.3 0 .5.2.5.4 0 .3-.2.5-.5.5zM9 9.9H7c-.3 0-.5-.2-.5-.5 0-.2.2-.4.5-.4h2c.3 0 .5.2.5.5 0 .2-.2.4-.5.4zM13.3 9.9h-2c-.3 0-.5-.2-.5-.5 0-.2.2-.4.5-.4h2c.3 0 .5.2.5.5-.1.2-.3.4-.5.4zM4.7 12.4h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5zM9 12.4H7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5zM13.3 12.4h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.3.5-.5.5z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

Calendar.displayName = "Calendar";
var _default = Calendar;
exports["default"] = _default;