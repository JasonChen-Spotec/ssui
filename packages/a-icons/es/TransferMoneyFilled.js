function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function TransferMoneyFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17 1a4 4 0 014 4v7.875A5.5 5.5 0 0016.705 23H7a4 4 0 01-4-4V5a4 4 0 014-4h10zm-5 5.121L9.879 4 8.465 5.414l2.12 2.121H8v2h3v1H8v2h3v2h2v-2h3v-2h-3v-1h3v-2h-2.586l2.121-2.12L14.121 4 12 6.121z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M22.707 17.293a1 1 0 010 1.414L19 22.414 17.586 21l2-2H15v-2h4.586l-2-2L19 13.586l3.707 3.707z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
TransferMoneyFilled.displayName = "TransferMoneyFilled";
export default TransferMoneyFilled;