"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function CardLoopFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsxs)("g", {
        clipPath: "url(#card-loop-filled_svg__clip0_4109_3995)",
        fill: "currentColor",
        children: [(0, jsx_runtime_1.jsx)("path", {
          d: "M4 4a3 3 0 00-3 3v2h22V7a3 3 0 00-3-3H4zM1 17v-6h22v3.225A5.5 5.5 0 0013.875 20H4a3 3 0 01-3-3z"
        }), (0, jsx_runtime_1.jsx)("path", {
          d: "M19.845 14l3.264 2.507A1 1 0 0122.5 18.3H15v-2h4.556l-.93-.714L19.846 14zM18.655 23.6l-3.264-2.507a1 1 0 01.61-1.793h7.5v2h-4.557l.93.714-1.218 1.586z"
        })]
      }), (0, jsx_runtime_1.jsx)("defs", {
        children: (0, jsx_runtime_1.jsx)("clipPath", {
          id: "card-loop-filled_svg__clip0_4109_3995",
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
CardLoopFilled.displayName = "CardLoopFilled";
exports["default"] = CardLoopFilled;