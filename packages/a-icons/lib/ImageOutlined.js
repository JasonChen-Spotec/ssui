"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function ImageOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.759 2h8.482c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 011.748 1.748c.247.485.346 1.002.392 1.564C22 6.29 22 6.954 22 7.758v8.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 01-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H6.893c-.27 0-.536 0-.75-.019l-.025-.002c-.13-.006-.253-.014-.37-.023-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C2 17.71 2 17.046 2 16.242V7.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392C6.29 2 6.954 2 7.758 2zM7.8 20h-.386l8.162-8.162c.21-.21.325-.323.414-.4l.01-.008.01.009c.09.076.205.19.414.4L20 15.413v.786c0 .857 0 1.439-.038 1.889-.035.438-.1.663-.18.819a2 2 0 01-.874.874c-.156.08-.38.145-.819.18-.45.037-1.032.038-1.889.038H7.8zM20 12.586l-2.184-2.184a9.164 9.164 0 00-.511-.488 2.022 2.022 0 00-.687-.402 2 2 0 00-1.236 0c-.29.094-.512.254-.687.402-.159.135-.332.31-.51.488l-8.553 8.551c-.19.192-.379.38-.517.544-.042.051-.1.122-.158.21a2 2 0 01-.739-.799c-.08-.156-.145-.38-.18-.819C4 17.639 4 17.057 4 16.2V7.8c0-.857 0-1.439.038-1.889.035-.438.1-.663.18-.819a2 2 0 01.874-.874c.156-.08.38-.145.819-.18C6.361 4 6.943 4 7.8 4h8.4c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 01.874.874c.08.156.145.38.18.819C20 6.361 20 6.943 20 7.8v4.786zM8.5 7.5a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
ImageOutlined.displayName = "ImageOutlined";
exports["default"] = ImageOutlined;