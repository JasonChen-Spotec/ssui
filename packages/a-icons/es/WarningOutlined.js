function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function WarningOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M14.414 8l-2.726 2.726 2.76 1.38a1 1 0 01.26 1.601L11 17.414 9.586 16l2.726-2.726-2.76-1.38a1 1 0 01-.26-1.601L13 6.586 14.414 8z",
        fill: "currentColor"
      }), _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21 21V10a9 9 0 10-18 0v11H1v2h22v-2h-2zm-2 0V10a7 7 0 10-14 0v11h14z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
WarningOutlined.displayName = "WarningOutlined";
export default WarningOutlined;