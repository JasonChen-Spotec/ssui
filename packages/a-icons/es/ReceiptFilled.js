function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function ReceiptFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.759 2h6.482c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 011.748 1.748c.247.485.346 1.002.392 1.564C21 6.29 21 6.954 21 7.758V21a1 1 0 01-1.588.809l-2.133-1.552-1.904 1.524a1 1 0 01-1.213.028L12 20.236 9.838 21.81a1 1 0 01-1.213-.028l-1.904-1.523-2.133 1.55A1 1 0 013 21V7.759c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392C7.29 2 7.954 2 8.758 2zM8 16.35l9.414-9.413L16 5.522l-9.414 9.415L8 16.35zm1-9.913a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm4.5 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
ReceiptFilled.displayName = "ReceiptFilled";
export default ReceiptFilled;