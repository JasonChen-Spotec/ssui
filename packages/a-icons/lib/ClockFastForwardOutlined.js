"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function ClockFastForwardOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11 4a8 8 0 106.223 13.028l.629-.777 1.554 1.258-.629.777A9.983 9.983 0 0111 22C5.477 22 1 17.523 1 12S5.477 2 11 2c5.134 0 9.365 3.87 9.935 8.851l.765-.765 1.414 1.414-2.706 2.707a1 1 0 01-1.415 0L16.287 11.5l1.414-1.414 1.275 1.274A8 8 0 0011 4zm1 2v5.465l3.387 2.258-1.11 1.664-3.832-2.555A1 1 0 0110 12V6h2z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
ClockFastForwardOutlined.displayName = "ClockFastForwardOutlined";
exports["default"] = ClockFastForwardOutlined;