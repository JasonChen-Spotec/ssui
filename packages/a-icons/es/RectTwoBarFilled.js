function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function RectTwoBarFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.241 2H7.76c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 00-1.748 1.748c-.247.485-.346 1.002-.392 1.564C2 6.29 2 6.954 2 7.758v8.483c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 001.748 1.748c.485.247 1.002.346 1.564.392C6.29 22 6.954 22 7.758 22h8.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 001.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01V7.758c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 00-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C17.71 2 17.046 2 16.242 2zM13 18h-2V6h2v12zm4 0h-2v-8h2v8zM7 18h2v-6H7v6z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
RectTwoBarFilled.displayName = "RectTwoBarFilled";
export default RectTwoBarFilled;