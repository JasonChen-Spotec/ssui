"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function BindChainOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 3.515A6 6 0 1120.486 12l-2.122 2.121-1.414-1.414 2.122-2.121a4 4 0 00-5.657-5.657L11.293 7.05 9.88 5.636l2.122-2.121zM16.916 8.5L8.5 16.914 7.086 15.5l8.415-8.414L16.915 8.5zM7.05 11.293l-2.122 2.121a4 4 0 105.657 5.657l2.122-2.121 1.414 1.414L12 20.485A6 6 0 113.514 12l2.121-2.121 1.415 1.414z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
BindChainOutlined.displayName = "BindChainOutlined";
exports["default"] = BindChainOutlined;