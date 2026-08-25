"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function DollarInCircleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.889 5v1.4h.148C14.673 6.4 16 7.793 16 9.511v.933h-1.778v-.933c0-.687-.53-1.244-1.185-1.244h-1.926c-.736 0-1.333.626-1.333 1.4 0 .773.597 1.4 1.333 1.4h1.778c1.718 0 3.111 1.462 3.111 3.266S14.607 17.6 12.889 17.6V19H11.11v-1.4h-.148C9.327 17.6 8 16.207 8 14.489v-.933h1.778v.933c0 .687.53 1.244 1.185 1.244h1.926c.736 0 1.333-.627 1.333-1.4 0-.773-.597-1.4-1.333-1.4H11.11C9.393 12.933 8 11.471 8 9.667S9.393 6.4 11.111 6.4V5h1.778z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
DollarInCircleOutlined.displayName = "DollarInCircleOutlined";
exports["default"] = DollarInCircleOutlined;