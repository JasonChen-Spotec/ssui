"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function FireOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.164 1.097a1 1 0 011.061.129c.132.107.282.226.447.356.992.784 2.51 1.983 3.663 3.671.704 1.033 1.263 2.365 1.64 3.433.047.137.093.27.136.4.225-.38.412-.866.486-1.49a1 1 0 011.862-.377c.3.525.504.888.704 1.345.196.449.38.972.664 1.826.613 1.845.673 3.06.673 4.16 0 4.754-3.845 8.45-8.5 8.45-4.626 0-8.5-3.508-8.5-8.29 0-1.057.111-2.7.912-4.001.546-.887.94-1.311 1.422-1.828.142-.153.292-.313.456-.497.14-.157.253-.28.346-.383a7.49 7.49 0 00.418-.484c.151-.196.304-.439.606-1.007.243-.457.482-1.21.66-2.08.175-.857.273-1.743.273-2.43a1 1 0 01.571-.903zm1.268 2.868c-.043.29-.095.58-.153.864-.193.946-.478 1.915-.853 2.62-.316.595-.531.955-.786 1.287-.168.219-.36.43-.585.678-.086.094-.177.194-.273.302m2.65-5.751c.768.65 1.579 1.43 2.25 2.416.56.818 1.05 1.959 1.406 2.97.175.497.311.945.403 1.28a8.45 8.45 0 01.117.483 1 1 0 001.607.72l.073-.055a5.64 5.64 0 001.405-1.454c.069.198.146.427.236.697.526 1.581.57 2.57.57 3.527C18.5 18.17 15.58 21 12 21c-3.609 0-6.5-2.698-6.5-6.29 0-1 .125-2.156.615-2.954.435-.707.688-.978 1.13-1.452.151-.164.325-.35.537-.588",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
FireOutlined.displayName = "FireOutlined";
exports["default"] = FireOutlined;