function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function MailFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M6.759 3H17.24c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 011.748 1.748c.054.106.1.213.142.323l-9.431 6.38-.013.01c-.73.51-.884.598-1.02.632a1 1 0 01-.484 0c-.136-.034-.29-.122-1.017-.63L1.396 5.264l.04-.081a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392C5.29 3 5.954 3 6.758 3z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M1.01 7.443C1 7.833 1 8.27 1 8.76v6.482c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 001.748 1.748c.485.247 1.002.346 1.564.392C5.29 21 5.954 21 6.758 21h10.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 001.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01V8.758c0-.375 0-.719-.004-1.034l-8.594 5.814-.109.077c-.544.382-1.023.718-1.567.854a3 3 0 01-1.452 0c-.544-.136-1.022-.472-1.567-.854l-.12-.085L1.01 7.443z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
MailFilled.displayName = "MailFilled";
export default MailFilled;