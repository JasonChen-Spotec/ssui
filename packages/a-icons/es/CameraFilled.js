function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function CameraFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M12 15.5a3 3 0 100-6 3 3 0 000 6z",
        fill: "currentColor"
      }), _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.558 1a3 3 0 00-2.9 1.881c-.034.085-.064.176-.1.28l-.007.023a4.16 4.16 0 01-.065.189 1 1 0 01-.867.625A4.68 4.68 0 015.406 4H5.35c-.315 0-.546 0-.744.02a4 4 0 00-3.587 3.586c-.02.197-.02.42-.019.72v7.915c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 001.748 1.748c.485.247 1.002.346 1.564.392C5.29 22 5.954 22 6.758 22h10.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 001.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01V8.324c0-.3 0-.522-.02-.72a4 4 0 00-3.586-3.586C19.197 4 18.965 4 18.65 4h-.056c-.156 0-.19 0-.213-.002a1 1 0 01-.867-.625 4.104 4.104 0 01-.065-.19l-.008-.021a3 3 0 00-2.701-2.156C14.648 1 14.553 1 14.442 1H9.558zM12 17.5a5 5 0 100-10 5 5 0 000 10z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
CameraFilled.displayName = "CameraFilled";
export default CameraFilled;