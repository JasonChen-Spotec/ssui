"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function HttpsLock(componentProps) {
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
        fill: "#FAE8E8"
      }), (0, jsx_runtime_1.jsx)("rect", {
        x: 0.5,
        y: 0.5,
        width: 23,
        height: 23,
        rx: 11.5,
        stroke: "#fff"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M15.6 9v2.1h1.5V18H6.9v-6.9h1.5V9a3.6 3.6 0 017.2 0zm-6 0v2.1h4.8V9a2.4 2.4 0 10-4.8 0zm2.4 4.35a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z",
        fill: "#E06B67"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
HttpsLock.displayName = "HttpsLock";
exports["default"] = HttpsLock;