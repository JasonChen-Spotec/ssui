"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function RoleManage(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("rect", {
        width: 24,
        height: 24,
        rx: 4,
        fill: "#4A65BF"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M12 4a3.605 3.605 0 00-3.6 3.604c0 1.95 1.523 3.528 3.509 3.596a.61.61 0 01.167 0h.053a3.593 3.593 0 003.47-3.596A3.605 3.605 0 0012 4zM6 16.002c0-.958.597-1.854 1.679-2.516 1.195-.722 2.758-1.085 4.321-1.086v7.2c-1.568 0-3.136-.366-4.33-1.098C6.597 17.848 6 16.96 6 16.002zM18 16.002c0-.958-.597-1.854-1.679-2.516-1.195-.722-2.759-1.085-4.321-1.086v7.2c1.568 0 3.136-.366 4.33-1.098 1.073-.654 1.67-1.542 1.67-2.5z",
        fill: "#fff"
      }), (0, jsx_runtime_1.jsx)("circle", {
        cx: 16,
        cy: 16,
        r: 5,
        fill: "#4A65BF"
      }), (0, jsx_runtime_1.jsx)("path", {
        d: "M19.62 14.582c-.703 0-.99-.496-.64-1.105a.735.735 0 00-.272-1.004l-.67-.384a.647.647 0 00-.885.232l-.043.074c-.349.609-.923.609-1.276 0l-.042-.074a.636.636 0 00-.877-.232l-.67.384a.74.74 0 00-.272 1.008c.353.605.066 1.101-.636 1.101a.739.739 0 00-.737.737v.683c0 .403.33.736.737.736.702 0 .989.497.636 1.106a.736.736 0 00.271 1.004l.671.384A.647.647 0 0015.8 19l.042-.073c.35-.61.923-.61 1.276 0l.043.073a.647.647 0 00.884.233l.67-.384a.736.736 0 00.272-1.004c-.353-.61-.066-1.106.636-1.106.403 0 .737-.33.737-.736v-.683a.745.745 0 00-.74-.737zm-3.142 2.339c-.694 0-1.26-.566-1.26-1.26 0-.695.566-1.26 1.26-1.26.694 0 1.26.565 1.26 1.26 0 .694-.566 1.26-1.26 1.26z",
        fill: "#fff"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
RoleManage.displayName = "RoleManage";
exports["default"] = RoleManage;