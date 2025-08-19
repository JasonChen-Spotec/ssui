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
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import * as React from 'react';
import parse2RegexOption from './parse2RegexOption';
var ConditionInput = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  var _a = __read(useControllableValue(props), 2),
    value = _a[0],
    setValue = _a[1];
  var regexp = props.regexp,
    formatter = props.formatter,
    onChange = props.onChange,
    rest = __rest(props, ['regexp', 'formatter', 'onChange']);
  var handleChange = function handleChange(e) {
    var originalValue = e.target.value;
    var nextValue = originalValue;
    if (regexp) {
      var resultRegexp = isArray(regexp) ? regexp : [regexp];
      nextValue = resultRegexp.reduce(function (cur, acc) {
        var regexOption = parse2RegexOption(acc);
        if (regexOption.isValid) {
          return cur.replace(regexOption.pattern, regexOption.replacement);
        }
        return cur;
      }, originalValue);
    }
    if (isFunction(formatter)) {
      nextValue = formatter(nextValue);
    }
    if (value !== nextValue) {
      setValue(nextValue);
    }
  };
  return /*#__PURE__*/ React.createElement(
    Input,
    __assign(
      {
        ref: ref,
        value: value,
        onChange: handleChange,
      },
      rest,
    ),
  );
});
export default ConditionInput;
