"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function EarthOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.447 11.106a1 1 0 00-1.375.523l-1 2.5a1 1 0 00-.02.687l1 3A1 1 0 0012 18.5h3a1 1 0 00.832-.445l2-3a1 1 0 00-.385-1.45l-5-2.5zm-.382 3.425l.46-1.15 3.015 1.507-1.075 1.612H12.72l-.656-1.969z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-2a9 9 0 002.465-17.658l-.473 3.782a1 1 0 01-.545.77L9.644 9.796 7.78 12.125a1 1 0 01-1.31.223l-3.307-2.066A9 9 0 0012 21zm0-18c.165 0 .328.004.49.013l-.416 3.332-3.521 1.76a1 1 0 00-.334.27L6.775 10.18 3.787 8.313A9.002 9.002 0 0112 3z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
EarthOutlined.displayName = "EarthOutlined";
exports["default"] = EarthOutlined;