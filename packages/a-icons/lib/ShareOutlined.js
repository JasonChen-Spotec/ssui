"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function ShareOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18 3a2 2 0 100 4 2 2 0 000-4zm-2.842 4.815a4 4 0 10-1.008-1.727L8.842 9.185a4 4 0 100 5.63l5.309 3.093A4.003 4.003 0 0018 23a4 4 0 10-2.839-6.818l-5.31-3.095a4.003 4.003 0 000-2.175l5.307-3.097zM7.7 10.945a.973.973 0 00.056.096c.155.285.244.612.244.959a1.99 1.99 0 01-.3 1.055A1.999 1.999 0 014 12a2 2 0 013.7-1.055zm8.515 7.151a1.012 1.012 0 00.123-.209 2 2 0 11-.122.209z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
ShareOutlined.displayName = "ShareOutlined";
exports["default"] = ShareOutlined;