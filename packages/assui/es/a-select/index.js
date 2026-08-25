var _excluded = ["valueRender", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useControllableValue from "ahooks/es/useControllableValue";
import Select from "antd/es/select";
import classNames from 'classnames';
var ASelect = Object.assign(function (props) {
  var valueRender = props.valueRender,
    className = props.className,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var _useControllableValue = useControllableValue(props),
    value = _useControllableValue[0],
    onChange = _useControllableValue[1];
  if (!valueRender) {
    return _jsx(Select, _extends({
      className: className
    }, restProps, {
      value: value,
      onChange: onChange
    }));
  }
  return _jsxs("div", {
    className: classNames('a-select-wrap', className),
    children: [_jsx("div", {
      className: "a-select-value-wrap",
      children: valueRender(value)
    }), _jsx(Select, _extends({}, restProps, {
      value: value,
      onChange: onChange
    }))]
  });
}, {
  Option: Select.Option
});
export default ASelect;