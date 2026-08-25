"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function SocialMediaIns(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("circle", {
        cx: 12,
        cy: 12,
        r: 12,
        fill: "#000"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M12.034 8.4c-2.003 0-3.72 1.57-3.72 3.6 0 1.939 1.621 3.6 3.72 3.6 2.003 0 3.72-1.569 3.72-3.6 0-1.938-1.717-3.6-3.72-3.6zm0 5.908c-1.335 0-2.385-1.015-2.385-2.308 0-1.292 1.05-2.307 2.385-2.307 1.335 0 2.385 1.015 2.385 2.307 0 1.293-1.05 2.308-2.385 2.308zm3.815-6.83a.841.841 0 00-.858.83c0 .461.381.83.858.83s.859-.369.859-.83a.841.841 0 00-.859-.83z",
        fill: "#fff"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M15.372 5.077h-.381c-1.145-.092-4.77-.092-5.914 0-2.194-.092-4.101 1.57-4.197 3.692v.37c-.095 1.107-.095 4.615 0 5.723-.095 2.123 1.622 3.969 3.816 4.061h.381c1.145.092 4.77.092 5.914 0 2.194.092 4.101-1.57 4.197-3.692V9.138c.095-2.123-1.622-3.969-3.816-4.061zm2.29 10.984c-.287.647-.763 1.108-1.336 1.293a32.66 32.66 0 01-8.489 0c-.668-.277-1.145-.739-1.335-1.293-.286-1.384-.382-2.769-.286-4.061-.096-1.385 0-2.77.286-4.062.286-.646.763-1.107 1.335-1.292 2.766-.37 5.628-.37 8.49 0 .667.277 1.144.739 1.335 1.292.286 1.385.381 2.77.286 4.062.095 1.385 0 2.77-.286 4.061z",
        fill: "#fff"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
SocialMediaIns.displayName = "SocialMediaIns";
exports["default"] = SocialMediaIns;