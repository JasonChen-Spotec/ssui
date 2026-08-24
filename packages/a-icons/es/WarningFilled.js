function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function WarningFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21 21V10a9 9 0 10-18 0v11H1v2h22v-2h-2zm-9.312-10.274L14.414 8 13 6.586l-3.707 3.707a1 1 0 00.26 1.602l2.759 1.379L9.586 16 11 17.414l3.707-3.707a1 1 0 00-.26-1.601l-2.759-1.38z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
WarningFilled.displayName = "WarningFilled";
export default WarningFilled;