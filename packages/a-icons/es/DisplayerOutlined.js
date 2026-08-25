function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function DisplayerOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.241 2H6.76c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 00-1.748 1.748c-.247.485-.346 1.002-.392 1.564C1 6.29 1 6.954 1 7.758v4.483c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 001.748 1.748c.485.247 1.002.346 1.564.392C5.29 18 5.954 18 6.758 18H11v2H7v2h10v-2h-4v-2h4.241c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 001.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01V7.758c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 00-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C18.71 2 18.046 2 17.242 2zm1.848 13.962C18.639 16 18.057 16 17.2 16H6.8c-.857 0-1.439 0-1.889-.038-.438-.035-.663-.1-.819-.18a2 2 0 01-.874-.874c-.08-.156-.145-.38-.18-.819C3 13.639 3 13.057 3 12.2V7.8c0-.857 0-1.439.038-1.889.035-.438.1-.663.18-.819a2 2 0 01.874-.874c.156-.08.38-.145.819-.18C5.361 4 5.943 4 6.8 4h10.4c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 01.874.874c.08.156.145.38.18.819C21 6.361 21 6.943 21 7.8v4.4c0 .857 0 1.439-.038 1.889-.035.438-.1.663-.18.819a2 2 0 01-.874.874c-.156.08-.38.145-.819.18z",
        fill: "currentColor"
      }), _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.362 6.361a1 1 0 01.716.303l4.56 4.68 1.922-1.972a1 1 0 01.716-.302h4.518v2h-4.096l-2.344 2.405a1 1 0 01-1.432 0l-4.56-4.68-1.922 1.972a1 1 0 01-.716.303H2.207v-1-1h4.095l2.344-2.406a1 1 0 01.716-.303z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
DisplayerOutlined.displayName = "DisplayerOutlined";
export default DisplayerOutlined;