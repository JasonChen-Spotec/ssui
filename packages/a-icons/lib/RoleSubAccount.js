"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function RoleSubAccount(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("rect", {
        width: 24,
        height: 24,
        rx: 4,
        fill: "#4FB4ED"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M9.6 4a3.803 3.803 0 00-3.8 3.8c0 2.056 1.608 3.72 3.704 3.792a.645.645 0 01.176 0h.056A3.79 3.79 0 0013.4 7.8c0-2.096-1.704-3.8-3.8-3.8zM13.664 13.72c-2.232-1.488-5.872-1.488-8.12 0-1.016.68-1.576 1.6-1.576 2.584s.56 1.896 1.568 2.568C6.656 19.624 8.128 20 9.6 20s2.944-.376 4.064-1.128c1.008-.68 1.568-1.592 1.568-2.584-.008-.984-.56-1.896-1.568-2.568zM18.392 8.272a2.863 2.863 0 01-2.504 3.096h-.04c-.048 0-.096 0-.136.016a2.87 2.87 0 01-2.024-.664 3.66 3.66 0 001.2-3.04 3.713 3.713 0 00-.616-1.744 2.874 2.874 0 014.12 2.336z",
        fill: "#fff"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M19.992 15.672c-.064.776-.56 1.448-1.392 1.904-.8.44-1.808.648-2.808.624.576-.52.912-1.168.976-1.856.08-.992-.392-1.944-1.336-2.704a6.604 6.604 0 00-1.84-1.008c1.768-.512 3.992-.168 5.36.936.736.592 1.112 1.336 1.04 2.104z",
        fill: "#fff"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
RoleSubAccount.displayName = "RoleSubAccount";
exports["default"] = RoleSubAccount;