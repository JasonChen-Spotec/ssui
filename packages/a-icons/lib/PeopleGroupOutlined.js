"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function PeopleGroupOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M7 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 2a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm10.5 2a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8zm2.5 6v-.5a2.5 2.5 0 00-5 0v.5h-2v-.5a4.5 4.5 0 119 0v.5h-2zm-10 0v-4a3 3 0 10-6 0v4H2v-4a5 5 0 0110 0v4h-2z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
PeopleGroupOutlined.displayName = "PeopleGroupOutlined";
exports["default"] = PeopleGroupOutlined;