"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function UserInfoGift(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M7.808 11.167c.458 0 .834.375.834.833v2.616a1.678 1.678 0 001.667 1.676c.316 0 .633-.092.908-.275l.79-.517.735.492a1.641 1.641 0 001.699.09 1.66 1.66 0 00.892-1.473V12c0-.458.375-.833.833-.833h1.668c.458 0 .833.375.833.833v5a3.334 3.334 0 01-3.334 3.334H8.666A3.334 3.334 0 015.333 17v-5c0-.458.375-.833.833-.833h1.642z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M13.67 11.167c.457 0 .83.364.83.81v2.532c0 .648-.738 1.037-1.285.673l-.747-.487a.846.846 0 00-.911 0l-.78.503c-.547.356-1.277-.033-1.277-.673v-2.548c0-.446.373-.81.83-.81h3.34zM14.357 4.654c.321-.206.85-.206 1.17 0l1.233.79c.312.2.32.517.025.723h1.136c1.16 0 1.58.75 1.58 1.666v.833c0 .917-.42 1.667-1.58 1.667H6.08c-1.208 0-1.58-.75-1.58-1.667v-.833c0-.917.372-1.666 1.58-1.666h1.098c-.245-.206-.238-.523.022-.724l1.027-.79a.848.848 0 01.974 0l1.966 1.514h.834l2.356-1.513z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("circle", {
        cx: 18.5,
        cy: 16.5,
        r: 4.5,
        fill: "#DC4946"
      }), (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.488 14.733c.8-.8 2.1-.8 2.9 0 .799.8.799 2.1 0 2.9l-.973.972c-.46.46-1.202.46-1.662 0a1.174 1.174 0 010-1.662l.617-.618a.3.3 0 01.425.425l-.618.617a.574.574 0 000 .813.574.574 0 00.814 0l.972-.972a1.452 1.452 0 000-2.05 1.452 1.452 0 00-2.05 0l-1.06 1.06a1.203 1.203 0 000 1.698.3.3 0 11-.426.423 1.803 1.803 0 01.001-2.546l1.06-1.06z",
        fill: "#fff"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
UserInfoGift.displayName = "UserInfoGift";
exports["default"] = UserInfoGift;