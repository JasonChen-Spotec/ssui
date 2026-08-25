function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function RefreshRightOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 12C2 6.477 6.477 2 12 2a9.972 9.972 0 017.073 2.931c.64.64 1.325 1.431 1.927 2.163V3h2v7a1 1 0 01-1 1h-7V9h4.97c-.693-.869-1.553-1.897-2.311-2.655a8 8 0 102.029 7.878l.277-.961 1.921.554-.277.961C20.405 18.948 16.56 22 12 22 6.477 22 2 17.523 2 12z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
RefreshRightOutlined.displayName = "RefreshRightOutlined";
export default RefreshRightOutlined;