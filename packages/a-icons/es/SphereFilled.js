function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function SphereFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M11 1.045C5.394 1.55 1 6.262 1 12c0 6.075 4.925 11 11 11 2.154 0 4.164-.62 5.86-1.69l-6.654-8.702A1 1 0 0111 12V1.045z",
        fill: "currentCOlor"
      }), _jsx("path", {
        d: "M19.449 20.094A10.972 10.972 0 0022.955 13h-8.931l5.425 7.094zM22.955 11H13V1.045A11.003 11.003 0 0122.955 11z",
        fill: "currentCOlor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
SphereFilled.displayName = "SphereFilled";
export default SphereFilled;