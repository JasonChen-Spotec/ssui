"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function CustomerServiceOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M19.938 8H21a2 2 0 012 2v4a2 2 0 01-2 2h-1.062A8.001 8.001 0 0112 23v-2a6 6 0 006-6V9A6 6 0 006 9v5a2 2 0 01-2 2H3a2 2 0 01-2-2v-4a2 2 0 012-2h1.062a8.001 8.001 0 0115.876 0zM3 10v4h1v-4H3zm17 0v4h1v-4h-1zM7.76 15.785l1.06-1.696A5.972 5.972 0 0012 15a5.972 5.972 0 003.18-.911l1.06 1.696A7.963 7.963 0 0112 17a7.962 7.962 0 01-4.24-1.215z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
CustomerServiceOutlined.displayName = "CustomerServiceOutlined";
exports["default"] = CustomerServiceOutlined;