"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function AnalyzeOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M4 12.6c0-.297.001-.459.01-.576l.003-.012.011-.001C4.141 12 4.304 12 4.6 12H8v8H4.6c-.297 0-.46-.001-.576-.01l-.011-.003-.002-.011A8.102 8.102 0 014 19.4v-6.8zm6-8c0-.297.001-.459.01-.576l.003-.012.011-.001A8.1 8.1 0 0110.6 4h2.8c.297 0 .459.001.576.01l.012.002.001.012c.01.117.011.28.011.576V20h-4V4.6zm10 14.8a8.04 8.04 0 01-.012.587l-.012.002c-.117.01-.28.011-.576.011H16V8h3.4c.297 0 .459.001.576.01l.012.002.001.012c.01.117.011.28.011.576v10.8zM8 10H4.6c-.264 0-.522-.001-.739.017a2.023 2.023 0 00-.77.2c-.328.169-.604.424-.796.737l-.077.138-.087.203c-.072.2-.1.395-.114.566-.018.217-.017.475-.017.739v6.8c0 .264-.001.522.017.739.018.228.063.498.2.77a2 2 0 00.875.873c.271.139.54.183.77.201.216.018.474.017.738.017h14.8c.264 0 .522.001.739-.017.228-.018.498-.063.77-.2a2 2 0 00.873-.875c.138-.271.183-.54.201-.77.018-.216.017-.474.017-.738V8.6c0-.264.001-.522-.017-.739a2.023 2.023 0 00-.2-.77 2 2 0 00-.875-.873 2.022 2.022 0 00-.77-.201C19.923 5.999 19.665 6 19.4 6H16V4.6c0-.264.001-.522-.017-.739a2.023 2.023 0 00-.2-.77 2 2 0 00-.875-.873 2.022 2.022 0 00-.77-.201C13.923 1.999 13.665 2 13.4 2h-2.8c-.264 0-.522-.001-.739.017a2.022 2.022 0 00-.77.2 2 2 0 00-.796.737l-.077.138-.087.203c-.072.2-.1.395-.114.566C7.999 4.078 8 4.336 8 4.6V10z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
AnalyzeOutlined.displayName = "AnalyzeOutlined";
exports["default"] = AnalyzeOutlined;