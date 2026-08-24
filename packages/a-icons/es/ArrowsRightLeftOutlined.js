function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function ArrowsRightLeftOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16 1.586l4.707 4.707a1 1 0 010 1.414L16 12.414 14.586 11l3-3H3V6h14.586l-3-3L16 1.586zM9.414 13l-3 3H21v2H6.414l3 3L8 22.414l-4.707-4.707a1 1 0 010-1.414L8 11.586 9.414 13z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
ArrowsRightLeftOutlined.displayName = "ArrowsRightLeftOutlined";
export default ArrowsRightLeftOutlined;