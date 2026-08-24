function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function LoopFolderFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M6 .586l2.707 2.707a1 1 0 010 1.414L6 7.414 4.586 6l.967-.967A3 3 0 003 8v1H1V8a5 5 0 014.601-4.984L4.586 2 6 .586zM23 15v1a5 5 0 01-4.601 4.984L19.414 22 18 23.414l-2.707-2.707a1 1 0 010-1.414L18 16.586 19.414 18l-.967.967A3 3 0 0021 16v-1h2z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M8 9a7 7 0 100 14A7 7 0 008 9z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M16 1a7.001 7.001 0 00-6.938 6.062 9.004 9.004 0 017.876 7.876A7.001 7.001 0 0016 1z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
LoopFolderFilled.displayName = "LoopFolderFilled";
export default LoopFolderFilled;