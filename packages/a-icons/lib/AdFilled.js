"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function AdFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.452 4.066c-.436.856-.436 1.976-.436 4.216V15.6c0 2.24 0 3.36.436 4.216A4 4 0 004.2 21.564C5.055 22 6.175 22 8.416 22h7.317c2.24 0 3.36 0 4.216-.436a4 4 0 001.749-1.748c.436-.856.436-1.976.436-4.216V8.282c0-2.24 0-3.36-.436-4.216a4 4 0 00-1.748-1.748c-.856-.436-1.976-.436-4.216-.436H8.415c-2.24 0-3.36 0-4.216.436a4 4 0 00-1.748 1.748zM10.669 16h2.155L9.625 8h-2l-2 5-.001.002L4.425 16h2.154l.4-1h3.29l.4 1zm-2.044-5.115L7.778 13H9.47l-.845-2.115zM19.226 8h-2v2h-1a3 3 0 100 6h3V8zm-2 4h-1a1 1 0 100 2h1v-2z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
AdFilled.displayName = "AdFilled";
exports["default"] = AdFilled;