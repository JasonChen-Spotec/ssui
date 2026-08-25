function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function AlertTriangleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.722 2.375c-.776-1.3-2.658-1.3-3.434 0L.822 18.225c-.797 1.333.164 3.025 1.717 3.025H21.47c1.553 0 2.514-1.692 1.717-3.026l-9.466-15.85zM11 14h2V8h-2v6zm2.01 4v-2H11v2h2.01z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
AlertTriangleFilled.displayName = "AlertTriangleFilled";
export default AlertTriangleFilled;