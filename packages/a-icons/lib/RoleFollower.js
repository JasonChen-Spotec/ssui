"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function RoleFollower(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        d: "M19.33 1A3.67 3.67 0 0123 4.67v14.66A3.67 3.67 0 0119.33 23H4.67A3.67 3.67 0 011 19.33V4.67A3.67 3.67 0 014.67 1h14.66zM6.984 7.533c-.218 0-.427.06-.627.178a2.07 2.07 0 00-.527.45c-.152.18-.275.376-.37.59-.095.214-.143.42-.143.62v7.937c0 .228.062.453.186.676.123.223.278.42.463.591.185.171.385.31.598.414.214.105.41.156.591.156h7.025c.218 0 .437-.042.655-.127a2.03 2.03 0 00.592-.357c.175-.152.318-.337.428-.556.109-.218.163-.465.163-.74v-8.05c0-.162-.043-.347-.128-.556a2.022 2.022 0 00-.37-.585 2.187 2.187 0 00-.578-.455 1.55 1.55 0 00-.762-.186H6.984zm2.964-2.679c-.228 0-.456.052-.684.157a2.562 2.562 0 00-.62.4 2.1 2.1 0 00-.449.54c-.114.2-.17.395-.17.585 0 .047-.006.08-.015.1 0 0 6.403-.105 6.954 0 .55.104.993.332 1.325.683.332.352.536.856.612 1.511v8.506h.057c.17 0 .356-.035.556-.106.199-.072.384-.167.555-.286a1.77 1.77 0 00.435-.427.925.925 0 00.179-.55V8.403c0-.342-.072-.72-.214-1.132a4.577 4.577 0 00-.592-1.155 3.72 3.72 0 00-.89-.897 1.905 1.905 0 00-1.126-.364H9.948zM8.78 14.242c1.125-.68 2.946-.68 4.063 0 .504.307.78.724.785 1.174 0 .454-.28.87-.785 1.182-.56.343-1.297.515-2.033.515-.737 0-1.473-.172-2.034-.515-.504-.308-.785-.725-.785-1.175 0-.45.281-.87.79-1.18zm2.03-4.456c.932 0 1.69.76 1.69 1.694a1.687 1.687 0 01-1.63 1.688h-.103a1.686 1.686 0 01-1.649-1.688c0-.934.759-1.694 1.692-1.694z",
        fill: "#47A92A"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
RoleFollower.displayName = "RoleFollower";
exports["default"] = RoleFollower;