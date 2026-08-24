"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function CopyFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M14.6 4c1.137 0 1.929 0 2.546.051.605.05.953.142 1.216.276a3 3 0 011.311 1.311c.134.263.226.611.276 1.216.05.617.051 1.41.051 2.546v8.1h2V9.357c0-1.084 0-1.958-.058-2.666-.06-.728-.185-1.369-.487-1.96a5 5 0 00-2.185-2.186c-.592-.302-1.232-.428-1.961-.487C16.6 2 15.727 2 14.643 2H6.5v2h8.1z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M14.338 5.5H6.162c-.527 0-.981 0-1.356.03-.395.033-.789.104-1.167.297a3 3 0 00-1.311 1.311c-.193.378-.264.772-.296 1.167C2 8.68 2 9.135 2 9.661v8.178c0 .527 0 .982.03 1.356.033.395.104.789.297 1.167a3 3 0 001.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031h8.178c.527 0 .981 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 001.311-1.311c.193-.378.264-.772.296-1.167.031-.375.031-.83.031-1.356V9.66c0-.527 0-.981-.03-1.356-.033-.395-.104-.789-.297-1.167a3 3 0 00-1.311-1.311c-.378-.193-.772-.264-1.167-.296a17.9 17.9 0 00-1.357-.031z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
CopyFilled.displayName = "CopyFilled";
exports["default"] = CopyFilled;