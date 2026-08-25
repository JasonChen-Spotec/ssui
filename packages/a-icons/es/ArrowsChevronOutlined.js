function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function ArrowsChevronOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.586 8l4.707-4.707a1 1 0 011.414 0L12.414 8 11 9.414l-3-3V21H6V6.414l-3 3L1.586 8zM13 14.586l3 3V3h2v14.586l3-3L22.414 16l-4.707 4.707a1 1 0 01-1.414 0L11.586 16 13 14.586z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
ArrowsChevronOutlined.displayName = "ArrowsChevronOutlined";
export default ArrowsChevronOutlined;