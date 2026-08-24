"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function StopOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.968 6.382a9 9 0 0012.65 12.65L4.968 6.382zM3.547 4.961A10.955 10.955 0 001 12c0 6.075 4.925 11 11 11 2.678 0 5.132-.957 7.04-2.547l.03.031.578-.578c.087-.084.174-.17.258-.258l.578-.578-.03-.03A10.956 10.956 0 0023 12c0-6.075-4.925-11-11-11-2.678 0-5.132.957-7.04 2.547l-.03-.031-.578.578c-.087.084-.174.17-.258.258l-.578.578.03.03zm2.835.007l12.65 12.65a9 9 0 00-12.65-12.65z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
StopOutlined.displayName = "StopOutlined";
exports["default"] = StopOutlined;