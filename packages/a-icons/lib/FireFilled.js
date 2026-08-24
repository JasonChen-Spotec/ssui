"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function FireFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M10.225 1.226A1 1 0 008.593 2c0 .687-.098 1.573-.273 2.43-.178.87-.417 1.623-.66 2.08-.302.568-.455.81-.606 1.007a7.49 7.49 0 01-.418.484c-.093.102-.206.226-.346.383-.164.184-.314.344-.456.497-.481.517-.876.94-1.422 1.828-.8 1.302-.912 2.944-.912 4C3.5 19.492 7.374 23 12 23c4.655 0 8.5-3.696 8.5-8.45 0-1.1-.06-2.316-.673-4.16-.284-.854-.468-1.377-.664-1.826-.2-.457-.404-.82-.704-1.345a1 1 0 00-1.861.377 3.752 3.752 0 01-.487 1.49c-.043-.13-.089-.263-.137-.4-.376-1.068-.935-2.4-1.64-3.433-1.152-1.688-2.67-2.887-3.662-3.671-.165-.13-.315-.249-.447-.356z",
        fill: "currentCOlor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
FireFilled.displayName = "FireFilled";
exports["default"] = FireFilled;