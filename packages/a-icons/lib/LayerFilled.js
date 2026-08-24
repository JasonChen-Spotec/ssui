"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function LayerFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.723 1.085a1.5 1.5 0 01.553 0c.217.04.41.139.503.186l.026.013 9.642 4.822a1 1 0 010 1.788l-9.642 4.822-.026.013a1.901 1.901 0 01-.503.186 1.5 1.5 0 01-.553 0c-.216-.04-.41-.139-.503-.186l-.025-.013-9.642-4.822a1 1 0 010-1.788l9.642-4.822.025-.013c.094-.047.287-.146.503-.186zM.658 12.447l.895-1.789L12 15.882l10.447-5.224.895 1.79-10.537 5.267-.026.014a1.901 1.901 0 01-.503.186 1.5 1.5 0 01-.553 0c-.216-.04-.41-.139-.503-.186l-.025-.014L.658 12.447zm0 5l.895-1.789L12 20.882l10.447-5.224.895 1.79-10.537 5.267-.026.014a1.901 1.901 0 01-.503.186 1.5 1.5 0 01-.553 0c-.216-.04-.41-.139-.503-.186l-.025-.014L.658 17.447z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
LayerFilled.displayName = "LayerFilled";
exports["default"] = LayerFilled;