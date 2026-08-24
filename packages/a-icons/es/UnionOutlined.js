function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function UnionOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M19 8a3 3 0 013 3v8a3 3 0 01-3 3h-8a3 3 0 01-3-3v-2h2v2a1 1 0 001 1h8a1 1 0 001-1v-8a1 1 0 00-1-1h-8a1 1 0 00-1 1v2H8v-2a3 3 0 013-3h8z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M13 2a3 3 0 013 3v2h-2V5a1 1 0 00-1-1H5a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-2h2v2a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h8z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
UnionOutlined.displayName = "UnionOutlined";
export default UnionOutlined;