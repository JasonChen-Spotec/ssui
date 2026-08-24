function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function PlaySolidFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM9.6 8.116c-.1.133-.1.372-.1.85v6.069c0 .477 0 .716.1.849a.5.5 0 00.364.199c.166.012.367-.117.769-.375l4.72-3.035c.349-.224.523-.336.583-.478a.5.5 0 000-.39c-.06-.142-.234-.254-.583-.478l-4.72-3.035c-.402-.258-.603-.387-.769-.375a.5.5 0 00-.364.2z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
PlaySolidFilled.displayName = "PlaySolidFilled";
export default PlaySolidFilled;