"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function BOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M5.94.56v1.23h-1.5a1 1 0 00-1 1v10.36a1 1 0 001 .95h1.5v1.24a.61.61 0 00.61.61.61.61 0 00.62-.61V14.1h1.24v1.24A.61.61 0 009 16a.61.61 0 00.61-.61V14.1h.86a3.39 3.39 0 001.68-6.36A3.39 3.39 0 009.94 1.8h-.3V.56A.61.61 0 009 0a.6.6 0 00-.61.61v1.18H7.18V.56A.61.61 0 006.56 0a.61.61 0 00-.62.56zM5.17 3h4.72a2.18 2.18 0 012.2 2.1 2.15 2.15 0 01-2.16 2.24H4.71V3.47A.46.46 0 015.17 3zm-.46 5.57h5.81a2.17 2.17 0 012.19 2.1 2.14 2.14 0 01-2.16 2.21H5.17a.45.45 0 01-.46-.45z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

BOutlined.displayName = "BOutlined";
var _default = BOutlined;
exports["default"] = _default;