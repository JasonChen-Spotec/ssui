function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function FilterOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18 6a2 2 0 100 4 2 2 0 000-4zm-3.874 1A4.002 4.002 0 0122 8a4 4 0 01-7.874 1H2V7h12.126zM6 14a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 017.874-1H22v2H9.874A4.002 4.002 0 012 16z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
FilterOutlined.displayName = "FilterOutlined";
export default FilterOutlined;