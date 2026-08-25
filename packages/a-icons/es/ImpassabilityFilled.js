function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function ImpassabilityFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zM7 11v2h10v-2H7z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
ImpassabilityFilled.displayName = "ImpassabilityFilled";
export default ImpassabilityFilled;