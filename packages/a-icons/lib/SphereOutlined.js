"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function SphereOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11 3.055a9.001 9.001 0 105.45 16.77l-5.259-7.237A1 1 0 0111 12V3.055zm2 0V11h7.944A9 9 0 0013 3.056zM20.944 13h-6.981l4.103 5.648A9.001 9.001 0 0020.944 13zM23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1a10.965 10.965 0 017.843 3.287A10.965 10.965 0 0123 12z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
SphereOutlined.displayName = "SphereOutlined";
exports["default"] = SphereOutlined;