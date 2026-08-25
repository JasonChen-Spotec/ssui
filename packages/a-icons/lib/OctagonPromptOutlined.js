"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function OctagonPromptOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.472 1h7.056c.19 0 .43-.001.665.055.204.05.399.13.578.24.206.126.375.296.509.43l.036.037 4.922 4.922.037.036c.134.134.304.303.43.51a2 2 0 01.24.577c.056.236.055.475.055.665v7.056c0 .19.001.43-.055.665a2 2 0 01-.24.578c-.126.206-.296.375-.43.509l-.037.036-4.922 4.922-.036.037c-.134.134-.303.304-.51.43-.178.11-.373.19-.577.24a2.795 2.795 0 01-.665.055H8.472c-.19 0-.43.001-.665-.055-.204-.05-.399-.13-.578-.24a2.798 2.798 0 01-.509-.43l-.036-.037-4.923-4.922-.036-.036a2.795 2.795 0 01-.43-.51 2 2 0 01-.24-.577C1 15.957 1 15.718 1 15.528V8.523v-.051c0-.19-.001-.43.055-.665a2 2 0 01.24-.578c.126-.206.296-.375.43-.509l.036-.036 4.923-4.922.036-.037c.134-.134.303-.304.51-.43a2 2 0 01.577-.24C8.043 1 8.282 1 8.472 1zm-.197 2.003l-.002.002a6.21 6.21 0 00-.175.17L3.176 8.099a6.2 6.2 0 00-.171.175l-.002.002v.004A6.184 6.184 0 003 8.523v6.954a6.18 6.18 0 00.005.25c.032.035.078.082.17.175l4.923 4.922a6.16 6.16 0 00.177.173h.004c.047.003.113.003.244.003h6.954c.131 0 .197 0 .244-.002h.004l.002-.003c.035-.032.082-.078.175-.17l4.922-4.923c.093-.093.139-.14.171-.175l.002-.002v-.004c.003-.047.003-.113.003-.244V8.523c0-.131 0-.197-.003-.244v-.004a6.336 6.336 0 00-.173-.177l-4.923-4.922a6.29 6.29 0 00-.174-.171l-.002-.002h-.004A6.186 6.186 0 0015.477 3H8.523a6.184 6.184 0 00-.248.003zM11 7h2.01v2H11V7zm2 4v6h-2v-6h2z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
OctagonPromptOutlined.displayName = "OctagonPromptOutlined";
exports["default"] = OctagonPromptOutlined;