function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function DownloadLineOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("g", {
        clipPath: "url(#download-line-outlined_svg__clip0_18321_25544)",
        children: _jsx("path", {
          d: "M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z",
          fill: "currentColor"
        })
      }), _jsx("defs", {
        children: _jsx("clipPath", {
          id: "download-line-outlined_svg__clip0_18321_25544",
          children: _jsx("path", {
            fill: "currentColor",
            d: "M0 0h24v24H0z"
          })
        })
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
DownloadLineOutlined.displayName = "DownloadLineOutlined";
export default DownloadLineOutlined;