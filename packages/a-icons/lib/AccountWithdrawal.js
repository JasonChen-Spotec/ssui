"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function AccountWithdrawal(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 21 21",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsxs)("g", {
        clipPath: "url(#account-withdrawal_svg__clip0_22022_10306)",
        children: [(0, jsx_runtime_1.jsx)("path", {
          fill: "#fff",
          d: "M0 0h21v21H0z"
        }), (0, jsx_runtime_1.jsx)("path", {
          d: "M15.674 6.23a7.313 7.313 0 11-10.341 0",
          stroke: "#121212",
          strokeWidth: 1.5
        }), (0, jsx_runtime_1.jsx)("path", {
          d: "M10.5 11.625V1.5l3.75 3.375M10.5 1.5L6.75 4.875",
          stroke: "#DC4946",
          strokeWidth: 1.5,
          strokeLinejoin: "round"
        })]
      }), (0, jsx_runtime_1.jsx)("defs", {
        children: (0, jsx_runtime_1.jsx)("clipPath", {
          id: "account-withdrawal_svg__clip0_22022_10306",
          children: (0, jsx_runtime_1.jsx)("path", {
            fill: "#fff",
            d: "M0 0h21v21H0z"
          })
        })
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
AccountWithdrawal.displayName = "AccountWithdrawal";
exports["default"] = AccountWithdrawal;