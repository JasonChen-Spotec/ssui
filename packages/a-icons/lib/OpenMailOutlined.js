"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function OpenMailOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.315.965a3 3 0 011.37 0c.516.12.973.42 1.494.759l.11.071 7.25 4.713.053.034.225.146.056.037c.206.132.465.3.662.535a2 2 0 01.377.695c.09.294.09.602.088.847v7.439c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 01-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H6.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C1 17.71 1 17.046 1 16.242V8.867v-.066c0-.245-.002-.553.088-.847a2 2 0 01.377-.695c.198-.236.456-.403.662-.535l.056-.037.226-.146.052-.034.026-.017 7.224-4.696.11-.071c.52-.34.979-.638 1.494-.76zM10.8 3.472L3.835 8l6.966 4.528c.695.452.841.53.97.56a1 1 0 00.458 0c.129-.03.275-.108.97-.56L20.165 8 13.2 3.472c-.695-.452-.841-.53-.97-.56a1 1 0 00-.457 0c-.13.03-.276.108-.97.56zm10.2 6.37l-6.712 4.363-.11.071c-.52.34-.978.638-1.493.76-.451.105-.92.105-1.371 0-.515-.122-.973-.42-1.494-.76a29.6 29.6 0 00-.11-.071l-6.71-4.362V16.2c0 .857 0 1.439.037 1.889.035.438.1.663.18.819a2 2 0 00.874.874c.156.08.38.145.82.18C5.361 20 5.942 20 6.8 20h10.4c.857 0 1.439 0 1.889-.038.439-.035.663-.1.82-.18a2 2 0 00.873-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889V9.843z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
OpenMailOutlined.displayName = "OpenMailOutlined";
exports["default"] = OpenMailOutlined;