function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function CopyLineOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsx("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: _jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.146 4.051C16.529 4.001 15.736 4 14.6 4H6.5V2h8.143c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 012.185 2.185c.302.592.428 1.233.487 1.961C22 7.4 22 8.273 22 9.357V17.5h-2V9.4c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 00-1.311-1.311c-.263-.134-.611-.226-1.216-.276zM6.16 5.5h8.178c.527 0 .981 0 1.356.03.395.033.789.104 1.167.297a3 3 0 011.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356v8.178c0 .527 0 .982-.03 1.356-.033.395-.104.789-.297 1.167a3 3 0 01-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.83.031-1.356.031H6.16c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 01-1.311-1.311c-.193-.378-.264-.772-.296-1.167A17.9 17.9 0 012 17.838V9.662c0-.527 0-.981.03-1.356.033-.395.104-.789.297-1.167a3 3 0 011.311-1.311c.378-.193.772-.264 1.167-.296.375-.031.83-.031 1.356-.031zM4.968 7.524c-.272.022-.373.06-.422.085a1 1 0 00-.437.437c-.025.05-.063.15-.085.422C4 8.75 4 9.123 4 9.7v8.1c0 .577 0 .949.024 1.232.022.272.06.372.085.422a1 1 0 00.437.437c.05.025.15.063.422.085C5.25 20 5.623 20 6.2 20h8.1c.577 0 .949 0 1.232-.024.272-.022.373-.06.422-.085a1 1 0 00.437-.437c.025-.05.063-.15.085-.422.023-.283.024-.655.024-1.232V9.7c0-.577 0-.949-.024-1.232-.022-.272-.06-.373-.085-.422a1 1 0 00-.437-.437c-.05-.025-.15-.063-.422-.085C15.25 7.5 14.877 7.5 14.3 7.5H6.2c-.577 0-.949 0-1.232.024z",
        fill: "currentColor"
      })
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
CopyLineOutlined.displayName = "CopyLineOutlined";
export default CopyLineOutlined;