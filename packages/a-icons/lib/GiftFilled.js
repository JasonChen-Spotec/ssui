"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function GiftFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.67 5a3.033 3.033 0 01.692-3.115A2.947 2.947 0 018.464 1C10.26 1 11.373 2.218 12 3.272 12.627 2.218 13.741 1 15.536 1c.792 0 1.548.32 2.102.885A3.018 3.018 0 0118.33 5h2.102c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.182.541.201.77.017.208.017.454.017.706v1.864c0 .252 0 .498-.017.706a2.022 2.022 0 01-.201.77 2 2 0 01-.874.874 2.022 2.022 0 01-.77.201c-.044.004-.09.006-.138.009V12H3v-.008a4.277 4.277 0 01-.138-.009 2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.022 2.022 0 01-.201-.77C1 9.93 1 9.684 1 9.432V7.568c0-.252 0-.498.017-.706.019-.229.063-.499.201-.77a2 2 0 01.874-.874c.271-.138.541-.182.77-.201C3.07 5 3.316 5 3.568 5H5.67zm2.794-2c-.25 0-.493.1-.675.286A1.019 1.019 0 007.5 4c0 .271.106.527.289.714A.947.947 0 008.464 5h2.17a6.117 6.117 0 00-.25-.525C9.898 3.575 9.274 3 8.464 3zm7.072 2c.25 0 .493-.1.675-.286.183-.187.289-.443.289-.714 0-.271-.106-.527-.289-.714A.947.947 0 0015.536 3c-.81 0-1.434.576-1.92 1.475a6.057 6.057 0 00-.25.525h2.17z",
        fill: "currentCOlor"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M3 14v4.838c0 .528 0 .982.03 1.357.033.395.104.789.297 1.167a3 3 0 001.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031H11v-9H3zM13 14v9h3.839c.527 0 .982 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 001.311-1.311c.193-.378.264-.772.296-1.167.031-.375.031-.83.031-1.356V14h-8z",
        fill: "currentCOlor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
GiftFilled.displayName = "GiftFilled";
exports["default"] = GiftFilled;