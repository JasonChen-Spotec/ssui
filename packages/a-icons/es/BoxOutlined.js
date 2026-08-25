function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function BoxOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.597 1.185a2 2 0 01.806 0c.307.063.582.217.8.34l.06.032 7.4 4.112.063.034c.23.128.521.288.745.53.193.21.339.458.428.728.103.313.102.644.101.908v8.262c.001.264.002.595-.101.908-.09.27-.235.518-.428.728-.224.242-.514.402-.745.53l-.063.034-7.4 4.111-.06.034c-.218.122-.493.276-.8.339-.266.055-.54.055-.806 0-.307-.063-.582-.217-.8-.34l-.06-.033-7.4-4.11c-.02-.012-.041-.024-.063-.035-.231-.128-.522-.288-.745-.53a2 2 0 01-.428-.728c-.103-.313-.102-.645-.101-.908V7.94 7.87c-.001-.264-.002-.595.1-.908a2 2 0 01.43-.728c.222-.242.513-.402.744-.53l.063-.034 7.4-4.112.06-.033c.218-.122.493-.276.8-.34zM12 3.149a6.514 6.514 0 00-.291.157L5.059 7l6.94 3.856L18.942 7l-6.65-3.694A6.574 6.574 0 0012 3.149zm8 5.55v7.36c0 .182 0 .276-.005.344v.006c-.002 0-.003.002-.005.003a6.711 6.711 0 01-.299.171L13 20.301v-7.713L20 8.7zm-9 3.89l-7-3.89v7.36a6.644 6.644 0 00.005.35l.005.003c.057.036.139.082.299.171l6.69 3.717v-7.712z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
BoxOutlined.displayName = "BoxOutlined";
export default BoxOutlined;