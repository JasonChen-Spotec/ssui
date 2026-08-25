function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function BookFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 5a4 4 0 014-4h10a4 4 0 014 4v14a4 4 0 01-4 4H7a4 4 0 01-4-4V5zm4 16a2 2 0 01-2-2h14a2 2 0 01-2 2H7zm4.361-9.9a.5.5 0 01-.861-.346V3h6v7.754a.5.5 0 01-.861.346L13.86 9.24a.5.5 0 00-.722 0L11.36 11.1z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
BookFilled.displayName = "BookFilled";
export default BookFilled;