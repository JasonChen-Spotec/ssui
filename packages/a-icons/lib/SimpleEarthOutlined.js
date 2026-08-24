"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function SimpleEarthOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.223 10a9.029 9.029 0 000 4h3.94A16.3 16.3 0 017 11.98 16.3 16.3 0 017.162 10H3.223zm.713-2h3.643a16.302 16.302 0 012.147-4.71A9.02 9.02 0 003.936 8zM12 3.55A14.3 14.3 0 009.664 8h4.672A14.3 14.3 0 0012 3.55zM14.814 10H9.186c-.108.658-.17 1.326-.186 2 .015.674.078 1.342.186 2h5.628c.108-.658.17-1.326.186-2a14.287 14.287 0 00-.186-2zm2.024 4A16.31 16.31 0 0017 11.98a16.31 16.31 0 00-.162-1.98h3.939a9.033 9.033 0 010 4h-3.94zm-2.502 2H9.664A14.3 14.3 0 0012 20.45 14.3 14.3 0 0014.336 16zm-4.61 4.71A16.303 16.303 0 017.579 16H3.936a9.02 9.02 0 005.79 4.71zm4.548 0A16.303 16.303 0 0016.421 16h3.643a9.02 9.02 0 01-5.79 4.71zM20.064 8h-3.643a16.302 16.302 0 00-2.147-4.71A9.02 9.02 0 0120.064 8zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
SimpleEarthOutlined.displayName = "SimpleEarthOutlined";
exports["default"] = SimpleEarthOutlined;