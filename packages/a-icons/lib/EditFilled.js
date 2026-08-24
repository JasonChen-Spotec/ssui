"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function EditFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M9.292 10.463l.007 4.247 4.238-.008L21 7.24V18a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h10.755l-7.463 7.463z",
        fill: "currentCOlor"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M21.9 3.512l-9.193 9.192-1.411.002-.003-1.416 9.192-9.192L21.9 3.512z",
        fill: "currentCOlor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
EditFilled.displayName = "EditFilled";
exports["default"] = EditFilled;