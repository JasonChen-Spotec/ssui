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
import Select from 'antd/es/select';
import classNames from 'classnames';
import React from 'react';
var ASelect = function ASelect(props) {
  var valueRender = props.valueRender,
    className = props.className,
    restProps = __rest(props, ['valueRender', 'className']);
  var _a = __read(useControllableValue(props), 2),
    value = _a[0],
    onChange = _a[1];
  if (!valueRender) {
    return /*#__PURE__*/ React.createElement(
      Select,
      __assign(
        {
          className: className,
        },
        restProps,
        {
          value: value,
          onChange: onChange,
        },
      ),
    );
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classNames('a-select-wrap', className),
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'a-select-value-wrap',
      },
      valueRender(value),
    ),
    /*#__PURE__*/ React.createElement(
      Select,
      __assign({}, restProps, {
        value: value,
        onChange: onChange,
      }),
    ),
  );
};
export default ASelect;
ASelect.Option = Select.Option;
