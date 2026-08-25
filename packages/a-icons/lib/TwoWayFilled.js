"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function TwoWayFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("rect", {
        x: 1,
        y: 1,
        width: 22,
        height: 22,
        rx: 3.667,
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M15.976 5.372v2.651h-5.302v2.651h5.302v2.652l4.64-3.977-4.64-3.977zM8.023 18.629v-2.652h5.302v-2.651H8.023v-2.652l-4.64 3.978 4.64 3.977z",
        fill: "#fff"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
TwoWayFilled.displayName = "TwoWayFilled";
exports["default"] = TwoWayFilled;