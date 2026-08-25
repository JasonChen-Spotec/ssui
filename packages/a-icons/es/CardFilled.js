function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function CardFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 4a3 3 0 013-3h14a3 3 0 013 3v3a3 3 0 01-3 3v10a3 3 0 01-3 3H8a3 3 0 01-3-3V10a3 3 0 01-3-3V4zm5 .5h10v2H7v-2zm1.731 6.14L9.865 12H9v2h2v1H9v2h2v2h2v-2h2v-2h-2v-1h2v-2h-.865l1.133-1.36-1.537-1.28L12 11.438 10.268 9.36 8.73 10.64z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
CardFilled.displayName = "CardFilled";
export default CardFilled;