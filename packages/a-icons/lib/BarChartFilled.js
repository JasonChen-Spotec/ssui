"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function BarChartFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M7 12v9a1 1 0 01-1 1H3a1 1 0 01-1-1v-9a1 1 0 011-1h3a1 1 0 011 1zm6.5-6h-3a1 1 0 00-1 1v14a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1zM21 2h-3a1 1 0 00-1 1v18a1 1 0 001 1h3a1 1 0 001-1V3a1 1 0 00-1-1z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
BarChartFilled.displayName = "BarChartFilled";
exports["default"] = BarChartFilled;