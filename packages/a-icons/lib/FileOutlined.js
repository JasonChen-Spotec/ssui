"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function FileOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.09 4.055C9.97 4.013 9.813 4 9.022 4H5.2c-.577 0-.949 0-1.232.024-.272.022-.373.06-.422.085a1 1 0 00-.437.437c-.025.05-.063.15-.085.422C3.004 5.217 3 5.535 3 6h8.382l-.392-.784c-.353-.707-.435-.841-.526-.93a1 1 0 00-.374-.231zM13.618 6l-.84-1.678a57.167 57.167 0 01-.055-.112c-.264-.53-.497-.998-.86-1.353a3 3 0 00-1.12-.693c-.48-.166-1.003-.165-1.596-.164H5.162c-.528 0-.982 0-1.357.03-.395.033-.789.104-1.167.297a3 3 0 00-1.311 1.311c-.193.378-.264.772-.296 1.167C1 5.18 1 5.635 1 6.16v10.08c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 001.748 1.748c.485.247 1.002.346 1.564.392C5.29 22 5.954 22 6.758 22h10.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 001.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01v-4.483c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 00-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C18.71 6 18.046 6 17.242 6h-3.624zm-.638 2h4.22c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 01.874.874c.08.156.145.38.18.819.037.45.038 1.032.038 1.889v4.4c0 .857 0 1.439-.038 1.889-.035.438-.1.663-.18.819a2 2 0 01-.874.874c-.156.08-.38.145-.819.18-.45.037-1.032.038-1.889.038H6.8c-.857 0-1.439 0-1.889-.038-.438-.035-.663-.1-.819-.18a2 2 0 01-.874-.874c-.08-.156-.145-.38-.18-.82C3 17.639 3 17.058 3 16.2V8h9.98z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
FileOutlined.displayName = "FileOutlined";
exports["default"] = FileOutlined;