function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function FundProjectionScreenOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.759 2H17.24c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 011.748 1.748c.247.485.346 1.002.392 1.564C23 6.29 23 6.954 23 7.758v4.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 01-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H13v2h4v2H7v-2h4v-2H6.759c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C1 13.71 1 13.046 1 12.242V7.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 011.748-1.748c.485-.247 1.002-.346 1.564-.392C5.29 2 5.954 2 6.758 2zM17.2 16c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 00.874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889V7.8c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 00-.874-.874c-.156-.08-.38-.145-.819-.18C18.639 4 18.057 4 17.2 4H6.8c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 00-.874.874c-.08.156-.145.38-.18.819C3 6.361 3 6.943 3 7.8v4.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 00.874.874c.156.08.38.145.819.18C5.361 16 5.943 16 6.8 16h10.4z",
        fill: "currentColor"
      }), _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.985 6.58l-4.043 4.316-.022.024c-.085.093-.288.316-.56.44a1.429 1.429 0 01-.722.124c-.297-.027-.563-.17-.674-.23a2.239 2.239 0 00-.029-.015l-2.58-1.34-3.88 4.141-1.46-1.367 4.043-4.315.022-.024c.085-.093.288-.316.56-.44.225-.104.474-.146.722-.124.297.027.563.17.674.229l.029.016 2.58 1.34 3.88-4.142 1.46 1.368z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
FundProjectionScreenOutlined.displayName = "FundProjectionScreenOutlined";
export default FundProjectionScreenOutlined;