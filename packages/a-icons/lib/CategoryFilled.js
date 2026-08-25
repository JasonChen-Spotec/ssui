"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function CategoryFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M4 2a2 2 0 00-2 2v3a2 2 0 002 2h5a2 2 0 002-2V4a2 2 0 00-2-2H4zM15 15a2 2 0 00-2 2v3a2 2 0 002 2h5a2 2 0 002-2v-3a2 2 0 00-2-2h-5zM13 4a2 2 0 012-2h5a2 2 0 012 2v7a2 2 0 01-2 2h-5a2 2 0 01-2-2V4zM4 11a2 2 0 00-2 2v7a2 2 0 002 2h5a2 2 0 002-2v-7a2 2 0 00-2-2H4z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
CategoryFilled.displayName = "CategoryFilled";
exports["default"] = CategoryFilled;