"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function AlertTriangleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.526 19.5L12 3 2.474 19.5h19.052zM13.732 2c-.77-1.333-2.694-1.333-3.464 0L.742 18.5c-.77 1.333.192 3 1.732 3h19.052c1.54 0 2.502-1.667 1.732-3L13.732 2z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M13 14h-2V8h2v6zM13.01 16v2H11v-2h2.01z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
AlertTriangleOutlined.displayName = "AlertTriangleOutlined";
exports["default"] = AlertTriangleOutlined;