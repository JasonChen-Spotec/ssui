function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function CircleCLetterOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M23 12c0-6.072-4.928-11-11-11S1 5.928 1 12s4.928 11 11 11 11-4.928 11-11zM3.2 12c0-4.862 3.938-8.8 8.8-8.8s8.8 3.938 8.8 8.8-3.938 8.8-8.8 8.8A8.798 8.798 0 013.2 12z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M12 7c1.82 0 3.413.974 4.288 2.428l-1.715 1.029A3 3 0 1012 15a2.998 2.998 0 002.573-1.456l1.715 1.028A4.999 4.999 0 017 12c0-2.76 2.24-5 5-5z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
CircleCLetterOutlined.displayName = "CircleCLetterOutlined";
export default CircleCLetterOutlined;