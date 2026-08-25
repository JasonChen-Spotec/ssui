"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function RoleSignalResource(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M19.33 1A3.67 3.67 0 0123 4.67v14.66A3.67 3.67 0 0119.33 23H4.67A3.67 3.67 0 011 19.33V4.67A3.67 3.67 0 014.67 1h14.66zM6.574 6.589a7.637 7.637 0 000 10.822l.494.493.986-.988-.494-.493a6.242 6.242 0 010-8.847l.494-.492-.986-.988-.494.493zm9.372.495l.494.493a6.241 6.241 0 010 8.847l-.494.492.986.988.494-.492a7.637 7.637 0 000-10.823l-.494-.492-.986.987zM8.734 8.315c-2.156 2.01-2.156 5.29 0 7.3l.511.475.951-1.02-.51-.476c-1.565-1.458-1.565-3.8 0-5.258l.51-.476-.95-1.02-.512.475zm5.07.545l.511.476c1.565 1.458 1.564 3.8 0 5.258l-.51.475.95 1.02.512-.475c2.155-2.01 2.156-5.29 0-7.299l-.511-.475-.951 1.02zM12 10.42c-.875 0-1.585.708-1.585 1.581s.71 1.58 1.585 1.58c.876 0 1.586-.707 1.586-1.58 0-.873-.71-1.581-1.586-1.581z",
        fill: "#47A92A"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
RoleSignalResource.displayName = "RoleSignalResource";
exports["default"] = RoleSignalResource;