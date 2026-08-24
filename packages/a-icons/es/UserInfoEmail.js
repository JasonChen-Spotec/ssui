function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function UserInfoEmail(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M16 5H8C5.6 5 4 6.235 4 9.118v5.764C4 17.765 5.6 19 8 19h8c2.4 0 4-1.235 4-4.118V9.118C20 6.235 18.4 5 16 5zm.376 5.015l-2.504 2.06c-.528.436-1.2.65-1.872.65-.672 0-1.352-.214-1.872-.65l-2.504-2.06a.647.647 0 01-.096-.873.587.587 0 01.84-.098l2.504 2.058c.608.503 1.64.503 2.248 0l2.504-2.058a.58.58 0 01.84.098.637.637 0 01-.088.873z",
        fill: "currentColor"
      }), _jsx("circle", {
        cx: 18.5,
        cy: 16.5,
        r: 4.5,
        fill: "#DC4946"
      }), _jsx("path", {
        d: "M16 15.5h3M16 17.5h5",
        stroke: "#fff",
        strokeWidth: 0.75,
        strokeLinecap: "square"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
UserInfoEmail.displayName = "UserInfoEmail";
export default UserInfoEmail;