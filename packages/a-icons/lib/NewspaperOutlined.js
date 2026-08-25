"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function NewspaperOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M14 7H6v2h8V7zM14 11H6v2h8v-2zM6 15h5v2H6v-2z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 6a4 4 0 014-4h8a4 4 0 014 4v2h1.91c1.154 0 2.09.936 2.09 2.09V19a3 3 0 01-3 3H6a4 4 0 01-4-4V6zm18 13a1 1 0 01-2 0v-9h1.91c.05 0 .09.04.09.09V19zM16 6v14H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
NewspaperOutlined.displayName = "NewspaperOutlined";
exports["default"] = NewspaperOutlined;