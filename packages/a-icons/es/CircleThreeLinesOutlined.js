function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function CircleThreeLinesOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.001 3.054a9.001 9.001 0 105.45 16.77l-5.259-7.237a1 1 0 01-.191-.588V3.054zm2 .001v7.944h7.944a8.997 8.997 0 00-7.944-7.944zm7.944 9.944h-6.981l4.103 5.649a9 9 0 002.878-5.649zm2.056-1c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11a10.965 10.965 0 017.843 3.287A10.965 10.965 0 0123 12z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
CircleThreeLinesOutlined.displayName = "CircleThreeLinesOutlined";
export default CircleThreeLinesOutlined;