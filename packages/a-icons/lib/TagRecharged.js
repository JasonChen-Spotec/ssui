"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function TagRecharged(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M2.32 6.087c0 2.459 4.203 4.45 9.387 4.45s9.387-1.991 9.387-4.45c0-2.458-4.203-4.45-9.387-4.45S2.32 3.628 2.32 6.086zm9.387 6.497c-3.834 0-7.132-1.09-8.587-2.654-.514.551-.8 1.16-.8 1.8 0 2.46 4.203 4.451 9.387 4.451s9.387-1.992 9.387-4.45c0-.64-.286-1.25-.8-1.798-1.455 1.56-4.753 2.65-8.587 2.65zm0 5.416c-3.884 0-7.216-1.118-8.644-2.714-.478.534-.743 1.12-.743 1.737 0 2.458 4.203 4.45 9.387 4.45s9.387-1.992 9.387-4.45c0-.617-.265-1.203-.743-1.737C18.923 16.88 15.59 18 11.707 18z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
TagRecharged.displayName = "TagRecharged";
exports["default"] = TagRecharged;