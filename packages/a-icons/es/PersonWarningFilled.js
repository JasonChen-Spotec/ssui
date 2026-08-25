function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function PersonWarningFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M17.5 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z",
        fill: "currentColor"
      }), _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18 12.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm.752 2.25v3.5h-1.5v-3.5h1.5zm0 6.5v-1.5h-1.504v1.5h1.505z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M7 14h4.655a7.464 7.464 0 00-1.155 4c0 1.47.423 2.842 1.155 4H2v-3a5 5 0 015-5z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
PersonWarningFilled.displayName = "PersonWarningFilled";
export default PersonWarningFilled;