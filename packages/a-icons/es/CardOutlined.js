function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function CardOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M7 4.5h10v2H7v-2zM8.732 10.64L9.865 12H9v2h2v1H9v2h2v2h2v-2h2v-2h-2v-1h2v-2h-.865l1.133-1.36-1.536-1.28L12 11.438 10.268 9.36l-1.536 1.28z",
        fill: "currentColor"
      }), _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 1a3 3 0 00-3 3v3a3 3 0 003 3v10a3 3 0 003 3h8a3 3 0 003-3V10a3 3 0 003-3V4a3 3 0 00-3-3H5zM4 4a1 1 0 011-1h14a1 1 0 011 1v3a1 1 0 01-1 1h-1.5a.5.5 0 00-.5.5V20a1 1 0 01-1 1H8a1 1 0 01-1-1V8.5a.5.5 0 00-.5-.5H5a1 1 0 01-1-1V4z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
CardOutlined.displayName = "CardOutlined";
export default CardOutlined;