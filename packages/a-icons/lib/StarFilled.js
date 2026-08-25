"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function StarFilled(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.354 1.775a1.5 1.5 0 011.292 0c.353.168.547.46.645.62.102.167.206.378.308.583l.015.032 2.14 4.336 4.822.705c.227.033.46.067.65.112.182.044.52.14.789.423a1.5 1.5 0 01.398 1.228c-.051.388-.27.663-.391.806-.127.147-.295.312-.46.472l-3.488 3.397.823 4.798c.04.226.08.458.095.652.014.187.029.538-.158.882a1.5 1.5 0 01-1.045.759c-.384.071-.713-.05-.887-.123a7.751 7.751 0 01-.591-.29L12 18.898l-4.31 2.267a7.754 7.754 0 01-.592.291c-.173.072-.503.194-.887.123a1.5 1.5 0 01-1.045-.759c-.187-.344-.172-.695-.158-.882.016-.194.056-.426.095-.652l.823-4.798-3.463-3.373-.025-.024a7.756 7.756 0 01-.46-.472c-.122-.143-.34-.418-.39-.806a1.5 1.5 0 01.397-1.228c.27-.284.607-.379.79-.423.189-.045.422-.08.649-.112l.034-.006 4.788-.7 2.14-4.335.016-.032c.101-.205.205-.416.307-.582.098-.16.292-.453.646-.621z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
StarFilled.displayName = "StarFilled";
exports["default"] = StarFilled;