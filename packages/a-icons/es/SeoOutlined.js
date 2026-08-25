function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function SeoOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        d: "M15.5 5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM10 8.5a5.5 5.5 0 1110.032 3.117l2.675 2.676-1.414 1.414-2.675-2.675A5.5 5.5 0 0110 8.5zM3 4h5v2H3V4zm0 7h5v2H3v-2zm18 7v2H3v-2h18z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
SeoOutlined.displayName = "SeoOutlined";
export default SeoOutlined;