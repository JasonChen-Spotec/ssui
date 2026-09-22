function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function AccountWithdrawal(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 21 21",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsxs("g", {
        clipPath: "url(#account-withdrawal_svg__clip0_22022_10306)",
        children: [_jsx("path", {
          fill: "#fff",
          d: "M0 0h21v21H0z"
        }), _jsx("path", {
          d: "M15.674 6.23a7.313 7.313 0 11-10.341 0",
          stroke: "#121212",
          strokeWidth: 1.5
        }), _jsx("path", {
          d: "M10.5 11.625V1.5l3.75 3.375M10.5 1.5L6.75 4.875",
          stroke: "#DC4946",
          strokeWidth: 1.5,
          strokeLinejoin: "round"
        })]
      }), _jsx("defs", {
        children: _jsx("clipPath", {
          id: "account-withdrawal_svg__clip0_22022_10306",
          children: _jsx("path", {
            fill: "#fff",
            d: "M0 0h21v21H0z"
          })
        })
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
AccountWithdrawal.displayName = "AccountWithdrawal";
export default AccountWithdrawal;