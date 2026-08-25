function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function AddMoneyFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18 12.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-.75 4.75h-2v1.5h2v2h1.5v-2h2v-1.5h-2v-2h-1.5v2z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M1.048 14.948c.496.325 1.04.593 1.593.814 1.804.721 4.145 1.119 6.62 1.119.448 0 .892-.015 1.328-.04A7.56 7.56 0 0010.5 18a7.47 7.47 0 00.76 3.293c.045.136.092.27.144.403a20.05 20.05 0 01-2.142.114c-4.537 0-8.214-1.472-8.214-3.287v-3.575zM17.477 10.52a7.5 7.5 0 00-6.155 4.065 20.1 20.1 0 01-2.06.105c-4.537 0-8.214-1.471-8.214-3.286V7.83a9.05 9.05 0 001.593.814c1.804.721 4.145 1.119 6.62 1.119 2.476 0 4.819-.398 6.623-1.12a9.053 9.053 0 001.593-.813v2.69zM9.262 1c3.402 0 6.322.828 7.57 2.007.415.393.645.826.645 1.28C17.476 6.1 13.798 7.57 9.262 7.57s-8.214-1.47-8.214-3.285C1.048 2.472 4.725 1 9.262 1z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
AddMoneyFilled.displayName = "AddMoneyFilled";
export default AddMoneyFilled;