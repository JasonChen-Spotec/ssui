"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function TwoPeopleRectOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M17 6a1 1 0 110-2 1 1 0 010 2zm0 2a3 3 0 100-6 3 3 0 000 6zM7 3a4 4 0 00-4 4v2h2V7a2 2 0 012-2h3V3H7zm10 18a4 4 0 004-4v-2h-2v2a2 2 0 01-2 2h-3v2h3zm-9-8a1 1 0 10-2 0 1 1 0 002 0zm2 0a3 3 0 11-6 0 3 3 0 016 0zm7-2a2 2 0 00-2 2h-2a4 4 0 018 0h-2a2 2 0 00-2-2zM5 21a2 2 0 114 0h2a4 4 0 00-8 0h2z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
TwoPeopleRectOutlined.displayName = "TwoPeopleRectOutlined";
exports["default"] = TwoPeopleRectOutlined;