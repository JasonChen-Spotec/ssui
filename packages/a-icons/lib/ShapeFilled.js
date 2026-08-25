"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function ShapeFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.862 1.017C9.07 1 9.316 1 9.568 1h4.864c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.183.541.201.77l.01.146c.394.013.733.045 1.042.128a4 4 0 012.829 2.829C21 6.476 21 7.067 21 7.862v9.38c0 .804 0 1.469-.044 2.01-.046.562-.145 1.079-.392 1.564a4 4 0 01-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H8.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C3 18.71 3 18.046 3 17.242v-9.38c0-.795 0-1.386.136-1.897a4 4 0 012.829-2.829c.31-.083.648-.115 1.043-.128.002-.05.005-.1.009-.146.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.272-.138.541-.182.77-.201zM15 3.6c0-.297 0-.459-.01-.575l-.001-.014h-.014A8.187 8.187 0 0014.4 3H9.6c-.296 0-.459 0-.575.01l-.013.001-.002.014C9 3.14 9 3.303 9 3.6v.8c0 .297 0 .459.01.575l.002.014h.013C9.14 5 9.304 5 9.6 5h4.8c.297 0 .459 0 .575-.01l.014-.001v-.014C15 4.86 15 4.697 15 4.4v-.8zM7 8.705h10v2H7v-2zm0 4h8v2H7v-2zm0 4h4v2H7v-2z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
ShapeFilled.displayName = "ShapeFilled";
exports["default"] = ShapeFilled;