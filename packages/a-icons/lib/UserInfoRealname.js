"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function UserInfoRealname(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M15.416 6.346a3.969 3.969 0 11-7.894-.83 3.969 3.969 0 017.894.83zM2.967 14.42c-.913 1.276.145 2.834 1.705 2.998l10.33 1.085c1.56.164 2.918-1.14 2.29-2.578a8.272 8.272 0 00-6.724-4.928 8.272 8.272 0 00-7.601 3.422z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M9.374 17.832c-.355-1.774-.533-2.66-.092-3.322.44-.662 1.328-.84 3.102-1.195l5.402-1.082c1.774-.356 2.661-.534 3.323-.093.661.44.84 1.328 1.194 3.102l.343 1.708c.355 1.774.533 2.661.092 3.323-.44.662-1.327.84-3.101 1.195l-5.403 1.082c-1.774.356-2.661.534-3.323.093-.661-.441-.839-1.328-1.194-3.102l-.343-1.709z",
        fill: "#DC4946"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M11.453 15.423l8.004-1.604.123.615-8.003 1.604-.124-.615zM11.946 17.885l8.004-1.604.123.616-8.003 1.604-.124-.616zM12.44 20.348l3.694-.74.123.616-3.694.74-.123-.616z",
        fill: "#fff"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
UserInfoRealname.displayName = "UserInfoRealname";
exports["default"] = UserInfoRealname;