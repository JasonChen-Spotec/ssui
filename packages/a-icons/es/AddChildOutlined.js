function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function AddChildOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none"
    }, props, {
      children: [_jsx("path", {
        d: "M18.5 18h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z",
        fill: "currentColor"
      }), _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 1a1 1 0 011 1v4l-.005.103a1 1 0 01-.893.892L10 7H7.5v3H13V9a1 1 0 011-1h7a1 1 0 011 1v4l-.005.102a1 1 0 01-.893.893L21 14h-7l-.102-.005a1 1 0 01-.893-.893L13 13v-1H7.5v6h4v2h-4a2 2 0 01-2-2V7H3l-.103-.005a1 1 0 01-.892-.892L2 6V2a1 1 0 011-1h7zm5 11h5v-2h-5v2zM4 5h5V3H4v2z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
AddChildOutlined.displayName = "AddChildOutlined";
export default AddChildOutlined;