"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function DownloadLineOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("g", {
        clipPath: "url(#download-line-outlined_svg__clip0_18321_25544)",
        children: (0, jsx_runtime_1.jsx)("path", {
          d: "M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z",
          fill: "currentColor"
        })
      }), (0, jsx_runtime_1.jsx)("defs", {
        children: (0, jsx_runtime_1.jsx)("clipPath", {
          id: "download-line-outlined_svg__clip0_18321_25544",
          children: (0, jsx_runtime_1.jsx)("path", {
            fill: "currentColor",
            d: "M0 0h24v24H0z"
          })
        })
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
DownloadLineOutlined.displayName = "DownloadLineOutlined";
exports["default"] = DownloadLineOutlined;