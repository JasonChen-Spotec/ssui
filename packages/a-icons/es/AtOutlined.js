function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function AtOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.3 2.055A11 11 0 0123 12v1a4 4 0 01-7.26 2.318A5 5 0 1115 8V7h2v6a2 2 0 004 0v-1a9 9 0 10-3.528 7.146l.794-.608 1.216 1.588-.794.608A11 11 0 117.3 2.055zM15 12a3 3 0 10-6 0 3 3 0 006 0z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
AtOutlined.displayName = "AtOutlined";
export default AtOutlined;