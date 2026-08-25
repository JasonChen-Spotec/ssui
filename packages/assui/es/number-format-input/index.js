var _excluded = ["className", "format"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { NumericFormat, PatternFormat } from 'react-number-format';
// 根据是否传入 pattern 字符串格式，选择对应的 react-number-format 封装：
// - 传 format="#### #### #### ####" 这类 pattern 时使用 PatternFormat（支持 mask）
// - 否则使用 NumericFormat（支持 thousandSeparator / prefix / suffix 等数字格式化）
var NumberFormatInput = function NumberFormatInput(_ref) {
  var className = _ref.className,
    format = _ref.format,
    restProps = _objectWithoutPropertiesLoose(_ref, _excluded);
  if (typeof format === 'string') {
    return _jsx(PatternFormat, _extends({}, restProps, {
      format: format,
      className: classNames('rc-number-format-input', className)
    }));
  }
  return _jsx(NumericFormat, _extends({}, restProps, {
    className: classNames('rc-number-format-input', className)
  }));
};
export default NumberFormatInput;