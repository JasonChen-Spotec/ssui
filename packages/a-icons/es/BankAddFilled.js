function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function BankAddFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M4 4a3 3 0 00-3 3v2h22V7a3 3 0 00-3-3H4zM1 17v-6h22v3.225A5.5 5.5 0 0013.875 20H4a3 3 0 01-3-3z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M20 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
BankAddFilled.displayName = "BankAddFilled";
export default BankAddFilled;