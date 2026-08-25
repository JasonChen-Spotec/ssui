var _excluded = ["onChange", "numberType", "dataType", "precision", "formatter", "parser", "enableMinus", "onBlur", "maxLength"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import Input from "antd/es/input";
import useControllableValue from "ahooks/es/useControllableValue";
import omit from 'lodash/omit';
import * as dataTypeEnum from './const/dataTypeEnum';
import * as numberTypeEnum from './const/numberType';
import { filterInt, filterFloat } from './utils';
var NumberInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useControllableValue = useControllableValue(props, {
      defaultValue: ''
    }),
    value = _useControllableValue[0],
    setValue = _useControllableValue[1];
  var onChange = props.onChange,
    _props$numberType = props.numberType,
    numberType = _props$numberType === void 0 ? numberTypeEnum.INT : _props$numberType,
    _props$dataType = props.dataType,
    dataType = _props$dataType === void 0 ? dataTypeEnum.NUMBER : _props$dataType,
    precision = props.precision,
    formatter = props.formatter,
    parser = props.parser,
    _props$enableMinus = props.enableMinus,
    enableMinus = _props$enableMinus === void 0 ? false : _props$enableMinus,
    onBlur = props.onBlur,
    maxLength = props.maxLength,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var onNumberChange = function onNumberChange(e) {
    var newNumber;
    var newValue = e.target.value;
    if (numberType === numberTypeEnum.INT) {
      newNumber = filterInt({
        value: newValue,
        preValue: "" + value,
        enableMinus: enableMinus
      });
    } else {
      newNumber = filterFloat({
        value: newValue,
        preValue: "" + value,
        precision: precision != null ? precision : 2,
        enableMinus: enableMinus
      });
    }
    if (parser) {
      newNumber = parser(newNumber);
    }
    if (value !== newNumber) {
      setValue(newNumber);
    }
  };
  var onNumberBlur = function onNumberBlur() {
    var resultValue = value;
    if (value === '-' || value === '.') {
      resultValue = '';
    } else if (value && dataType === dataTypeEnum.NUMBER) {
      if (numberType === numberTypeEnum.FLOAT) {
        resultValue = +value;
      } else {
        resultValue = parseInt("" + value, 10);
      }
    }
    setValue(resultValue);
    onBlur == null || onBlur(resultValue);
  };
  var finallyValue = formatter ? formatter("" + value) : value;
  return _jsx(Input, _extends({
    type: "text",
    ref: ref,
    value: finallyValue,
    onBlur: onNumberBlur,
    onChange: onNumberChange,
    maxLength: maxLength
  }, omit(restProps, ['value'])));
});
export { numberTypeEnum, dataTypeEnum };
export default NumberInput;