function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function BranchLineOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M21.707 17.293a1 1 0 010 1.414L18 22.414 16.586 21l2-2h-.017c-.877 0-1.524.01-2.126-.173a4.002 4.002 0 01-1.378-.737c-.485-.4-.835-.944-1.322-1.673l-.242-.362-.555-.832 1.664-1.11.555.832.242.363c.556.833.727 1.07.929 1.237.203.167.437.293.688.37.251.075.544.085 1.545.085h.017l-2-2L18 13.586l3.707 3.707zM21.707 5.293a1 1 0 010 1.414L18 10.414 16.586 9l2-2h-.017c-1.001 0-1.294.01-1.545.086a2.001 2.001 0 00-.688.37c-.202.165-.373.403-.929 1.236l-5.15 7.725c-.486.73-.837 1.273-1.322 1.673a4.002 4.002 0 01-1.378.737c-.602.183-1.25.173-2.126.173H2v-2h3.43c1.002 0 1.295-.01 1.546-.086.251-.076.485-.202.688-.37.202-.165.373-.403.929-1.236l5.15-7.725c.486-.73.837-1.273 1.322-1.673a4.003 4.003 0 011.378-.737C17.045 4.99 17.693 5 18.57 5h.017l-2-2L18 1.586l3.707 3.707z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M9.035 13H2v-2h7.035v2zM5.43 5c.878 0 1.525-.01 2.127.173.503.153.971.403 1.378.737.485.4.836.944 1.322 1.673l.242.362.555.832-1.664 1.11-.555-.832-.242-.363c-.556-.833-.727-1.07-.929-1.237a2 2 0 00-.688-.37C6.725 7.01 6.432 7 5.43 7H2V5h3.43z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
BranchLineOutlined.displayName = "BranchLineOutlined";
export default BranchLineOutlined;