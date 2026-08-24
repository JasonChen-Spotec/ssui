"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function TransferFileFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M13 7a2 2 0 002 2h6v8.241c0 .805 0 1.47-.044 2.011-.046.562-.144 1.08-.392 1.564a4.002 4.002 0 01-1.748 1.748c-.485.248-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.758c-.805 0-1.47 0-2.011-.044-.562-.046-1.08-.144-1.564-.392a4.001 4.001 0 01-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C3 18.711 3 18.046 3 17.242V6.758c0-.805 0-1.47.044-2.011.046-.562.144-1.08.392-1.564a4.001 4.001 0 011.748-1.748c.485-.248 1.002-.346 1.564-.392C7.29 1 7.954 1 8.758 1H13v6zm-4.25 9.257a1.001 1.001 0 00-.61 1.793l3.265 2.507 1.219-1.586-.93-.714h4.556v-2h-7.5zm2.627-3.714l.929.714H7.75v2h7.5a1 1 0 00.61-1.793l-3.265-2.507-1.218 1.586zM20.414 7H15V1.586L20.414 7z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
TransferFileFilled.displayName = "TransferFileFilled";
exports["default"] = TransferFileFilled;