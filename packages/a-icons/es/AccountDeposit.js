function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function AccountDeposit(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 21 21",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("rect", {
        fill: "#fff"
      }), _jsx("path", {
        d: "M17.25 12.75V15A2.25 2.25 0 0115 17.25H6A2.25 2.25 0 013.75 15v-2.25",
        stroke: "#DC4946",
        strokeWidth: 1.5
      }), _jsx("path", {
        d: "M6.75 14.25h7.5",
        stroke: "#121212",
        strokeWidth: 1.5
      }), _jsx("path", {
        d: "M10.5 2.25v7.5L6 5.531M10.5 9.75l4.5-4.5",
        stroke: "#121212",
        strokeWidth: 1.5,
        strokeLinejoin: "round"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
AccountDeposit.displayName = "AccountDeposit";
export default AccountDeposit;