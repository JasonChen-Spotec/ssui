"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function SocialMediaIn(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsxs)("g", {
        clipPath: "url(#social-media-in_svg__clip0_4158_2943)",
        children: [(0, jsx_runtime_1.jsx)("circle", {
          cx: 12,
          cy: 12,
          r: 12,
          fill: "#000"
        }), (0, jsx_runtime_1.jsx)("path", {
          d: "M8.724 17.04V9.59H6.152v7.45h2.572zM7.438 8.574c.897 0 1.456-.572 1.456-1.287C8.877 6.556 8.335 6 7.455 6S6 6.556 6 7.287c0 .715.558 1.287 1.422 1.287h.016zm2.71 8.466h2.572v-4.16c0-.222.017-.445.085-.604.186-.445.609-.905 1.32-.905.93 0 1.303.683 1.303 1.684v3.985H18v-4.271c0-2.288-1.269-3.353-2.961-3.353-1.388 0-1.997.747-2.336 1.255h.017v-1.08h-2.572c.034.699 0 7.449 0 7.449z",
          fill: "#fff"
        })]
      }), (0, jsx_runtime_1.jsx)("defs", {
        children: (0, jsx_runtime_1.jsx)("clipPath", {
          id: "social-media-in_svg__clip0_4158_2943",
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
SocialMediaIn.displayName = "SocialMediaIn";
exports["default"] = SocialMediaIn;