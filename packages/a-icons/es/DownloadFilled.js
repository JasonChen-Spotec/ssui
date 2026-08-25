function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function DownloadFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M14 8h3.793a.5.5 0 01.353.854l-5.792 5.792a.5.5 0 01-.708 0L5.854 8.854A.5.5 0 016.207 8H10V2.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V8z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M11.646 16.646L9 14H4a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2h-5l-2.646 2.646a.5.5 0 01-.708 0z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
DownloadFilled.displayName = "DownloadFilled";
export default DownloadFilled;