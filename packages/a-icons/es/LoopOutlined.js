function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function LoopOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11 .586l3.707 3.707a1 1 0 010 1.414L11 9.414 9.586 8l2-2H9a6 6 0 00-2.57 11.423l.902.43-.858 1.806-.903-.43A8 8 0 019 4h2.585l-2-1.999L11 .586zm6.526 3.755l.903.43A8 8 0 0115 20h-2.585l2 1.999L13 23.414l-3.707-3.707a1 1 0 010-1.414L13 14.586 14.414 16l-2 2H15a6 6 0 002.57-11.423l-.902-.43.858-1.806z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
LoopOutlined.displayName = "LoopOutlined";
export default LoopOutlined;