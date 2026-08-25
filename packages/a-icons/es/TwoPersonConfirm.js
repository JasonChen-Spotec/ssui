function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function TwoPersonConfirm(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M19.47 12.718a2.17 2.17 0 012.134 1.797l.152.756a2.228 2.228 0 01-2.093 2.773H15.57v.144c-.02.095-.068.191-.068.287-.026.09-.057.18-.095.266a2.242 2.242 0 01-.384.718c-.038.058-.123.096-.123.144-.084.097-.174.19-.268.277l-.153.124a2.42 2.42 0 01-.326.22l-.152.086c-.136.061-.277.113-.42.154h-.125c-.197.05-.4.076-.604.076H4.935a2.87 2.87 0 01-2.678-3.548l.201-.766v-.382c.134-.555.43-1.057.851-1.443a2.643 2.643 0 011.818-.728h6.741a2.123 2.123 0 011.77-.955h5.833zM9.526 3.46a3.224 3.224 0 013.25 3.214v1.502A3.825 3.825 0 018.952 12h-.077A3.826 3.826 0 015.05 8.176V6.674A3.224 3.224 0 018.263 3.46h1.263zM17.558 4.905a2.41 2.41 0 012.392 2.41v1.1a2.87 2.87 0 01-5.738 0v-1.1a2.41 2.41 0 012.39-2.41h.956z",
        fill: "currentColor"
      }), _jsx("circle", {
        cx: 18.5,
        cy: 16.5,
        r: 4.5,
        fill: "#DC4946"
      }), _jsx("path", {
        d: "M16.5 16.546l1.082 1.082c.088.088.132.132.183.148a.222.222 0 00.137 0c.05-.016.095-.06.183-.148l2.415-2.415",
        stroke: "#fff",
        strokeWidth: 0.75,
        strokeLinecap: "square",
        strokeLinejoin: "round"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
TwoPersonConfirm.displayName = "TwoPersonConfirm";
export default TwoPersonConfirm;