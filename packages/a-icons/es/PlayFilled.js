function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function PlayFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        d: "M8.006 2.802c-.373-.248-.708-.472-.993-.626-.285-.155-.676-.331-1.132-.304a2 2 0 00-1.476.79c-.276.365-.346.788-.376 1.11C4 4.095 4 4.498 4 4.946v14.108c0 .448 0 .851.03 1.174.029.322.1.745.375 1.11a2 2 0 001.476.79c.456.027.847-.15 1.132-.304.285-.154.62-.378.993-.626l10.585-7.057c.305-.203.588-.392.805-.567.227-.183.495-.437.649-.808a2 2 0 000-1.532c-.154-.371-.422-.625-.649-.808-.217-.175-.5-.364-.805-.567L8.006 2.802z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
PlayFilled.displayName = "PlayFilled";
export default PlayFilled;