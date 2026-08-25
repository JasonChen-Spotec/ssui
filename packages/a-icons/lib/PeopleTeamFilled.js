"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function PeopleTeamFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M12 10a4 4 0 100-8 4 4 0 000 8zm-6.5 3a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM21 10.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-9 .5a5 5 0 015 5v6H7v-6a5 5 0 015-5zm-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 002 17.5V22h3v-6zm17 6v-4.5a3.5 3.5 0 00-3.288-3.494c.187.632.288 1.301.288 1.994v6h3z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
PeopleTeamFilled.displayName = "PeopleTeamFilled";
exports["default"] = PeopleTeamFilled;