"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function TagBrokenHeart(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M14.172 10.146a1.02 1.02 0 00-1.448 0l-.724.728a2.04 2.04 0 01-2.896 0c-.8-.805-.8-2.108 0-2.912l5.765-5.798a6.627 6.627 0 016.182 1.794 6.719 6.719 0 01.348 9.085l-2.159 2.198-5.068-5.095zM2.95 3.958a6.631 6.631 0 018.201-.965L7.656 6.506a4.134 4.134 0 000 5.823 4.08 4.08 0 005.644.142l.148-.142 4.344 4.368-4.344 4.368a2.04 2.04 0 01-2.896 0l-7.603-7.644a6.717 6.717 0 010-9.463z",
        fill: "#47A92A"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
TagBrokenHeart.displayName = "TagBrokenHeart";
exports["default"] = TagBrokenHeart;