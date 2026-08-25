var _excluded = ["onChange", "onBlur", "numberType", "precision", "step", "max", "min", "disabled", "enableMinus"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import useControllableValue from "ahooks/es/useControllableValue";
import DisabledContext from "antd/es/config-provider/DisabledContext";
import BigNumber from 'bignumber.js';
import classNames from 'classnames';
import isUndefined from 'lodash/isUndefined';
import NumberInput from '../number-input';
import { MINUS, PLUS } from './const/countType';
import { INT } from './const/numberType';
var StepNumberInput = function StepNumberInput(props) {
  var _useControllableValue = useControllableValue(props, {
      defaultValue: ''
    }),
    value = _useControllableValue[0],
    setValue = _useControllableValue[1];
  var onChange = props.onChange,
    onBlur = props.onBlur,
    _props$numberType = props.numberType,
    numberType = _props$numberType === void 0 ? INT : _props$numberType,
    _props$precision = props.precision,
    precision = _props$precision === void 0 ? 2 : _props$precision,
    _props$step = props.step,
    step = _props$step === void 0 ? 1 : _props$step,
    max = props.max,
    min = props.min,
    customDisabled = props.disabled,
    _props$enableMinus = props.enableMinus,
    enableMinus = _props$enableMinus === void 0 ? false : _props$enableMinus,
    restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var isEmpty = isUndefined(value) || value === '';
  var plusNumber = new BigNumber(value).plus(step).toString();
  var minusNumber = new BigNumber(value).minus(step).toString();
  var maxCondition = isUndefined(max) ? false : max === Number(value) || Number(max) < Number(plusNumber);
  var minCondition = isUndefined(min) ? false : min === Number(value) || Number(min) > Number(minusNumber);
  // ===================== Disabled =====================
  var disabled = React.useContext(DisabledContext);
  var mergedDisabled = customDisabled != null ? customDisabled : disabled;
  var minusDisabled = isEmpty || minCondition || mergedDisabled;
  var addDisabled = isEmpty || maxCondition || mergedDisabled;
  var onNumberChange = function onNumberChange(lastValue) {
    if (value !== lastValue) {
      setValue(lastValue);
    }
  };
  var onClickCount = function onClickCount(symbol) {
    if (isEmpty) {
      return;
    }
    var newNumber = '';
    if (symbol === PLUS) {
      newNumber = maxCondition ? "" + max : plusNumber;
    } else {
      newNumber = minCondition ? "" + min : minusNumber;
    }
    setValue(newNumber);
  };
  var onNumberBlur = function onNumberBlur() {
    var resultValue = value;
    if (value === '-' || value === '.') {
      resultValue = '';
    }
    if (!isUndefined(max) && Number(value) > max) {
      resultValue = "" + max;
    }
    if (!isUndefined(min) && Number(value) < min) {
      resultValue = "" + min;
    }
    setValue(resultValue);
    onBlur == null || onBlur(resultValue);
  };
  return _jsx("div", {
    className: "number-range-input",
    children: _jsx(NumberInput, _extends({
      addonBefore: _jsx("span", {
        onClick: minusDisabled ? undefined : function () {
          return onClickCount(MINUS);
        },
        className: classNames('count-minus-btn', {
          'disabled-btn': minusDisabled
        }),
        children: "-"
      }),
      addonAfter: _jsx("span", {
        onClick: addDisabled ? undefined : function () {
          return onClickCount(PLUS);
        },
        className: classNames('count-add-btn', {
          'disabled-btn': addDisabled
        }),
        children: "+"
      }),
      value: "" + value,
      onChange: onNumberChange,
      onBlur: onNumberBlur,
      numberType: numberType,
      precision: precision,
      disabled: mergedDisabled,
      enableMinus: enableMinus
    }, restProps))
  });
};
export default StepNumberInput;