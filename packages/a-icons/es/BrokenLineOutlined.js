function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function BrokenLineOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9 2a1 1 0 01.949.684L15 17.838l2.051-6.154A1 1 0 0118 11h5v2h-4.28l-2.771 8.316a1 1 0 01-1.898 0L9 6.162l-2.051 6.154A1 1 0 016 13H1v-2h4.28L8.05 2.684A1 1 0 019 2z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
BrokenLineOutlined.displayName = "BrokenLineOutlined";
export default BrokenLineOutlined;