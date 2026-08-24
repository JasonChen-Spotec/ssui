function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function InvoiceOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M11 8.696v-1H9v1a2.5 2.5 0 000 5h2l.09.008a.5.5 0 01-.09.992H7v2h2v1h2v-1a2.5 2.5 0 000-5H9l-.09-.008a.5.5 0 01.09-.992h4v-2h-2z",
        fill: "currentColor"
      }), _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.65 2.24A1 1 0 002 3v13.241c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 001.748 1.748c.485.247 1.002.346 1.564.392C6.29 22 6.954 22 7.758 22H19a3 3 0 003-3V9.6A1.6 1.6 0 0020.4 8H18V3a1 1 0 00-1.65-.76L13.5 4.684 10.65 2.24a1 1 0 00-1.3 0L6.5 4.683 3.65 2.24zM16 20V5.174L14.15 6.76a1 1 0 01-1.3 0L10 4.317 7.15 6.76a1 1 0 01-1.3 0L4 5.174V16.2c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 00.874.874c.156.08.38.145.819.18C6.361 20 6.943 20 7.8 20H16zm4-1a1 1 0 11-2 0v-9h2v9z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
InvoiceOutlined.displayName = "InvoiceOutlined";
export default InvoiceOutlined;