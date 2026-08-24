"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function GrowthGraphOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M2.032 2.154v16.692a3 3 0 003 3h16.936v-2H5.032a1 1 0 01-1-1V2.154h-2z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M16.913 12.726l4.602-4.913-1.46-1.367-4.498 4.802-3.123-1.622a3.744 3.744 0 01-.037-.02c-.134-.07-.412-.22-.722-.247a1.5 1.5 0 00-.758.13c-.283.129-.495.361-.598.473a2.69 2.69 0 01-.028.031l-4.603 4.912 1.46 1.368 4.499-4.802 3.123 1.622.037.02c.134.07.411.22.72.247a1.5 1.5 0 00.76-.13c.282-.129.495-.361.597-.473l.029-.031z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
GrowthGraphOutlined.displayName = "GrowthGraphOutlined";
exports["default"] = GrowthGraphOutlined;