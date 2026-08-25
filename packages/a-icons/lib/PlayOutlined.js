"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function PlayOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M7.293 3.843c.352.016.646.155.848.266.24.13.522.32.82.52l8.2 5.496c.245.164.485.325.67.475.164.133.37.322.512.595l.058.123.058.167c.119.392.1.815-.058 1.197-.14.34-.382.567-.57.719-.185.15-.425.31-.67.473l-8.2 5.497c-.298.2-.58.39-.82.52-.23.127-.582.29-1.003.265a1.78 1.78 0 01-1.315-.707c-.252-.335-.311-.717-.335-.98-.025-.272-.024-.612-.024-.973V6.503c0-.36-.001-.7.024-.974.024-.262.083-.644.335-.979l.125-.148a1.78 1.78 0 011.19-.558l.155-.001zm.171 13.653l.001.465c.103-.067.228-.148.382-.252l8.2-5.496c.13-.087.233-.156.315-.213a28.052 28.052 0 00-.315-.213l-8.2-5.497c-.155-.103-.279-.186-.382-.253v11.459z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
PlayOutlined.displayName = "PlayOutlined";
exports["default"] = PlayOutlined;