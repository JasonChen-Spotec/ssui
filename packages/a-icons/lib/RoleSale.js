"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function RoleSale(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("rect", {
        width: 24,
        height: 24,
        rx: 4,
        fill: "#FF5652"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M12 4.8a3.605 3.605 0 00-3.6 3.603c0 1.95 1.523 3.528 3.509 3.596a.61.61 0 01.167 0h.053a3.593 3.593 0 003.47-3.596A3.605 3.605 0 0012 4.8zM16.33 14.286c-2.378-1.449-6.256-1.449-8.651 0C6.597 14.948 6 15.843 6 16.8c0 .958.597 1.846 1.67 2.5 1.194.732 2.762 1.098 4.33 1.098s3.136-.366 4.33-1.098c1.073-.662 1.67-1.55 1.67-2.515-.009-.958-.597-1.846-1.67-2.5z",
        fill: "#fff"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M7 6.5H5l1 1 1-1zM6 7.5L7 9l-1 1-1-1 1-1.5zM14 13h-4l2 2 2-2z",
        fill: "#FF5652"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M12 15l2 2.4-2 1.6-2-1.6 2-2.4z",
        fill: "#FF5652"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
RoleSale.displayName = "RoleSale";
exports["default"] = RoleSale;