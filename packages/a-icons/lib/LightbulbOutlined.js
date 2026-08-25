"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function LightbulbOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M9.5 22h5M10 10h4m-2 0v6m3-.674a7 7 0 10-6 0V16c0 .932 0 1.398.152 1.765a2 2 0 001.083 1.082C10.602 19 11.068 19 12 19c.932 0 1.398 0 1.765-.152a2 2 0 001.083-1.083C15 17.398 15 16.932 15 16v-.674z",
        stroke: "currentCOlor",
        strokeWidth: 2,
        strokeLinecap: "square",
        strokeLinejoin: "round"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
LightbulbOutlined.displayName = "LightbulbOutlined";
exports["default"] = LightbulbOutlined;