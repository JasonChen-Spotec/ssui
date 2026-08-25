function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function LoopFolderOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("rect", {
        fill: "currentColor"
      }), _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 .586l2.707 2.707a1 1 0 010 1.414L6 7.414 4.586 6l.967-.967A3 3 0 003 8v1H1V8a5 5 0 014.601-4.984L4.586 2 6 .586zM9.22 6.25a7 7 0 118.529 8.529l-.968.249-.499-1.937.969-.25a5 5 0 10-6.093-6.093l-.25.969-1.937-.499.25-.968zM8 11a5 5 0 100 10 5 5 0 000-10zm-7 5a7 7 0 1114 0 7 7 0 01-14 0zm22-1v1a5 5 0 01-4.601 4.984L19.414 22 18 23.414l-2.707-2.707a1 1 0 010-1.414L18 16.586 19.414 18l-.967.967A3 3 0 0021 16v-1h2z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
LoopFolderOutlined.displayName = "LoopFolderOutlined";
export default LoopFolderOutlined;