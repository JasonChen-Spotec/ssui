function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function DoubleTextFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 4.5a3 3 0 013-3h9a3 3 0 013 3v12a3 3 0 01-3 3H9a3 3 0 01-3-3v-12zm3 0h9v2H9v-2zm9 4H9v2h9v-2zm-9 4h5v2H9v-2z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M2.5 10v8a5 5 0 005 5H14v-2H7.5a3 3 0 01-3-3v-8h-2z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
DoubleTextFilled.displayName = "DoubleTextFilled";
export default DoubleTextFilled;