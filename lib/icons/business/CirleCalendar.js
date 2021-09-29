"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function CirleCalendar(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      id: "cirle-calendar_svg__\\u56FE\\u5C42_1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: 0,
      y: 0,
      viewBox: "0 0 71.9 72.2",
      xmlSpace: "preserve"
    }, props), /*#__PURE__*/React.createElement("style", null, ".cirle-calendar_svg__st4{fill:#285a83}.cirle-calendar_svg__st5{fill:#ef6f53}"), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
      id: "cirle-calendar_svg__SVGID_1_",
      d: "M-931.6-750.8h1920v1578h-1920z"
    })), /*#__PURE__*/React.createElement("clipPath", {
      id: "cirle-calendar_svg__SVGID_2_"
    }, /*#__PURE__*/React.createElement("use", {
      xlinkHref: "#cirle-calendar_svg__SVGID_1_",
      overflow: "visible"
    })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
      id: "cirle-calendar_svg__SVGID_3_",
      d: "M-933.5-739.7h1920v1578h-1920z"
    })), /*#__PURE__*/React.createElement("clipPath", {
      id: "cirle-calendar_svg__SVGID_4_"
    }, /*#__PURE__*/React.createElement("use", {
      xlinkHref: "#cirle-calendar_svg__SVGID_3_",
      overflow: "visible"
    })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      className: "cirle-calendar_svg__st4",
      d: "M35.9 72C16 72-.1 55.9-.1 36S16 0 35.9 0s36 16.1 36 36-16.1 36-36 36zm0-70c-18.7 0-34 15.3-34 34s15.3 34 34 34 34-15.3 34-34-15.2-34-34-34z"
    })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      className: "cirle-calendar_svg__st4",
      d: "M50 52.9H22c-1.9 0-3.5-1.6-3.5-3.5V26.1c0-1.9 1.6-3.5 3.5-3.5h28c1.9 0 3.5 1.6 3.5 3.5v23.3c-.1 1.9-1.6 3.5-3.5 3.5zM21.9 24.6c-.8 0-1.5.7-1.5 1.5v23.3c0 .8.7 1.5 1.5 1.5h28c.8 0 1.5-.7 1.5-1.5V26.1c0-.8-.7-1.5-1.5-1.5h-28z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "cirle-calendar_svg__st4",
      d: "M30 28.2c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1s1 .4 1 1v7c0 .5-.5 1-1 1zM42.9 28.2c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1s1 .4 1 1v7c0 .5-.4 1-1 1zM52.4 33.6H19.5c-.6 0-1-.4-1-1s.4-1 1-1h32.9c.6 0 1 .4 1 1s-.4 1-1 1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "cirle-calendar_svg__st5",
      d: "M28.8 40.1h-4.4c-.6 0-1-.4-1-1s.4-1 1-1h4.4c.6 0 1 .4 1 1s-.5 1-1 1zM38.1 40.1h-4.4c-.6 0-1-.4-1-1s.4-1 1-1h4.4c.6 0 1 .4 1 1s-.4 1-1 1zM47.5 40.1h-4.4c-.6 0-1-.4-1-1s.4-1 1-1h4.4c.6 0 1 .4 1 1s-.5 1-1 1zM28.8 45.6h-4.4c-.6 0-1-.4-1-1s.4-1 1-1h4.4c.6 0 1 .4 1 1s-.5 1-1 1zM38.1 45.6h-4.4c-.6 0-1-.4-1-1s.4-1 1-1h4.4c.6 0 1 .4 1 1s-.4 1-1 1zM47.5 45.6h-4.4c-.6 0-1-.4-1-1s.4-1 1-1h4.4c.6 0 1 .4 1 1s-.5 1-1 1z"
    })));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CirleCalendar.displayName = "CirleCalendar";
var _default = CirleCalendar;
exports["default"] = _default;