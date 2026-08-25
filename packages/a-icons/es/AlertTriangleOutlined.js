function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function AlertTriangleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.526 19.5L12 3 2.474 19.5h19.052zM13.732 2c-.77-1.333-2.694-1.333-3.464 0L.742 18.5c-.77 1.333.192 3 1.732 3h19.052c1.54 0 2.502-1.667 1.732-3L13.732 2z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M13 14h-2V8h2v6zM13.01 16v2H11v-2h2.01z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
AlertTriangleOutlined.displayName = "AlertTriangleOutlined";
export default AlertTriangleOutlined;