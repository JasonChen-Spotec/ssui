function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function PeopleGroupFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        d: "M7 11a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm10.5 4a4 4 0 110-8 4 4 0 010 8zm0 1a4.5 4.5 0 014.5 4.5v.5h-9v-.5a4.5 4.5 0 014.5-4.5zM7 12a5 5 0 015 5v4H2v-4a5 5 0 015-5z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
PeopleGroupFilled.displayName = "PeopleGroupFilled";
export default PeopleGroupFilled;