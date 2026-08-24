"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function DataPanelOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsxs)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [(0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.76 2h10.48c.806 0 1.468 0 2.007.042.558.043 1.068.135 1.549.366.747.36 1.366.939 1.757 1.664.255.473.356.975.402 1.514C23 6.102 23 6.734 23 7.49v5.186c0 .757 0 1.389-.045 1.904-.046.54-.147 1.042-.402 1.514a3.92 3.92 0 01-1.757 1.665c-.48.231-.99.323-1.549.366-.539.042-1.201.042-2.008.042H6.761c-.807 0-1.47 0-2.008-.042-.558-.043-1.068-.135-1.549-.366a3.921 3.921 0 01-1.757-1.665c-.255-.472-.356-.975-.402-1.514C1 14.065 1 13.433 1 12.676V7.49c0-.756 0-1.388.045-1.904.046-.539.147-1.041.402-1.514a3.922 3.922 0 011.757-1.664c.48-.231.99-.323 1.549-.366C5.292 2 5.954 2 6.76 2zM4.908 4.036c-.443.034-.674.096-.835.174-.382.183-.681.471-.865.812-.072.134-.135.33-.17.737C3.001 6.178 3 6.722 3 7.533v5.1c0 .811 0 1.356.037 1.775.035.406.098.603.17.737.184.34.483.628.865.812.161.078.392.14.835.174.452.035 1.037.036 1.893.036h10.4c.856 0 1.44-.001 1.893-.036.443-.034.674-.096.835-.174.382-.184.681-.471.865-.812.072-.134.135-.331.17-.737.036-.42.037-.964.037-1.775v-5.1c0-.81 0-1.355-.037-1.774-.035-.406-.098-.603-.17-.737a1.923 1.923 0 00-.865-.812c-.161-.078-.392-.14-.835-.174C18.641 4 18.056 4 17.2 4H6.8c-.856 0-1.44 0-1.893.036zM6 20h12v2H6v-2z",
        fill: "currentColor"
      }), (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13 7v7h-2V7h2zM9 9v5H7V9h2zm8 2v3h-2v-3h2z",
        fill: "currentColor"
      })]
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
DataPanelOutlined.displayName = "DataPanelOutlined";
exports["default"] = DataPanelOutlined;