function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function TagFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 1c-.407 0-.766 0-1.115.083a3 3 0 00-.867.36c-.305.186-.559.44-.846.728L3.415 9.928c-.57.57-1.039 1.039-1.39 1.453-.365.43-.66.865-.83 1.383a4 4 0 000 2.472c.17.518.465.953.83 1.383.351.414.821.884 1.39 1.453l2.27 2.27c.57.57 1.04 1.04 1.453 1.39.43.366.865.661 1.383.83a4 4 0 002.472 0c.518-.169.954-.464 1.383-.83.414-.35.884-.82 1.453-1.39l7.757-7.756c.288-.288.542-.541.73-.847a3 3 0 00.358-.867c.084-.349.084-.707.083-1.114V5.16c0-.527 0-.981-.03-1.356-.032-.395-.104-.789-.297-1.167a3 3 0 00-1.31-1.311c-.38-.193-.772-.264-1.168-.296C19.578 1 19.123 1 18.596 1h-4.597zm3.257 7a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
TagFilled.displayName = "TagFilled";
export default TagFilled;