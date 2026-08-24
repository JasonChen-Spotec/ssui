"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function SignalLineOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.343 2.929l-.707.707a9 9 0 000 12.728l.707.707-1.414 1.414-.707-.707c-4.296-4.295-4.296-11.26 0-15.556l.707-.707 1.414 1.414zM19.07 1.515l.707.707c4.296 4.296 4.296 11.26 0 15.556l-.707.707-1.414-1.414.707-.707a9 9 0 000-12.728l-.707-.707 1.414-1.414zm-9.9 4.242l-.707.707a5 5 0 000 7.072l.708.707-1.415 1.414-.707-.707a7 7 0 010-9.9l.707-.707 1.415 1.414zm7.072-1.414l.707.707a7 7 0 010 9.9l-.707.707-1.415-1.414.708-.707a5 5 0 000-7.072l-.708-.707 1.415-1.414zM12 9a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 114 2.83V22h-2v-9.17A3.001 3.001 0 019 10z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
SignalLineOutlined.displayName = "SignalLineOutlined";
exports["default"] = SignalLineOutlined;