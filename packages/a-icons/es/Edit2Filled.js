function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function Edit2Filled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        d: "M18.58 2.944a2 2 0 00-2.828 0L14.107 4.59l5.303 5.303 1.645-1.645a2 2 0 000-2.828L18.58 2.944zM17.996 11.307l-5.303-5.303-8.722 8.722a.5.5 0 00-.14.27l-.932 5.53a.5.5 0 00.576.576l5.529-.933a.5.5 0 00.27-.14l8.722-8.722z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
Edit2Filled.displayName = "Edit2Filled";
export default Edit2Filled;