function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function GrowthGraphOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M2.032 2.154v16.692a3 3 0 003 3h16.936v-2H5.032a1 1 0 01-1-1V2.154h-2z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M16.913 12.726l4.602-4.913-1.46-1.367-4.498 4.802-3.123-1.622a3.744 3.744 0 01-.037-.02c-.134-.07-.412-.22-.722-.247a1.5 1.5 0 00-.758.13c-.283.129-.495.361-.598.473a2.69 2.69 0 01-.028.031l-4.603 4.912 1.46 1.368 4.499-4.802 3.123 1.622.037.02c.134.07.411.22.72.247a1.5 1.5 0 00.76-.13c.282-.129.495-.361.597-.473l.029-.031z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
GrowthGraphOutlined.displayName = "GrowthGraphOutlined";
export default GrowthGraphOutlined;