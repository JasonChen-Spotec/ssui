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
import Input from 'antd/es/input';
import omit from 'lodash/omit';
import * as React from 'react';
import * as dataTypeEnum from './const/dataTypeEnum';
import * as numberTypeEnum from './const/numberType';
import { filterFloat, filterInt } from './utils';
var NumberInput = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  var _a = __read(
      useControllableValue(props, {
        defaultValue: '',
      }),
      2,
    ),
    value = _a[0],
    setValue = _a[1];
  var onChange = props.onChange,
    _b = props.numberType,
    numberType = _b === void 0 ? numberTypeEnum.INT : _b,
    _c = props.dataType,
    dataType = _c === void 0 ? dataTypeEnum.NUMBER : _c,
    precision = props.precision,
    formatter = props.formatter,
    parser = props.parser,
    _d = props.enableMinus,
    enableMinus = _d === void 0 ? false : _d,
    onBlur = props.onBlur,
    maxLength = props.maxLength,
    restProps = __rest(props, [
      'onChange',
      'numberType',
      'dataType',
      'precision',
      'formatter',
      'parser',
      'enableMinus',
      'onBlur',
      'maxLength',
    ]);
  var onNumberChange = function onNumberChange(e) {
    var newNumber;
    var newValue = e.target.value;
    if (numberType === numberTypeEnum.INT) {
      newNumber = filterInt({
        value: newValue,
        preValue: ''.concat(value),
        enableMinus: enableMinus,
      });
    } else {
      newNumber = filterFloat({
        value: newValue,
        preValue: ''.concat(value),
        precision: precision !== null && precision !== void 0 ? precision : 2,
        enableMinus: enableMinus,
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
        resultValue = parseInt(''.concat(value), 10);
      }
    }
    setValue(resultValue);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(resultValue);
  };
  var finallyValue = formatter ? formatter(''.concat(value)) : value;
  return /*#__PURE__*/ React.createElement(
    Input,
    __assign(
      {
        type: 'text',
        ref: ref,
        value: finallyValue,
        onBlur: onNumberBlur,
        onChange: onNumberChange,
        maxLength: maxLength,
      },
      omit(restProps, ['value']),
    ),
  );
});
export { dataTypeEnum, numberTypeEnum };
export default NumberInput;
