"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function GroupFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.914 1.636a2 2 0 00-2 2v3.398a2 2 0 002 2H11V11.5H8.222a3 3 0 00-3 3v.647H3.636a2 2 0 00-2 2v3.217a2 2 0 002 2H9.56a2 2 0 002-2v-3.217a2 2 0 00-2-2H7.222V14.5a1 1 0 011-1h7.556a1 1 0 011 1v.647h-2.337a2 2 0 00-2 2v3.217a2 2 0 002 2h5.922a2 2 0 002-2v-3.217a2 2 0 00-2-2h-1.585V14.5a3 3 0 00-3-3H13V9.034h2.086a2 2 0 002-2V3.636a2 2 0 00-2-2H8.914z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
GroupFilled.displayName = "GroupFilled";
exports["default"] = GroupFilled;