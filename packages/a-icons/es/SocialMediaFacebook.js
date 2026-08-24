function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function SocialMediaFacebook(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsxs("g", {
        clipPath: "url(#social-media-facebook_svg__clip0_4109_4252)",
        children: [_jsx("circle", {
          cx: 12,
          cy: 12,
          r: 12,
          fill: "#000"
        }), _jsx("path", {
          d: "M15.688 12.953l.449-2.76H13.37V8.4c0-.755.386-1.492 1.621-1.492h1.276v-2.35a15.98 15.98 0 00-2.246-.185c-2.277 0-3.764 1.323-3.764 3.716v2.104H7.732v2.76h2.525v6.675h3.113v-6.675h2.318z",
          fill: "#fff"
        })]
      }), _jsx("defs", {
        children: _jsx("clipPath", {
          id: "social-media-facebook_svg__clip0_4109_4252",
          children: _jsx("path", {
            fill: "#fff",
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
SocialMediaFacebook.displayName = "SocialMediaFacebook";
export default SocialMediaFacebook;