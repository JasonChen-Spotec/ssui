"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function TrashCanFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M16.333 1H7.667v2h8.666V1z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1 4.333h22v2h-2.287l-.72 10.795c-.055.843-.101 1.534-.184 2.095-.085.582-.22 1.104-.496 1.589a4.334 4.334 0 01-1.875 1.754c-.502.243-1.032.343-1.619.39-.565.044-1.257.044-2.102.044h-3.434c-.845 0-1.537 0-2.102-.045-.587-.046-1.117-.146-1.619-.389a4.333 4.333 0 01-1.875-1.754c-.276-.485-.41-1.007-.496-1.59-.082-.56-.129-1.251-.185-2.094l-.72-10.795H1v-2zM8.778 16.89h2V9.333h-2v7.556zm4.444 0h2V9.333h-2v7.556z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
TrashCanFilled.displayName = "TrashCanFilled";
exports["default"] = TrashCanFilled;