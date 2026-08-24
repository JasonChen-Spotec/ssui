"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function GarbageCanOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M11 17.5H9v-7h2v7zM15 17.5h-2v-7h2v7z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22 7h-2v10.2c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4.002 4.002 0 01-1.748 1.748c-.485.248-1.002.346-1.564.392-.55.045-1.228.044-2.052.044H9.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4.001 4.001 0 01-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C3.999 18.702 4 18.024 4 17.2V7H2V5h20v2zM6 17.2c0 .857 0 1.439.037 1.889.036.438.101.663.18.82a2 2 0 00.875.873c.156.08.38.145.82.18C8.361 21 8.942 21 9.8 21h4.4c.857 0 1.439 0 1.889-.037.438-.036.663-.101.82-.18a2 2 0 00.873-.875c.08-.156.145-.38.18-.82.038-.45.038-1.031.038-1.888V7H6v10.2z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M15.83 4h-8V2h8v2z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
GarbageCanOutlined.displayName = "GarbageCanOutlined";
exports["default"] = GarbageCanOutlined;