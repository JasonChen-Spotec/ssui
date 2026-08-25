"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function BoxFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M12.403 1.185a2 2 0 00-.806 0c-.307.063-.582.217-.8.34l-.06.032-7.4 4.112-.063.034c-.075.042-.156.086-.24.136l8.968 5.016 8.995-4.996c-.094-.058-.187-.109-.271-.156l-.063-.034-7.4-4.112-.06-.033c-.218-.122-.493-.276-.8-.34zM21.997 7.591L13 12.59v9.998c.072-.038.14-.076.203-.111l.06-.034 7.4-4.11.063-.036c.23-.127.521-.287.745-.53.193-.208.339-.457.428-.727.103-.313.102-.645.101-.908V7.869c0-.086 0-.18-.003-.278zM11 22.587v-10L2.004 7.554c-.005.111-.005.218-.004.315v8.262c-.001.264-.002.595.1.908a2 2 0 00.43.728c.222.242.513.402.744.53l.063.034 7.4 4.111.06.034c.063.035.13.073.203.11z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
BoxFilled.displayName = "BoxFilled";
exports["default"] = BoxFilled;