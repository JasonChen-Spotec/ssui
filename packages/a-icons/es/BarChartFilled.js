function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function BarChartFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        d: "M7 12v9a1 1 0 01-1 1H3a1 1 0 01-1-1v-9a1 1 0 011-1h3a1 1 0 011 1zm6.5-6h-3a1 1 0 00-1 1v14a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1zM21 2h-3a1 1 0 00-1 1v18a1 1 0 001 1h3a1 1 0 001-1V3a1 1 0 00-1-1z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
BarChartFilled.displayName = "BarChartFilled";
export default BarChartFilled;