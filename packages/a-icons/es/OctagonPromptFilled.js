function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function OctagonPromptFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.472 1h7.056c.19 0 .43-.001.665.055.204.05.399.13.578.24.206.126.375.296.509.43l.036.036 4.923 4.923.036.036c.135.134.304.303.43.51.11.178.19.373.24.577.056.236.056.475.055.665v7.056c0 .19.001.43-.055.665a2 2 0 01-.24.578c-.126.206-.295.375-.43.509l-.036.036-4.923 4.922-.036.037c-.134.134-.303.304-.509.43a2 2 0 01-.578.24c-.236.056-.475.055-.665.055H8.473c-.19 0-.43.001-.664-.055-.205-.05-.4-.13-.579-.24-.206-.126-.375-.296-.509-.43l-.036-.037-4.922-4.922-.036-.036c-.135-.134-.305-.303-.431-.51a1.999 1.999 0 01-.24-.577A2.794 2.794 0 011 15.528V8.472c0-.19-.001-.43.055-.665a2 2 0 01.24-.578c.126-.206.296-.375.43-.509l.037-.036 4.922-4.923.036-.036c.134-.134.303-.304.51-.43a2 2 0 01.578-.24C8.043 1 8.282 1 8.472 1zM13 17h-2v-6h2v6zm0-8V7h-2v2h2z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
OctagonPromptFilled.displayName = "OctagonPromptFilled";
export default OctagonPromptFilled;