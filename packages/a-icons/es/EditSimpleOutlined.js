function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function EditSimpleOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M20.293 2.293l-12 12 1.414 1.414 12-12-1.414-1.414z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M6 3h6v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-6h2v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
EditSimpleOutlined.displayName = "EditSimpleOutlined";
export default EditSimpleOutlined;