"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function GroupOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.914 1.636a2 2 0 00-2 2v3.398a2 2 0 002 2H11V11.5H8.222a3 3 0 00-3 3v.647H3.636a2 2 0 00-2 2v3.217a2 2 0 002 2H9.56a2 2 0 002-2v-3.217a2 2 0 00-2-2H7.222V14.5a1 1 0 011-1h7.556a1 1 0 011 1v.647h-2.337a2 2 0 00-2 2v3.217a2 2 0 002 2h5.923a2 2 0 002-2v-3.217a2 2 0 00-2-2h-1.586V14.5a3 3 0 00-3-3H13V9.034h2.086a2 2 0 002-2V3.636a2 2 0 00-2-2H8.914zm6.172 2H8.914v3.398h6.172V3.636zM9.56 17.147H3.636v3.217H9.56v-3.217zm4.882 0h5.923v3.217H14.44v-3.217z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
GroupOutlined.displayName = "GroupOutlined";
exports["default"] = GroupOutlined;