"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function CircleRLetterOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M12.5 7a3.5 3.5 0 011.82 6.49L16.868 17h-2.472l-2.18-3H10v3H8V7h4.5zm0 2H10v3h2.5a1.5 1.5 0 001.493-1.355L14 10.5A1.5 1.5 0 0012.5 9z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M23 12c0-6.072-4.928-11-11-11S1 5.928 1 12s4.928 11 11 11 11-4.928 11-11zM3.2 12c0-4.862 3.938-8.8 8.8-8.8s8.8 3.938 8.8 8.8-3.938 8.8-8.8 8.8A8.798 8.798 0 013.2 12z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
CircleRLetterOutlined.displayName = "CircleRLetterOutlined";
exports["default"] = CircleRLetterOutlined;