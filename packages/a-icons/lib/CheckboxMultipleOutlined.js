"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function CheckboxMultipleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        d: "M15.389 21c1.261 0 2.147 0 2.838-.057.679-.056 1.081-.16 1.392-.318a3.445 3.445 0 001.506-1.506c.158-.31.262-.713.318-1.392.056-.691.057-1.577.057-2.838V6h2v8.932c0 1.208 0 2.176-.064 2.957-.066.803-.203 1.498-.53 2.138a5.445 5.445 0 01-2.379 2.38c-.64.326-1.335.463-2.138.53-.781.063-1.749.063-2.957.063H6.5v-2h8.889zM10.217 13.702l5.697-5.863-1.434-1.393L9.46 11.61l-3.02-2.78L5.088 10.3l3.735 3.44a1 1 0 001.395-.039z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.095 19.111H6.016c-.589 0-1.09 0-1.501-.034-.433-.035-.853-.112-1.256-.317a3.222 3.222 0 01-1.408-1.408c-.205-.402-.282-.823-.317-1.256-.034-.411-.034-.912-.034-1.501V5.516c0-.589 0-1.09.034-1.501.035-.433.112-.853.317-1.256.31-.606.802-1.099 1.408-1.408.403-.205.823-.282 1.256-.317C4.926 1 5.427 1 6.016 1h9.079c.589 0 1.09 0 1.501.034.433.035.854.112 1.256.317.606.31 1.099.802 1.408 1.408.205.403.282.823.317 1.256.034.411.034.913.034 1.501v9.079c0 .589 0 1.09-.034 1.501-.035.433-.112.854-.317 1.256a3.222 3.222 0 01-1.408 1.408c-.402.205-.823.282-1.256.317-.411.034-.912.034-1.501.034zM4.167 16.978c.074.037.202.08.51.106.32.026.74.027 1.379.027h9c.638 0 1.057 0 1.378-.027.308-.025.437-.069.51-.106.23-.117.417-.304.534-.534.037-.073.08-.202.106-.51.026-.32.027-.74.027-1.378v-9c0-.64 0-1.058-.027-1.379-.025-.308-.069-.436-.106-.51a1.223 1.223 0 00-.534-.534c-.073-.037-.202-.08-.51-.106-.32-.026-.74-.027-1.378-.027h-9c-.64 0-1.058 0-1.379.027-.308.025-.436.069-.51.106-.23.117-.417.304-.534.534-.037.074-.08.202-.106.51-.026.32-.027.74-.027 1.379v9c0 .638 0 1.057.027 1.378.025.308.069.437.106.51.117.23.304.417.534.534z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
CheckboxMultipleOutlined.displayName = "CheckboxMultipleOutlined";
exports["default"] = CheckboxMultipleOutlined;