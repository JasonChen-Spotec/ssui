function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function ConfirmCircleFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        d: "M12 2a9.966 9.966 0 017.071 2.929A9.966 9.966 0 0122 12a9.966 9.966 0 01-2.929 7.071A9.966 9.966 0 0112 22a9.966 9.966 0 01-7.071-2.929A9.966 9.966 0 012 12a9.966 9.966 0 012.929-7.071A9.966 9.966 0 0112 2zm5.121 5.293a1 1 0 00-1.338-.068l-.076.068-5.293 5.293-2.293-2.293a1 1 0 00-1.338-.068l-.076.068-1.414 1.414a1 1 0 000 1.414L9 16.828a2 2 0 002.828 0l6.707-6.707a1 1 0 000-1.414l-1.414-1.414z",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinejoin: "round"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
ConfirmCircleFilled.displayName = "ConfirmCircleFilled";
export default ConfirmCircleFilled;