function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function ShopKeeperFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        d: "M5.234 7.73A7.993 7.993 0 0112 4a7.994 7.994 0 016.767 3.73l1.69-1.07A9.994 9.994 0 0012 2a9.994 9.994 0 00-8.456 4.66l1.69 1.07zM12 20a7.993 7.993 0 01-6.766-3.73l-1.69 1.07A9.994 9.994 0 0012 22a9.994 9.994 0 008.457-4.66l-1.69-1.07A7.994 7.994 0 0112 20zm0-8a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 014 4H8a4 4 0 014-4zm-6-1a3 3 0 11-6 0 3 3 0 016 0zm15 3a3 3 0 100-6 3 3 0 000 6z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
ShopKeeperFilled.displayName = "ShopKeeperFilled";
export default ShopKeeperFilled;