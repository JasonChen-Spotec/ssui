"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function AnnouncementOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M20 7.8c0-.857 0-1.439-.037-1.889-.036-.438-.101-.663-.18-.82a2 2 0 00-.875-.873c-.156-.08-.38-.145-.82-.18C17.639 4 17.058 4 16.2 4H7.8c-.857 0-1.439 0-1.889.037-.438.036-.663.101-.82.18a2 2 0 00-.873.875c-.08.156-.145.38-.18.82C4 6.361 4 6.942 4 7.8v5.7c0 .713 0 1.197.026 1.573.025.368.071.56.126.693a2 2 0 001.082 1.082c.134.055.325.1.693.126.376.025.86.026 1.573.026.44 0 .823-.006 1.19.08a3 3 0 011.232.616c.289.242.514.551.778.904l1.3 1.733 1.3-1.733c.264-.353.489-.662.778-.904.358-.298.78-.509 1.232-.616.367-.086.75-.08 1.19-.08.712 0 1.197 0 1.573-.026.368-.025.56-.071.693-.126a2 2 0 001.082-1.082c.055-.134.1-.325.126-.693.025-.376.026-.86.026-1.573V7.8zM13 10v5.5h-2V10h2zm0-4v2h-2V6h2zm9 7.5c0 .685 0 1.25-.031 1.71-.032.469-.1.903-.274 1.32a4.001 4.001 0 01-2.165 2.165c-.417.173-.851.242-1.32.274-.46.031-1.025.031-1.71.031-.536 0-.643.006-.73.026a1.001 1.001 0 00-.41.206c-.069.058-.138.139-.46.568l-1.46 1.947c-.097.13-.21.28-.317.4a1.524 1.524 0 01-.58.418c-.349.136-.737.136-1.087 0a1.524 1.524 0 01-.579-.418c-.108-.12-.22-.27-.317-.4L9.1 19.8c-.322-.43-.391-.51-.46-.568-.119-.099-.26-.17-.41-.206-.087-.02-.194-.026-.73-.026-.685 0-1.25 0-1.71-.031-.469-.032-.903-.1-1.32-.274a4.001 4.001 0 01-2.165-2.165c-.173-.417-.242-.851-.274-1.32C2 14.75 2 14.185 2 13.5V7.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4.001 4.001 0 011.748-1.748c.485-.248 1.002-.346 1.564-.392C6.298 1.999 6.976 2 7.8 2h8.4c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4.001 4.001 0 011.748 1.748c.248.485.346 1.002.392 1.564.045.55.044 1.228.044 2.052v5.7z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
AnnouncementOutlined.displayName = "AnnouncementOutlined";
exports["default"] = AnnouncementOutlined;