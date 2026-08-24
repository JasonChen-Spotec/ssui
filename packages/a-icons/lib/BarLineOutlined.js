"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function BarLineOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M3 15h2v6H3v-6zm8-6h2v12h-2V9zm8 3h2v9h-2v-9zm-8.768-9.268a2.5 2.5 0 013.536 0c.454.454.693 1.04.725 1.634l3.714 1.394.025-.028a2.5 2.5 0 11-.726 1.9L13.792 6.24l-.024.028a2.498 2.498 0 01-3 .406L6.431 9.926a2.5 2.5 0 11-1.2-1.6l4.337-3.253a2.496 2.496 0 01.664-2.34zm-5.878 7.414a.5.5 0 10-.708.707.5.5 0 00.708-.707zm16-3a.5.5 0 10-.707.707.5.5 0 00.707-.707zm-8-3a.5.5 0 10-.707.707.5.5 0 00.707-.707z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
BarLineOutlined.displayName = "BarLineOutlined";
exports["default"] = BarLineOutlined;