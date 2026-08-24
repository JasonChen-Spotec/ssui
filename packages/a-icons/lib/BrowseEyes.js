"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function BrowseEyes(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("rect", {
        x: 0.5,
        y: 0.5,
        width: 23,
        height: 23,
        rx: 11.5,
        fill: "#EFFDF4"
      }), (0, jsx_runtime_1.jsx)("rect", {
        x: 0.5,
        y: 0.5,
        width: 23,
        height: 23,
        rx: 11.5,
        stroke: "#fff"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M10.2 12a1.8 1.8 0 113.6 0 1.8 1.8 0 01-3.6 0z",
        fill: "#377C51"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M12 6.6a7.503 7.503 0 00-7.147 5.218L4.795 12l.058.182a7.503 7.503 0 0014.293 0l.058-.182-.058-.182A7.503 7.503 0 0011.999 6.6zM12 9a3 3 0 110 6 3 3 0 010-6z",
        fill: "#377C51"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
BrowseEyes.displayName = "BrowseEyes";
exports["default"] = BrowseEyes;