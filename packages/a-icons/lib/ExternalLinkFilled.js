"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function ExternalLinkFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M21 2h-7v2h4.586l-2.423 2.42A3.484 3.484 0 0014.5 6h-9A3.5 3.5 0 002 9.5v9A3.5 3.5 0 005.5 22h9a3.5 3.5 0 003.5-3.5v-9c0-.603-.152-1.17-.42-1.665L13 12.415 11.586 11l4.577-4.577.011.006a4.468 4.468 0 011.402 1.406L20 5.415V10h2V3a1 1 0 00-1-1z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
ExternalLinkFilled.displayName = "ExternalLinkFilled";
exports["default"] = ExternalLinkFilled;