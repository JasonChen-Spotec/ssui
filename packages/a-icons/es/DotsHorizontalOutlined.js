function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function DotsHorizontalOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none"
    }, props, {
      children: _jsx("path", {
        fill: "currentColor",
        d: "M3 10.5h3v3H3zM10.5 10.5h3v3h-3zM18 10.5h3v3h-3z"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
DotsHorizontalOutlined.displayName = "DotsHorizontalOutlined";
export default DotsHorizontalOutlined;