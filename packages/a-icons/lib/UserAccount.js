"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function UserAccount(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsxs)("g", {
        clipPath: "url(#userAccount_svg__clip0_4046_27238)",
        children: [(0, jsx_runtime_1.jsx)("path", {
          d: "M2.967 14.42c-.913 1.276.145 2.834 1.705 2.998l10.33 1.086c1.56.164 2.918-1.14 2.29-2.578a8.272 8.272 0 00-6.724-4.928 8.272 8.272 0 00-7.601 3.422z",
          fill: "currentColor"
        }), (0, jsx_runtime_1.jsx)("circle", {
          cx: 11.561,
          cy: 6.001,
          transform: "rotate(6 11.56 6)",
          fill: "currentColor",
          r: 3.969
        }), (0, jsx_runtime_1.jsx)("circle", {
          cx: 16.287,
          cy: 17.313,
          fill: "#DC4946",
          r: 5.313
        }), (0, jsx_runtime_1.jsx)("g", {
          clipPath: "url(#userAccount_svg__clip1_4046_27238)",
          children: (0, jsx_runtime_1.jsx)("path", {
            d: "M15.738 17.587a1.374 1.374 0 002.072.149l.824-.825a1.374 1.374 0 00-1.943-1.942l-.472.47m.618 1.599a1.373 1.373 0 00-2.072-.149l-.824.825a1.373 1.373 0 001.942 1.943l.47-.47",
            stroke: "#fff",
            strokeWidth: 0.7,
            strokeLinecap: "square",
            strokeLinejoin: "round"
          })
        })]
      }), (0, jsx_runtime_1.jsxs)("defs", {
        children: [(0, jsx_runtime_1.jsx)("clipPath", {
          id: "userAccount_svg__clip0_4046_27238",
          children: (0, jsx_runtime_1.jsx)("path", {
            fill: "#fff",
            d: "M0 0h24v24H0z"
          })
        }), (0, jsx_runtime_1.jsx)("clipPath", {
          id: "userAccount_svg__clip1_4046_27238",
          children: (0, jsx_runtime_1.jsx)("path", {
            fill: "#fff",
            transform: "translate(12.99 14.016)",
            d: "M0 0h6.595v6.595H0z"
          })
        })]
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
UserAccount.displayName = "UserAccount";
exports["default"] = UserAccount;