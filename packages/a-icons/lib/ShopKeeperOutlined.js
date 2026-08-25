"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function ShopKeeperOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M5.234 7.73A7.993 7.993 0 0112 4a7.994 7.994 0 016.767 3.73l1.69-1.07A9.994 9.994 0 0012 2a9.994 9.994 0 00-8.456 4.66l1.69 1.07zM12 20a7.993 7.993 0 01-6.766-3.73l-1.69 1.07A9.994 9.994 0 0012 22a9.994 9.994 0 008.457-4.66l-1.69-1.07A7.994 7.994 0 0112 20zm0-12a1 1 0 110 2 1 1 0 010-2zm0 4a3 3 0 100-6 3 3 0 000 6zm0 3a2 2 0 00-2 2H8a4 4 0 018 0h-2a2 2 0 00-2-2zm-9-4a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0zm20 0a1 1 0 112 0 1 1 0 01-2 0zm1-3a3 3 0 100 6 3 3 0 000-6z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
ShopKeeperOutlined.displayName = "ShopKeeperOutlined";
exports["default"] = ShopKeeperOutlined;