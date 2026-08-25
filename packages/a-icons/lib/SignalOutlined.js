"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function SignalOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("g", {
        clipPath: "url(#signal-outlined_svg__clip0_435_929)",
        children: (0, jsx_runtime_1.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 5.5A14.942 14.942 0 001.869 9.438l-.737.676L-.22 8.639l.737-.675A16.942 16.942 0 0112 3.5c4.425 0 8.458 1.692 11.482 4.463l.737.676-1.35 1.475-.738-.676A14.942 14.942 0 0012 5.5zm0 5c-2.533 0-4.845.94-6.607 2.493l-.75.661-1.322-1.5.75-.661A11.958 11.958 0 0112 8.5c3.039 0 5.815 1.13 7.93 2.993l.75.66-1.323 1.501-.75-.66A9.958 9.958 0 0012 10.5zm0 5a4.974 4.974 0 00-3.12 1.093l-.781.624-1.25-1.562.782-.624A6.975 6.975 0 0112 13.5c1.627 0 3.126.556 4.315 1.488l.787.617-1.234 1.574-.787-.617A4.974 4.974 0 0012 15.5zm-1 3h2.01v2H11v-2z",
          fill: "currentColor"
        })
      }), (0, jsx_runtime_1.jsx)("defs", {
        children: (0, jsx_runtime_1.jsx)("clipPath", {
          id: "signal-outlined_svg__clip0_435_929",
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
SignalOutlined.displayName = "SignalOutlined";
exports["default"] = SignalOutlined;