function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function LimitlessFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M7.407 10.05c1.322 0 2.315.8 3.424 1.95-1.109 1.15-2.102 1.95-3.424 1.95-.523 0-.88-.214-1.13-.54-.267-.35-.427-.86-.427-1.41 0-.55.16-1.058.427-1.408.25-.327.607-.542 1.13-.542zM16.324 10.05c.647 0 1.078.244 1.36.575.296.35.466.846.466 1.375s-.17 1.025-.466 1.375c-.282.331-.713.575-1.36.575-.648 0-1.23-.249-1.834-.704-.45-.339-.877-.765-1.33-1.246.453-.481.88-.907 1.33-1.246.604-.455 1.186-.704 1.834-.704z",
        fill: "currentColor"
      }), _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm4.324 7.35l-.002.002c-1.133 0-2.066.45-2.855 1.044-.526.397-1.014.88-1.47 1.362C10.85 9.57 9.414 8.35 7.406 8.35c-1.082 0-1.927.485-2.48 1.209-.535.7-.777 1.59-.777 2.44 0 .85.242 1.741.777 2.441.553.724 1.399 1.21 2.48 1.21 2.008 0 3.443-1.22 4.59-2.409.456.483.944.966 1.47 1.362.79.595 1.723 1.046 2.857 1.046 1.136 0 2.044-.456 2.654-1.174.595-.7.872-1.605.872-2.476 0-.87-.277-1.774-.872-2.475-.61-.718-1.516-1.173-2.652-1.173l-.002-.001z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
LimitlessFilled.displayName = "LimitlessFilled";
export default LimitlessFilled;