function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function PersonLeftArrowFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        d: "M14.5 7a5 5 0 11-10 0 5 5 0 0110 0zM22.707 17.293L19 13.586 17.586 15l2 2H15v2h4.586l-2 2L19 22.414l3.707-3.707a1 1 0 000-1.414zM6 14a5 5 0 00-5 5v3h12v-8H6zM17 7a3.001 3.001 0 01-2 2.83v2.07a5.002 5.002 0 000-9.8v2.07c1.165.413 2 1.524 2 2.83z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
PersonLeftArrowFilled.displayName = "PersonLeftArrowFilled";
export default PersonLeftArrowFilled;