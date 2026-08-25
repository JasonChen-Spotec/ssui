function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function RoleDirect(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        d: "M9 2a2 2 0 012 2v2h2V4a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2V8h-2v9h2.008v-1.999a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2h-5a2 2 0 01-2-2V19H11v1a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h5z",
        fill: "#47A92A"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
RoleDirect.displayName = "RoleDirect";
export default RoleDirect;