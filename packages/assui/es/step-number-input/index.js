var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = {
        error: error,
      };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
import useControllableValue from 'ahooks/es/useControllableValue';
import DisabledContext from 'antd/es/config-provider/DisabledContext';
import BigNumber from 'bignumber.js';
import classNames from 'classnames';
import isUndefined from 'lodash/isUndefined';
import * as React from 'react';
import NumberInput from '../number-input';
import { MINUS, PLUS } from './const/countType';
import { INT } from './const/numberType';
var StepNumberInput = function StepNumberInput(props) {
  var _a = __read(
      useControllableValue(props, {
        defaultValue: '',
      }),
      2,
    ),
    value = _a[0],
    setValue = _a[1];
  var onChange = props.onChange,
    onBlur = props.onBlur,
    _b = props.numberType,
    numberType = _b === void 0 ? INT : _b,
    _c = props.precision,
    precision = _c === void 0 ? 2 : _c,
    _d = props.step,
    step = _d === void 0 ? 1 : _d,
    max = props.max,
    min = props.min,
    customDisabled = props.disabled,
    _e = props.enableMinus,
    enableMinus = _e === void 0 ? false : _e,
    restProps = __rest(props, [
      'onChange',
      'onBlur',
      'numberType',
      'precision',
      'step',
      'max',
      'min',
      'disabled',
      'enableMinus',
    ]);
  var isEmpty = isUndefined(value) || value === '';
  var plusNumber = new BigNumber(value).plus(step).toString();
  var minusNumber = new BigNumber(value).minus(step).toString();
  var maxCondition = isUndefined(max)
    ? false
    : max === Number(value) || Number(max) < Number(plusNumber);
  var minCondition = isUndefined(min)
    ? false
    : min === Number(value) || Number(min) > Number(minusNumber);
  // ===================== Disabled =====================
  var disabled = React.useContext(DisabledContext);
  var mergedDisabled =
    customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
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
      newNumber = maxCondition ? ''.concat(max) : plusNumber;
    } else {
      newNumber = minCondition ? ''.concat(min) : minusNumber;
    }
    setValue(newNumber);
  };
  var onNumberBlur = function onNumberBlur() {
    var resultValue = value;
    if (value === '-' || value === '.') {
      resultValue = '';
    }
    if (!isUndefined(max) && Number(value) > max) {
      resultValue = ''.concat(max);
    }
    if (!isUndefined(min) && Number(value) < min) {
      resultValue = ''.concat(min);
    }
    setValue(resultValue);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(resultValue);
  };
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'number-range-input',
    },
    /*#__PURE__*/ React.createElement(
      NumberInput,
      __assign(
        {
          addonBefore: /*#__PURE__*/ React.createElement(
            'span',
            {
              onClick: minusDisabled
                ? undefined
                : function () {
                    return onClickCount(MINUS);
                  },
              className: classNames('count-minus-btn', {
                'disabled-btn': minusDisabled,
              }),
            },
            '-',
          ),
          addonAfter: /*#__PURE__*/ React.createElement(
            'span',
            {
              onClick: addDisabled
                ? undefined
                : function () {
                    return onClickCount(PLUS);
                  },
              className: classNames('count-add-btn', {
                'disabled-btn': addDisabled,
              }),
            },
            '+',
          ),
          value: ''.concat(value),
          onChange: onNumberChange,
          onBlur: onNumberBlur,
          numberType: numberType,
          precision: precision,
          disabled: mergedDisabled,
          enableMinus: enableMinus,
        },
        restProps,
      ),
    ),
  );
};
export default StepNumberInput;
