"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function QuestionCircleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "inherit",
      d: "M8 0C3.6 0 0 3.5 0 7.9V8c0 4.5 3.7 8 8 8 4.5 0 8-3.7 8-8s-3.5-8-8-8z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      className: "question-circle-filled_svg__st0",
      d: "M9.7 7.4c.8-.7 1.4-1.3 1.4-2.3C11.1 3.4 9.7 2 8 2 6.3 2 4.9 3.4 4.9 5.1c0 .4.4.8.8.8.5 0 .8-.5.8-.8 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .2-.2.6-.8 1.3-.8.7-1.5 1.4-1.5 2.4v.9c0 .4.4.8.8.8s.8-.4.8-.8v-.9c0-.3.6-.9.9-1.4zM9.1 12.8c0-.7-.5-1.1-1.1-1.1-.7 0-1.1.5-1.1 1.1 0 .7.5 1.1 1.1 1.1.7 0 1.1-.4 1.1-1.1z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

QuestionCircleFilled.displayName = "QuestionCircleFilled";
var _default = QuestionCircleFilled;
exports["default"] = _default;