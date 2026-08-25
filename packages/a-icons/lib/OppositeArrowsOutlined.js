"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function OppositeArrowsOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("g", {
        clipPath: "url(#opposite-arrows-outlined_svg__clip0_417_193)",
        children: (0, jsx_runtime_1.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M22.192 7.464v6.657a1 1 0 01-1 1h-6.656v-2h4.242L8.464 2.808 9.88 1.393l10.313 10.314V7.464h2zM9.464 10.88H5.222l10.314 10.313-1.415 1.415L3.808 12.293v4.242h-2V9.88a1 1 0 011-1h6.656v2z",
          fill: "currentColor"
        })
      }), (0, jsx_runtime_1.jsx)("defs", {
        children: (0, jsx_runtime_1.jsx)("clipPath", {
          id: "opposite-arrows-outlined_svg__clip0_417_193",
          children: (0, jsx_runtime_1.jsx)("path", {
            fill: "currentColor",
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
OppositeArrowsOutlined.displayName = "OppositeArrowsOutlined";
exports["default"] = OppositeArrowsOutlined;