"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function DoubleDocumentFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M21 8.045h-5c-.92 0-1.667-.732-1.667-1.636V1.5H10.8c-.67 0-1.225 0-1.676.036-.468.038-.899.118-1.303.32a3.304 3.304 0 00-1.457 1.43c-.206.398-.288.82-.326 1.28C6 5.01 6 5.554 6 6.213v8.576c0 .659 0 1.203.037 1.645.038.46.12.883.326 1.28.32.616.83 1.116 1.457 1.43.404.203.835.283 1.303.32.451.037 1.005.037 1.676.037H16.2c.67 0 1.224 0 1.675-.036.469-.038.9-.118 1.304-.32a3.304 3.304 0 001.457-1.43c.206-.398.288-.82.326-1.28.037-.444.037-.987.037-1.646V8.045z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M20.512 6.41L16 1.98v4.43h4.512zM2.5 10v8a5 5 0 005 5H14v-2H7.5a3 3 0 01-3-3v-8h-2z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
DoubleDocumentFilled.displayName = "DoubleDocumentFilled";
exports["default"] = DoubleDocumentFilled;