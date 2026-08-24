"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = tslib_1.__importDefault(require("a-base-icon/lib/icon"));
function HomeOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return (0, jsx_runtime_1.jsx)("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: (0, jsx_runtime_1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.477 1.336a2 2 0 011.046 0c.397.108.732.37.998.58l.075.059 6.782 5.275.078.06c.377.292.709.55.956.884.217.294.379.624.477.975.112.4.111.82.111 1.298v7.372c0 .527 0 .981-.03 1.356-.033.395-.104.789-.297 1.167a3 3 0 01-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.83.031-1.357.031H6.162c-.527 0-.982 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 01-1.311-1.311c-.193-.378-.264-.772-.297-1.167C2 18.82 2 18.365 2 17.838v-7.273-.098c0-.477-.001-.897.11-1.298a3 3 0 01.478-.975c.247-.334.579-.592.956-.884l.077-.06 6.783-5.275a28.8 28.8 0 00.074-.059c.267-.21.602-.472 1-.58zm.516 1.946c-.076.05-.175.126-.361.271L4.849 8.828c-.498.388-.59.471-.653.556a1 1 0 00-.16.325c-.027.1-.036.225-.036.856V17.8c0 .576 0 .949.024 1.232.022.272.06.372.085.422a1 1 0 00.437.437c.05.025.15.063.422.085C5.25 20 5.623 20 6.2 20h11.6c.576 0 .949 0 1.232-.024.272-.022.372-.06.422-.085a1 1 0 00.437-.437c.025-.05.063-.15.085-.422.023-.283.024-.655.024-1.232v-7.235c0-.63-.009-.755-.037-.856a1 1 0 00-.16-.325c-.062-.085-.154-.168-.652-.556l-6.783-5.275a7.29 7.29 0 00-.36-.271L12 3.277l-.007.005zM7 16h10v2H7v-2z",
        fill: "currentColor"
      })
    }));
  };
  return (0, jsx_runtime_1.jsx)(icon_1["default"], _extends({}, componentProps, {
    component: IconNode
  }));
}
HomeOutlined.displayName = "HomeOutlined";
exports["default"] = HomeOutlined;