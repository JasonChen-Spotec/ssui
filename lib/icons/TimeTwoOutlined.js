"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TimeTwoOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M7.92 16A7.92 7.92 0 011.45 3.51a.6.6 0 01.84-.15.61.61 0 01.15.85 6.71 6.71 0 1011.08 7.57.61.61 0 011 .67A7.91 7.91 0 017.92 16z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M12.05 8.68H7.92a.62.62 0 01-.51-.28L5.25 5a.61.61 0 011-.64l2 3.13h3.79a.61.61 0 010 1.21z"
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 15.41,
      cy: 8.08,
      r: 0.59
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 13.98,
      cy: 3.66,
      r: 0.61
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 10.37,
      cy: 0.76,
      r: 0.61
    }), /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      cx: 5.34,
      cy: 1.12,
      r: 0.61
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

TimeTwoOutlined.displayName = "TimeTwoOutlined";
var _default = TimeTwoOutlined;
exports["default"] = _default;