"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function SocialMediaYoutube(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("circle", {
        cx: 12,
        cy: 12,
        r: 12,
        fill: "#000"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M19.13 8.534a1.838 1.838 0 00-1.316-1.274c-1.16-.3-5.814-.3-5.814-.3s-4.651 0-5.814.3A1.837 1.837 0 004.87 8.534C4.56 9.657 4.56 12 4.56 12s0 2.344.31 3.466c.17.619.675 1.107 1.316 1.274 1.163.3 5.814.3 5.814.3s4.654 0 5.814-.3a1.837 1.837 0 001.316-1.274c.31-1.122.31-3.466.31-3.466s0-2.343-.31-3.466z",
        fill: "#fff"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M10.514 14.16L14.379 12l-3.865-2.16v4.32z",
        fill: "#fff"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M10.513 14.16L14.38 12l-3.866-2.16v4.32z",
        fill: "#000"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
SocialMediaYoutube.displayName = "SocialMediaYoutube";
exports["default"] = SocialMediaYoutube;