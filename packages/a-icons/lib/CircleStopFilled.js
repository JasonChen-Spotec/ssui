"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function CircleStopFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm7.109-3.454C8 8.76 8 9.04 8 9.6v4.8c0 .56 0 .84.109 1.054a1 1 0 00.437.437C8.76 16 9.04 16 9.6 16h4.8c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C16 15.24 16 14.96 16 14.4V9.6c0-.56 0-.84-.109-1.054a1 1 0 00-.437-.437C15.24 8 14.96 8 14.4 8H9.6c-.56 0-.84 0-1.054.109a1 1 0 00-.437.437z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
CircleStopFilled.displayName = "CircleStopFilled";
exports["default"] = CircleStopFilled;