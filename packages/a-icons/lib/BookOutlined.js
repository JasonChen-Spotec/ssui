"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function BookOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.5 1c.075 0 .149.008.22.024.935.04 1.566.142 2.096.412a4 4 0 011.748 1.748C21 4.04 21 5.16 21 7.4v9.2c0 2.24 0 3.36-.436 4.216a4 4 0 01-1.748 1.748C17.96 23 16.84 23 14.6 23H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 01-1.748-1.748C3 19.96 3 18.84 3 16.6V7.4c0-2.24 0-3.36.436-4.216a4 4 0 011.748-1.748C6.04 1 7.16 1 9.4 1h7.1zm-7 2h-.1c-1.153 0-1.898.002-2.464.048-.544.044-.745.12-.844.17a2 2 0 00-.874.874c-.05.099-.126.3-.17.844C5.002 5.502 5 6.246 5 7.4V17h14V7.4c0-1.153-.002-1.898-.048-2.464-.044-.544-.12-.745-.17-.844a2 2 0 00-.874-.874A1.393 1.393 0 0017.5 3.1V11a1 1 0 01-1.723.691L13.5 9.311l-2.277 2.38A1 1 0 019.5 11V3zm2 0v5.508l1.277-1.336a1 1 0 011.446 0L15.5 8.508V3L14.6 3h-3.1zM5.048 19.064L5.043 19h13.914l-.005.064c-.044.544-.12.745-.17.844a2 2 0 01-.874.874c-.099.05-.3.126-.844.17-.566.046-1.31.048-2.464.048H9.4c-1.153 0-1.898-.002-2.464-.048-.544-.044-.745-.12-.844-.17a2 2 0 01-.874-.874c-.05-.099-.126-.3-.17-.844z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
BookOutlined.displayName = "BookOutlined";
exports["default"] = BookOutlined;