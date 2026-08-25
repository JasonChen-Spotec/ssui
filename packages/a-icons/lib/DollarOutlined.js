"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function DollarOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.759 2h8.482c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 011.748 1.748c.247.485.346 1.002.392 1.564C22 6.29 22 6.954 22 7.758v8.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 01-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H7.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C2 17.71 2 17.046 2 16.242V7.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392C6.29 2 6.954 2 7.758 2zM5.91 4.038c-.438.035-.663.1-.819.18a2 2 0 00-.874.874c-.08.156-.145.38-.18.819C4 6.361 4 6.943 4 7.8v8.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 00.874.874c.156.08.38.145.819.18C6.361 20 6.943 20 7.8 20h8.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 00.874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889V7.8c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 00-.874-.874c-.156-.08-.38-.145-.819-.18C17.639 4 17.057 4 16.2 4H7.8c-.857 0-1.439 0-1.889.038z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.889 5v1.4h.148C14.673 6.4 16 7.793 16 9.511v.933h-1.778v-.933c0-.687-.53-1.244-1.185-1.244h-1.926c-.736 0-1.333.626-1.333 1.4 0 .773.597 1.4 1.333 1.4h1.778c1.718 0 3.111 1.462 3.111 3.266S14.607 17.6 12.889 17.6V19H11.11v-1.4h-.148C9.327 17.6 8 16.207 8 14.489v-.933h1.778v.933c0 .687.53 1.244 1.185 1.244h1.926c.736 0 1.333-.627 1.333-1.4 0-.773-.597-1.4-1.333-1.4H11.11C9.393 12.933 8 11.471 8 9.667S9.393 6.4 11.111 6.4V5h1.778z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
DollarOutlined.displayName = "DollarOutlined";
exports["default"] = DollarOutlined;