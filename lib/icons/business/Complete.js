"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Complete(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      id: "complete_svg__\\u56FE\\u5C42_1",
      xmlns: "http://www.w3.org/2000/svg",
      x: 0,
      y: 0,
      viewBox: "0 0 16 16",
      xmlSpace: "preserve"
    }, props), /*#__PURE__*/React.createElement("style", null, ".complete_svg__st0{fill:#285a83}"), /*#__PURE__*/React.createElement("path", {
      className: "complete_svg__st0",
      d: "M14.4 1.8h-3V.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.1h-5V.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.1h-3C.7 1.8 0 2.5 0 3.3V14c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V3.3c0-.8-.7-1.5-1.6-1.5zm-12.8.9h3v1.1c0 .3.2.5.5.5s.5-.2.5-.5V2.7h5v1.1c0 .3.2.5.5.5s.5-.2.5-.5V2.7h3c.4 0 .7.3.7.7v2.5H.9V3.3c0-.3.3-.6.7-.6zm12.8 12H1.6c-.4 0-.7-.3-.7-.7V6.8h14.2V14c0 .4-.3.7-.7.7z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4.6 13.2c-.1 0-.2 0-.3-.1l-2-1.8c-.2-.2-.2-.5 0-.6.2-.2.5-.2.6 0l1.6 1.4 2.6-3.7c.1-.2.4-.3.6-.1.3.2.4.4.2.6L5 13c-.1.2-.2.2-.4.2.1 0 0 0 0 0z",
      fill: "#ef6f53"
    }), /*#__PURE__*/React.createElement("path", {
      className: "complete_svg__st0",
      d: "M13.4 9.1h-3.2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3.2c.3 0 .5.2.5.5s-.3.5-.5.5zM13.4 11.2h-3.2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3.2c.3 0 .5.2.5.5s-.3.5-.5.5zM13.4 13.3h-3.2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3.2c.3 0 .5.2.5.5-.1.3-.3.5-.5.5z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

Complete.displayName = "Complete";
var _default = Complete;
exports["default"] = _default;