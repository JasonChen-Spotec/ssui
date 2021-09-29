"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("assui/lib/components/Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function MoneyLockOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M11.32 12.49a2 2 0 013.9 0 .78.78 0 01.78.78v2a.76.76 0 01-.76.76H11.3a.76.76 0 01-.76-.76v-2a.78.78 0 01.78-.78zm1.17 0h1.56a.78.78 0 10-1.56 0zm1.89-3.79a6.05 6.05 0 00.06-1A6.81 6.81 0 008 1.17 6.65 6.65 0 001.17 8a6.81 6.81 0 006.48 6.41 6.05 6.05 0 001-.06.59.59 0 01.67.58.59.59 0 01-.51.58 8.24 8.24 0 01-1.22.07 7.81 7.81 0 118-8 8.24 8.24 0 01-.07 1.22.59.59 0 01-.58.51.59.59 0 01-.56-.61zM11.71 14v.43a.36.36 0 00.37.37h2.38a.36.36 0 00.37-.37V14a.36.36 0 00-.37-.37h-2.38a.36.36 0 00-.37.37zM8.42 5.11l2.09 2.08a.89.89 0 010 1.23l-2.09 2.09a.89.89 0 01-1.23 0L5.11 8.42a.87.87 0 010-1.23l2.08-2.08a.87.87 0 011.23 0zM6.36 8L7.6 9.25a.28.28 0 00.41 0L9.25 8a.28.28 0 000-.41L8 6.36a.28.28 0 00-.41 0L6.36 7.6a.28.28 0 000 .4z"
    }));
  };

  return /*#__PURE__*/React.createElement(_Icon["default"], (0, _extends2["default"])({}, componentProps, {
    component: IconNode
  }));
}

MoneyLockOutlined.displayName = "MoneyLockOutlined";
var _default = MoneyLockOutlined;
exports["default"] = _default;