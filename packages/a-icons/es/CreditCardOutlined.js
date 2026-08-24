function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function CreditCardOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.161 4H18.84c.527 0 .982 0 1.356.03.395.033.789.104 1.167.297a3 3 0 011.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356v7.678c0 .527 0 .981-.03 1.356-.033.395-.104.789-.297 1.167a3 3 0 01-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.83.031-1.356.031H5.16c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 01-1.311-1.311c-.193-.378-.264-.772-.296-1.167C1 16.82 1 16.365 1 15.838V8.162c0-.527 0-.981.03-1.356.033-.395.104-.789.297-1.167a3 3 0 011.311-1.311c.378-.193.772-.264 1.167-.296C4.18 4 4.635 4 5.161 4zM3 11v4.8c0 .577 0 .949.024 1.232.022.272.06.372.085.422a1 1 0 00.437.437c.05.025.15.063.422.085C4.25 18 4.623 18 5.2 18h13.6c.577 0 .949 0 1.232-.024.272-.022.372-.06.422-.085a1 1 0 00.437-.437c.025-.05.063-.15.085-.422C21 16.75 21 16.377 21 15.8V11H3zm18-2H3v-.8c0-.577 0-.949.024-1.232.022-.272.06-.373.085-.422a1 1 0 01.437-.437c.05-.025.15-.063.422-.085C4.25 6 4.623 6 5.2 6h13.6c.577 0 .949 0 1.232.024.272.022.372.06.422.085a1 1 0 01.437.437c.025.05.063.15.085.422C21 7.25 21 7.623 21 8.2V9zM5 13h7v2H5v-2z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
CreditCardOutlined.displayName = "CreditCardOutlined";
export default CreditCardOutlined;