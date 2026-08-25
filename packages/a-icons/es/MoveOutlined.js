function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function MoveOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.293 1.293a1 1 0 011.414 0L16.414 5 15 6.414l-2-2V11h6.586l-2-2L19 7.586l3.707 3.707a1 1 0 010 1.414L19 16.414 17.586 15l2-2H13v6.586l2-2L16.414 19l-3.707 3.707a1 1 0 01-1.414 0L7.586 19 9 17.586l2 2V13H4.414l2 2L5 16.414l-3.707-3.707a1 1 0 010-1.414L5 7.586 6.414 9l-2 2H11V4.414l-2 2L7.586 5l3.707-3.707z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
MoveOutlined.displayName = "MoveOutlined";
export default MoveOutlined;