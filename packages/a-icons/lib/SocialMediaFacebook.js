"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function SocialMediaFacebook(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsxs)("g", {
        clipPath: "url(#social-media-facebook_svg__clip0_4109_4252)",
        children: [(0, jsx_runtime_1.jsx)("circle", {
          cx: 12,
          cy: 12,
          r: 12,
          fill: "#000"
        }), (0, jsx_runtime_1.jsx)("path", {
          d: "M15.688 12.953l.449-2.76H13.37V8.4c0-.755.386-1.492 1.621-1.492h1.276v-2.35a15.98 15.98 0 00-2.246-.185c-2.277 0-3.764 1.323-3.764 3.716v2.104H7.732v2.76h2.525v6.675h3.113v-6.675h2.318z",
          fill: "#fff"
        })]
      }), (0, jsx_runtime_1.jsx)("defs", {
        children: (0, jsx_runtime_1.jsx)("clipPath", {
          id: "social-media-facebook_svg__clip0_4109_4252",
          children: (0, jsx_runtime_1.jsx)("path", {
            fill: "#fff",
            d: "M0 0h24v24H0z"
          })
        })
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
SocialMediaFacebook.displayName = "SocialMediaFacebook";
exports["default"] = SocialMediaFacebook;