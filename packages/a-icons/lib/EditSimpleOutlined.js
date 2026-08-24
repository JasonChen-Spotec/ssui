"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function EditSimpleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M20.293 2.293l-12 12 1.414 1.414 12-12-1.414-1.414z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M6 3h6v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-6h2v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
EditSimpleOutlined.displayName = "EditSimpleOutlined";
exports["default"] = EditSimpleOutlined;