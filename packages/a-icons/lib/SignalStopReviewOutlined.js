"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function SignalStopReviewOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M12 3c4.285 0 8.22 1.497 11.31 3.996l-1.256 1.556A15.933 15.933 0 0012 5c-3.09 0-5.974.875-8.42 2.392l8.42 10.425L18 10.388v3.183l-5.222 6.466a1 1 0 01-1.556 0L1.319 7.774c-.347-.43-.282-1.061.166-1.384A17.918 17.918 0 0112.001 3zm10 16v2h-2v-2h2zm0-9v7h-2v-7h2z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
SignalStopReviewOutlined.displayName = "SignalStopReviewOutlined";
exports["default"] = SignalStopReviewOutlined;