"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function RelationCircle(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("rect", {
        x: 1,
        y: 1,
        width: 22,
        height: 22,
        rx: 11,
        fill: "#47A92A"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M16.011 8.236a1.473 1.473 0 10-1.39-1.965h-2.539c-1.584 0-2.455.871-2.455 2.456v2.782H6.926a1.474 1.474 0 100 .982h2.7v2.783c0 1.585.872 2.456 2.456 2.456h2.54a1.474 1.474 0 100-.983h-2.54c-1.034 0-1.473-.438-1.473-1.473v-2.783h4.013a1.474 1.474 0 100-.982h-4.013V8.727c0-1.035.439-1.474 1.473-1.474h2.54c.202.573.748.983 1.39.983z",
        fill: "#fff"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
RelationCircle.displayName = "RelationCircle";
exports["default"] = RelationCircle;