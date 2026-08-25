function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from "a-base-icon/lib/icon";
function ForbidFireOutlined(componentProps) {
  var IconNode = function IconNode(props) {
    return _jsxs("svg", _extends({
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props, {
      children: [_jsx("path", {
        d: "M10.225 1.226A1 1 0 008.593 2c0 .687-.098 1.573-.273 2.43-.178.87-.417 1.623-.66 2.08-.302.568-.455.81-.606 1.007a7.49 7.49 0 01-.418.484c-.093.102-.206.226-.346.383-.164.184-.314.344-.456.497-.481.517-.876.94-1.422 1.828-.8 1.302-.912 2.944-.912 4C3.5 19.492 7.374 23 12 23c.338 0 .672-.02 1-.057v-2.018c-.326.05-.66.075-1 .075-3.609 0-6.5-2.698-6.5-6.29 0-1 .125-2.156.615-2.954.435-.707.688-.978 1.13-1.452.151-.164.325-.35.537-.588.096-.108.187-.208.273-.302.225-.248.417-.46.585-.678.255-.332.47-.692.786-1.287.375-.705.66-1.674.853-2.62.058-.284.11-.575.153-.864.768.65 1.579 1.43 2.25 2.416.56.818 1.05 1.959 1.406 2.97.175.497.311.945.403 1.28a8.45 8.45 0 01.117.483 1 1 0 001.607.72l.073-.055a5.64 5.64 0 001.405-1.454c.069.198.146.427.236.697.26.781.402 1.418.48 1.978h2.016c-.083-.732-.253-1.57-.598-2.61-.284-.854-.468-1.377-.664-1.826-.2-.457-.404-.82-.704-1.345a1 1 0 00-1.861.377 3.752 3.752 0 01-.487 1.49c-.043-.13-.089-.263-.137-.4-.376-1.068-.935-2.4-1.64-3.433-1.152-1.688-2.67-2.887-3.662-3.671-.165-.13-.315-.249-.447-.356z",
        fill: "currentColor"
      }), _jsx("path", {
        d: "M16 14.586l2.5 2.5 2.5-2.5L22.414 16l-2.5 2.5 2.5 2.5L21 22.414l-2.5-2.5-2.5 2.5L14.586 21l2.5-2.5-2.5-2.5L16 14.586z",
        fill: "currentColor"
      })]
    }));
  };
  return _jsx(Icon, _extends({}, componentProps, {
    component: IconNode
  }));
}
ForbidFireOutlined.displayName = "ForbidFireOutlined";
export default ForbidFireOutlined;