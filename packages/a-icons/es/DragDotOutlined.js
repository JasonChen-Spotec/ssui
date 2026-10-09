function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function DragDotOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        d: "M7.5 3h3v3h-3V3zm6 0h3v3h-3V3zm-6 7.5h3v3h-3v-3zm6 0h3v3h-3v-3zm-6 7.5h3v3h-3v-3zm6 0h3v3h-3v-3z",
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
DragDotOutlined.displayName = "DragDotOutlined";
export default DragDotOutlined;