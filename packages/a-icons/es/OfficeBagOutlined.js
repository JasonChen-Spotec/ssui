function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function OfficeBagOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 3v2H4a3 3 0 00-3 3v11a3 3 0 003 3h16a3 3 0 003-3V8a3 3 0 00-3-3h-3V3a2 2 0 00-2-2H9a2 2 0 00-2 2zm8 0H9v2h6V3zm5 4a1 1 0 011 1v4h-6v-1a1 1 0 00-1-1h-4a1 1 0 00-1 1v1H3V8a1 1 0 011-1h16zM9 14H3v5a1 1 0 001 1h16a1 1 0 001-1v-5h-6v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2zm2 1v-3h2v3h-2z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
OfficeBagOutlined.displayName = "OfficeBagOutlined";
export default OfficeBagOutlined;