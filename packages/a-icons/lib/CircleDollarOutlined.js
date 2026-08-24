"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function CircleDollarOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M14.005 2.003a8 8 0 013.292 15.293A8 8 0 116.711 6.71a8.003 8.003 0 017.294-4.707zm-4 6a6 6 0 100 12 6 6 0 000-12zm1 1v1h2v2h-4a.5.5 0 00-.09.992l.09.008h2a2.5 2.5 0 010 5v1h-2v-1h-2v-2h4a.5.5 0 00.09-.992l-.09-.008h-2a2.5 2.5 0 010-5v-1h2zm3-5A5.985 5.985 0 009.52 6.016a8 8 0 018.47 8.471 6 6 0 00-3.986-10.484z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
CircleDollarOutlined.displayName = "CircleDollarOutlined";
exports["default"] = CircleDollarOutlined;