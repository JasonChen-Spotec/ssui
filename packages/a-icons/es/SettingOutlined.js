function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function SettingOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.06 1.398a1 1 0 011.157.51 2 2 0 003.566 0 1 1 0 011.158-.51 10.984 10.984 0 014.548 2.545 1 1 0 01.216 1.174A2 2 0 0021.5 8h.028a1 1 0 01.968.7 11.046 11.046 0 01.28 5.515 1 1 0 01-1.077.795 2 2 0 00-1.729 3.279 1 1 0 01-.043 1.338 10.997 10.997 0 01-4.784 2.917 1 1 0 01-1.237-.654 2.001 2.001 0 00-3.812 0 1 1 0 01-1.237.654 10.997 10.997 0 01-4.784-2.917 1 1 0 01-.043-1.338A2 2 0 002.3 15.01a1 1 0 01-1.078-.795 11.046 11.046 0 01.28-5.515 1 1 0 01.97-.7H2.5a2 2 0 001.795-2.883 1 1 0 01.216-1.174A10.984 10.984 0 019.06 1.398zM6.367 4.979a4.004 4.004 0 01-3.13 4.953 9.03 9.03 0 00-.179 3.107 4 4 0 013.023 5.742 9.002 9.002 0 002.546 1.567A3.996 3.996 0 0112 18.5c1.418 0 2.661.737 3.372 1.848a9 9 0 002.546-1.567 4 4 0 013.023-5.742 9.103 9.103 0 00-.18-3.107 4.001 4.001 0 01-3.13-4.953 8.986 8.986 0 00-2.544-1.436A3.992 3.992 0 0112 5a3.992 3.992 0 01-3.087-1.457A8.985 8.985 0 006.368 4.98z",
        fill: "currentColor"
      }), _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
SettingOutlined.displayName = "SettingOutlined";
export default SettingOutlined;