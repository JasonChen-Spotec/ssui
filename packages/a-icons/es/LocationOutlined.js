function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function LocationOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, props, {
      children: _jsx("path", {
        d: "M19 10a7 7 0 10-14 0c0 1.892.853 3.678 2.292 5.547 1.28 1.662 2.937 3.285 4.708 5.043 1.77-1.758 3.428-3.381 4.708-5.043C18.148 13.678 19 11.892 19 10zm-5 0a2 2 0 10-4 0 2 2 0 004 0zm2 0a4 4 0 11-8 0 4 4 0 018 0zm5 0c0 2.526-1.147 4.74-2.708 6.767-1.551 2.014-3.618 3.973-5.585 5.94a1 1 0 01-1.414 0c-1.967-1.967-4.034-3.926-5.585-5.94C4.148 14.74 3 12.527 3 10a9 9 0 0118 0z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
LocationOutlined.displayName = "LocationOutlined";
export default LocationOutlined;