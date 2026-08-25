"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function UnionOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M19 8a3 3 0 013 3v8a3 3 0 01-3 3h-8a3 3 0 01-3-3v-2h2v2a1 1 0 001 1h8a1 1 0 001-1v-8a1 1 0 00-1-1h-8a1 1 0 00-1 1v2H8v-2a3 3 0 013-3h8z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M13 2a3 3 0 013 3v2h-2V5a1 1 0 00-1-1H5a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-2h2v2a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h8z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
UnionOutlined.displayName = "UnionOutlined";
exports["default"] = UnionOutlined;