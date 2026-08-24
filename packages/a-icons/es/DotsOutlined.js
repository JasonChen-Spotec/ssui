function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function DotsOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        d: "M9.999 5a.833.833 0 100-1.666.833.833 0 000 1.667zM9.999 10.834a.833.833 0 100-1.667.833.833 0 000 1.667zM9.999 16.667a.833.833 0 100-1.666.833.833 0 000 1.666zM15.832 5a.833.833 0 100-1.666.833.833 0 000 1.667zM15.832 10.834a.833.833 0 100-1.667.833.833 0 000 1.667zM15.832 16.667a.833.833 0 100-1.666.833.833 0 000 1.666zM4.165 5a.833.833 0 100-1.666.833.833 0 000 1.667zM4.165 10.834a.833.833 0 100-1.667.833.833 0 000 1.667zM4.165 16.667a.833.833 0 100-1.666.833.833 0 000 1.666z",
        stroke: "currentColor",
        strokeWidth: 1.667,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
DotsOutlined.displayName = "DotsOutlined";
export default DotsOutlined;