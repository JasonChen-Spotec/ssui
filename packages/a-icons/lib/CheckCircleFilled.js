"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function CheckCircleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M11.998 1c3.038 0 5.788 1.232 7.778 3.223A10.965 10.965 0 0122.998 12c0 3.038-1.231 5.788-3.222 7.778A10.966 10.966 0 0111.998 23a10.965 10.965 0 01-7.777-3.222A10.967 10.967 0 01.998 12c0-3.037 1.232-5.787 3.223-7.777A10.965 10.965 0 0111.998 1z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M17.914 9l-6.707 6.707a1 1 0 01-1.414 0L6.086 12 7.5 10.586l3 3 6-6L17.914 9z",
        fill: "inherit"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
CheckCircleFilled.displayName = "CheckCircleFilled";
exports["default"] = CheckCircleFilled;