function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function FourDotFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.5 6.75a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0zM17.25 2.5a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM17.25 13a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM6.75 13a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
FourDotFilled.displayName = "FourDotFilled";
export default FourDotFilled;