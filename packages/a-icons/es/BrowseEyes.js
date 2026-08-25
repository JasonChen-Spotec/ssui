function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function BrowseEyes(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("rect", {
        x: 0.5,
        y: 0.5,
        width: 23,
        height: 23,
        rx: 11.5,
        fill: "#EFFDF4"
      }), _jsx("rect", {
        x: 0.5,
        y: 0.5,
        width: 23,
        height: 23,
        rx: 11.5,
        stroke: "#fff"
      }), _jsx("path", {
        d: "M10.2 12a1.8 1.8 0 113.6 0 1.8 1.8 0 01-3.6 0z",
        fill: "#377C51"
      }), _jsx("path", {
        d: "M12 6.6a7.503 7.503 0 00-7.147 5.218L4.795 12l.058.182a7.503 7.503 0 0014.293 0l.058-.182-.058-.182A7.503 7.503 0 0011.999 6.6zM12 9a3 3 0 110 6 3 3 0 010-6z",
        fill: "#377C51"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
BrowseEyes.displayName = "BrowseEyes";
export default BrowseEyes;