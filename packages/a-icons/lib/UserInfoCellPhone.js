"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function UserInfoCellPhone(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M16.14 1.5c2.76 0 3.76 1 3.76 3.81v12.38c0 2.81-1 3.81-3.77 3.81H7.66c-2.76 0-3.76-1-3.76-3.81V5.31c0-2.81 1-3.81 3.76-3.81h8.48zM11.9 15.3c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75zM7.5 3A1.5 1.5 0 006 4.5V12a1.5 1.5 0 001.5 1.5h9A1.5 1.5 0 0018 12V4.5A1.5 1.5 0 0016.5 3h-9z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("circle", {
        cx: 19.5,
        cy: 18,
        r: 4.5,
        fill: "#DC4946"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M17.008 19.582c0 .09.02.183.062.273a1.127 1.127 0 00.58.55c.15.063.313.095.488.095.254 0 .527-.06.814-.183.288-.122.575-.287.86-.494.288-.21.56-.443.82-.7.258-.26.49-.533.698-.818.205-.285.37-.57.49-.852.12-.285.18-.558.18-.818 0-.17-.03-.333-.09-.483a1.15 1.15 0 00-.288-.417c-.16-.157-.334-.235-.52-.235a.47.47 0 00-.202.045.408.408 0 00-.167.14l-.58.818a.856.856 0 00-.1.174.395.395 0 00-.036.153c0 .06.018.12.053.178a.85.85 0 00.14.177l.19.198c.027.027.04.06.04.1 0 .02-.003.037-.008.057l-.02.05c-.044.082-.122.19-.232.32-.113.13-.232.262-.363.395a7.52 7.52 0 01-.397.367c-.13.11-.238.186-.323.23l-.045.02a.173.173 0 01-.062.01.138.138 0 01-.102-.042l-.19-.188a.767.767 0 00-.18-.14.333.333 0 00-.178-.052.399.399 0 00-.152.032.967.967 0 00-.175.098l-.828.587a.38.38 0 00-.137.16.513.513 0 00-.04.195z",
        fill: "#fff"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
UserInfoCellPhone.displayName = "UserInfoCellPhone";
exports["default"] = UserInfoCellPhone;