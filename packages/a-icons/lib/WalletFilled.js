"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function WalletFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.161 3H16.84c.527 0 .982 0 1.356.03.395.033.789.104 1.167.297a3 3 0 011.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356v1.51a3 3 0 011.942 2.244c.059.293.058.62.058 1.001v.168c0 .38 0 .708-.058 1.001A3 3 0 0121 15.328v1.51c0 .528 0 .982-.03 1.357-.033.395-.104.789-.297 1.167a3 3 0 01-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.83.031-1.356.031H5.16c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 01-1.311-1.311c-.193-.378-.264-.772-.296-1.167C1 17.82 1 17.365 1 16.838V7.162c0-.527 0-.981.03-1.356.033-.395.104-.789.297-1.167a3 3 0 011.311-1.311c.378-.193.772-.264 1.167-.296C4.18 3 4.635 3 5.161 3zM17.5 10.5c-.513 0-.623.005-.695.02a1 1 0 00-.786.785c-.014.072-.019.182-.019.695 0 .513.005.623.02.695a1 1 0 00.785.786c.072.014.182.019.695.019h2c.513 0 .623-.005.695-.02a1 1 0 00.786-.785c.014-.072.019-.182.019-.695 0-.513-.005-.623-.02-.695a1 1 0 00-.785-.786c-.072-.014-.182-.019-.695-.019h-2z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
WalletFilled.displayName = "WalletFilled";
exports["default"] = WalletFilled;