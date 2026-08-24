function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function CirclePointsTriangleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M11.925 7.22a2.23 2.23 0 100-4.46 2.23 2.23 0 000 4.46zM4.925 21.09a2.1 2.1 0 100-4.2 2.1 2.1 0 000 4.2zM8.325 11.27c-.25.519-.4 1.098-.4 1.716v-.006.01-.004c.002 2.496.951 3.935 2.48 5.454.3.31.64.57 1 .82-.67.26-1.26.37-1.76.34-.66-.04-1.23-.3-1.73-.7a2.981 2.981 0 00-2.77-2.89c.06-1.96.98-3.29 2.19-4.16.31-.22.65-.41.99-.58z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M12.175 8.97c1.61.1 2.95 1.19 3.48 2.64.04-.17.08-.35.1-.52.17-1.27-.2-2.69-1.69-4.01-.55.56-1.31.91-2.15.91-.97 0-1.82-.47-2.37-1.18-.65.14-1.39.45-1.92 1.01-.49.51-.85 1.29-.7 2.5 1.67-1.02 3.65-1.42 5.24-1.35h.01z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M11.925 15.94c-1.63 0-2.95-1.32-2.95-2.95v-.01a2.949 2.949 0 115.04 2.08.259.259 0 01-.049.05l-.009.009a2.901 2.901 0 01-2.032.821z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M18.765 13.71c-.11-.75-.51-1.65-1.5-2.58 0 .05 0 .11-.01.16-.23 1.69-1.19 3.22-2.32 4.3-.73.85-1.8 1.39-3.01 1.39-.33 0-.65-.05-.97-.13.039.04.077.082.116.124.122.132.247.267.384.396 1.06 1.06 2.53 1.74 4.48 1.48.06-1.33.98-2.43 2.23-2.76.37-.47.75-1.35.6-2.39v.01z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M21.175 18.99a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
CirclePointsTriangleFilled.displayName = "CirclePointsTriangleFilled";
export default CirclePointsTriangleFilled;