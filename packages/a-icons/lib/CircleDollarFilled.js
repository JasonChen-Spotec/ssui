"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function CircleDollarFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M23 9c0 2.98-1.629 5.579-4.045 6.956.03-.315.045-.634.045-.956C19 9.477 14.523 5 9 5c-.322 0-.641.015-.956.045A8 8 0 0123 9z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17 15a8 8 0 11-16 0 8 8 0 0116 0zm-7-5v1h2v2H8a.5.5 0 00-.09.992L8 14h2a2.5 2.5 0 010 5v1H8v-1H6v-2h4a.5.5 0 00.09-.992L10 16H8a2.5 2.5 0 010-5v-1h2z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
CircleDollarFilled.displayName = "CircleDollarFilled";
exports["default"] = CircleDollarFilled;