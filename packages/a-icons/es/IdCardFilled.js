function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function IdCardFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 3a4 4 0 00-4 4v10a4 4 0 004 4h14a4 4 0 004-4V7a4 4 0 00-4-4H5zm11.68 9.204a2.5 2.5 0 10-2.36 0A3.501 3.501 0 0012 15.5v1h7v-1a3.501 3.501 0 00-2.32-3.296zM5 9h4.5v2H5V9zm0 4h4.5v2H5v-2z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
IdCardFilled.displayName = "IdCardFilled";
export default IdCardFilled;