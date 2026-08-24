"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function CloudUploadOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.5 4a6.5 6.5 0 00-4.605 11.088l.706.708-1.417 1.412-.705-.709A8.5 8.5 0 1116.715 6.003a6.5 6.5 0 013.922 11.51l-.771.638-1.274-1.542.771-.637A4.5 4.5 0 0016.5 8a1.62 1.62 0 01-1.395-.795A6.497 6.497 0 009.5 4z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13 22v-9.586l3 3L17.414 14l-4.707-4.707a1 1 0 00-1.414 0L6.586 14 8 15.414l3-3V22h2z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
CloudUploadOutlined.displayName = "CloudUploadOutlined";
exports["default"] = CloudUploadOutlined;