"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function CheckCircleOFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      viewBox: "0 0 80 80",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      transform: "translate(7 6)",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("circle", {
      fill: "currentColor",
      stroke: "#000",
      strokeWidth: 5.583,
      cx: 33.5,
      cy: 33.5,
      r: 30.708
    }), /*#__PURE__*/React.createElement("path", {
      fill: "inherit",
      d: "M27.917 40.348l18.407-18.407a1.707 1.707 0 011.309-.567c.523 0 .96.189 1.308.567.35.349.524.778.524 1.287 0 .508-.175.952-.524 1.33L29.225 44.23a1.707 1.707 0 01-1.308.568c-.524 0-.96-.19-1.309-.568l-7.764-7.72a1.898 1.898 0 01-.524-1.33c0-.51.175-.938.524-1.287a1.707 1.707 0 011.308-.567c.524 0 .96.189 1.309.567l6.456 6.455z",
      fillRule: "nonzero"
    })));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

CheckCircleOFilled.displayName = "CheckCircleOFilled";
var _default = CheckCircleOFilled;
exports["default"] = _default;