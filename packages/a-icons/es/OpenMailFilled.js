function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function OpenMailFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M11.534.965a3 3 0 011.371 0c.515.12.973.42 1.494.759l7.638 4.964.056.037.1.064-9.418 6.27a1 1 0 01-1.109 0l-9.41-6.276.09-.058.057-.037 7.637-4.964c.521-.34.979-.638 1.494-.76z",
        fill: "currentCOlor"
      }), _jsx("path", {
        d: "M1.223 8.499c-.004.107-.004.21-.004.303v7.439c0 .805 0 1.47.045 2.01.046.563.144 1.08.392 1.565a4 4 0 001.748 1.748c.485.247 1.002.346 1.564.392.54.044 1.205.044 2.01.044h10.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.564-.392a4 4 0 001.749-1.748c.247-.485.345-1.002.391-1.564.045-.541.045-1.206.045-2.01V8.801c0-.09 0-.189-.004-.292l-9.333 6.215a3 3 0 01-3.327-.002L1.223 8.5z",
        fill: "currentCOlor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
OpenMailFilled.displayName = "OpenMailFilled";
export default OpenMailFilled;