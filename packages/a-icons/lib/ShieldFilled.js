"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function ShieldFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M13.45 1.418c1.56-.745 3.128-.223 4.085.888 1.383-.483 2.982-.142 3.976 1.263 1.18 1.669.783 3.876-.786 5.064-.795.603-2.541 1.53-3.676 2.115l-.027.013a7.961 7.961 0 01-.559.27 1.992 1.992 0 01-.708.166 2.026 2.026 0 01-1.122-.301 1.991 1.991 0 01-.53-.497 7.93 7.93 0 01-.35-.514l-.016-.025c-.69-1.073-1.739-2.75-2.126-3.669-.77-1.827.024-3.907 1.839-4.773z",
        fill: "currentCOlor"
      }), (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.568 12h.864c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 01.874.874 1.8 1.8 0 01.158.456l1.593-.666.01-.004a12.352 12.352 0 01.29-.126c.19-.08.456-.187.755-.294.553-.198 1.38-.458 2.055-.458.48 0 .956.057 1.421.17l2.386.58a2.544 2.544 0 011.955 2.334l1.483-1.082a2.61 2.61 0 013.347.234 2.503 2.503 0 010 3.602l-2.157 2.1a5.205 5.205 0 01-2.634 1.372l-3.05.593a5.278 5.278 0 01-2.254-.052l-2.757-.67-.003-.001a3.229 3.229 0 00-.77-.093H6.987a2.022 2.022 0 01-.205.82 2 2 0 01-.874.875 2.022 2.022 0 01-.77.201C4.93 23 4.684 23 4.432 23h-.864c-.252 0-.498 0-.706-.017a2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.022 2.022 0 01-.201-.77C1 20.93 1 20.684 1 20.432v-5.864c0-.252 0-.498.017-.706.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.271-.138.541-.182.77-.201C3.07 12 3.316 12 3.568 12zM7 19.087h1.61c.42 0 .838.05 1.246.15h.001l1.623.395 1.133.275c.458.112.936.123 1.4.033l3.049-.593a3.206 3.206 0 001.621-.843l2.158-2.1a.504.504 0 000-.734.61.61 0 00-.775-.052l-2.513 1.834c-.534.39-1.18.598-1.84.598h-2.427a1 1 0 010-2h1.545c.345 0 .577-.265.577-.534v-.307c0-.225-.16-.45-.43-.515l-2.385-.58a4.025 4.025 0 00-.95-.114c-.29 0-.818.14-1.38.34a13.547 13.547 0 00-.851.34l-.05.022-.012.005-.002.001a1.09 1.09 0 01-.03.013L7 15.691v3.396z",
        fill: "currentCOlor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
ShieldFilled.displayName = "ShieldFilled";
exports["default"] = ShieldFilled;