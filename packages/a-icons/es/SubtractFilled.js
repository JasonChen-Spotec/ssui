function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function SubtractFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      width: 18,
      height: 22,
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        d: "M10 6a2 2 0 002 2h6v8.241c0 .805 0 1.47-.044 2.011-.046.562-.144 1.08-.392 1.564a4.002 4.002 0 01-1.748 1.748c-.485.248-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H5.758c-.805 0-1.47 0-2.011-.044-.562-.046-1.08-.144-1.564-.392a4.001 4.001 0 01-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C0 17.711 0 17.046 0 16.242V5.758c0-.805 0-1.47.044-2.011.046-.562.144-1.08.392-1.564A4.001 4.001 0 012.184.436C2.669.188 3.186.09 3.748.044 4.29 0 4.954 0 5.758 0H10v6zm-2 4v4.586l-2-2L4.586 14l3.707 3.707a1 1 0 001.414 0L13.414 14 12 12.586l-2 2V10H8zm9.414-4H12V.586L17.414 6z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
SubtractFilled.displayName = "SubtractFilled";
export default SubtractFilled;