"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function StampFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M19 22H5v-3h14v3zM12 1.412c2.823 0 5.117 2.201 5.117 4.91 0 1.863-1.059 3.386-2.558 4.233v1.947h3.882c1.412 0 2.559 1.1 2.559 2.455v2.455H3v-2.455c0-1.354 1.147-2.455 2.559-2.455H9.44v-1.947c-1.5-.847-2.558-2.455-2.558-4.233 0-2.709 2.293-4.91 5.117-4.91z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
StampFilled.displayName = "StampFilled";
exports["default"] = StampFilled;