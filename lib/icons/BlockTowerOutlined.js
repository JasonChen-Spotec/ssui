"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function BlockTowerOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 9.79a2.16 2.16 0 01-1.19-.36L1.47 5.84a1.22 1.22 0 010-2L7.14.25a1.62 1.62 0 011.72 0l5.64 3.54a1.22 1.22 0 010 2.05L9.19 9.43A2.16 2.16 0 018 9.79zm-.22-8.53L2.14 4.8l5.34 3.63a.94.94 0 001 0l5.34-3.59-5.6-3.58a.43.43 0 00-.44 0z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 12.87a2.16 2.16 0 01-1.19-.36L1.47 8.92a1.22 1.22 0 010-2 .6.6 0 01.83.19.61.61 0 01-.19.83l5.35 3.61a.94.94 0 001 0l5.34-3.58a.63.63 0 01-.19-.85.61.61 0 01.83-.21 1.22 1.22 0 010 2.05l-5.25 3.55a2.16 2.16 0 01-1.19.36z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M8 16a2.16 2.16 0 01-1.19-.36l-5.34-3.59A1.22 1.22 0 011.5 10a.6.6 0 11.64 1l5.35 3.61a.94.94 0 001 0l5.34-3.59a.62.62 0 01-.19-.84.61.61 0 01.86-.18 1.22 1.22 0 010 2.05l-5.31 3.59A2.16 2.16 0 018 16z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

BlockTowerOutlined.displayName = "BlockTowerOutlined";
var _default = BlockTowerOutlined;
exports["default"] = _default;