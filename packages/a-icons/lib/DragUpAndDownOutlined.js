"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function DragUpAndDownOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M2 11h20v2H2v-2z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M11 4.414V11.5h2V4.414l3 3L17.415 6l-4.708-4.707a1 1 0 00-1.414 0L6.586 6 8 7.414l3-3zM12.707 22.707a1 1 0 01-1.414 0L6.586 18 8 16.586l3 3V12.5h2v7.086l3-3L17.414 18l-4.707 4.707z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
DragUpAndDownOutlined.displayName = "DragUpAndDownOutlined";
exports["default"] = DragUpAndDownOutlined;