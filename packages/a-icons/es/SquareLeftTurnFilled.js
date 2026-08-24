function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function SquareLeftTurnFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        d: "M12.694 2.588a1.5 1.5 0 011.2.551c.257.316.303.681.32.87.018.202.018.45.018.694V8.23a10.666 10.666 0 018 10.322v.612a1 1 0 01-1.77.639 10.401 10.401 0 00-6.23-3.606v3.1c0 .246 0 .493-.018.695-.018.189-.063.554-.32.87a1.5 1.5 0 01-1.2.551c-.406-.01-.713-.213-.868-.323a8.268 8.268 0 01-.538-.438L2.77 13.35a5.258 5.258 0 01-.324-.293 1.514 1.514 0 01-.358-.55 1.5 1.5 0 010-1.014c.093-.258.248-.437.358-.55.098-.1.22-.203.324-.293l8.518-7.3c.186-.16.373-.321.538-.439.155-.11.462-.313.868-.323z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
SquareLeftTurnFilled.displayName = "SquareLeftTurnFilled";
export default SquareLeftTurnFilled;