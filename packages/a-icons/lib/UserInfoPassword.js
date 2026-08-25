"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function UserInfoPassword(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M2.967 14.42c-.913 1.276.145 2.834 1.705 2.998l10.33 1.085c1.56.164 2.918-1.14 2.29-2.578a8.272 8.272 0 00-6.724-4.928 8.272 8.272 0 00-7.601 3.423z",
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
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M18.002 15.966l-.33.084-.17-.665a1.538 1.538 0 00-1.88-1.116 1.539 1.539 0 00-1.111 1.882l.17.665-.33.085a.343.343 0 00-.246.415l.682 2.664a.343.343 0 00.415.246l3.652-.935a.344.344 0 00.25-.417l-.683-2.663a.344.344 0 00-.419-.245zm-.83.212l-1.991.51-.17-.665a1.032 1.032 0 01.74-1.254 1.032 1.032 0 011.25.744l.17.665z",
        fill: "#fff"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
UserInfoPassword.displayName = "UserInfoPassword";
exports["default"] = UserInfoPassword;