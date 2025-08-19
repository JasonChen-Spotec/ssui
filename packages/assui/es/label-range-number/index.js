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
import useClickAway from 'ahooks/es/useClickAway';
import useControllableValue from 'ahooks/es/useControllableValue';
import classNames from 'classnames';
import React from 'react';
import NumberInput from '../number-input';
var defaultValue = {
  startInterval: '',
  endInterval: '',
};
var LabelDatePicker = function LabelDatePicker(props) {
  var disabled = props.disabled,
    className = props.className,
    label = props.label,
    enableMinus = props.enableMinus,
    numberType = props.numberType,
    dataType = props.dataType,
    precision = props.precision,
    connector = props.connector,
    onBlur = props.onBlur,
    startNumberInputProps = props.startNumberInputProps,
    endNumberInputProps = props.endNumberInputProps;
  var containerRef = React.useRef(null);
  var startNumberRef = React.useRef(null);
  var _a = __read(
      useControllableValue(props, {
        valuePropName: 'focus',
        trigger: 'onFocus',
      }),
      2,
    ),
    focus = _a[0],
    onFocus = _a[1];
  var _b = __read(
      useControllableValue(props, {
        defaultValue: {
          startInterval: '',
          endInterval: '',
        },
      }),
      2,
    ),
    value = _b[0],
    onChangeValue = _b[1];
  useClickAway(function () {
    if (focus) {
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(value);
    }
    onFocus(false);
  }, containerRef);
  var onStartChange = function onStartChange(startInterval) {
    onChangeValue(
      __assign(__assign({}, value), {
        startInterval: startInterval,
      }),
    );
  };
  var onEndChange = function onEndChange(endInterval) {
    onChangeValue(
      __assign(__assign({}, value), {
        endInterval: endInterval,
      }),
    );
  };
  var handleLabelClick = function handleLabelClick() {
    var _a;
    if (!focus) {
      onFocus(!focus);
    }
    (_a = startNumberRef.current) === null || _a === void 0 ? void 0 : _a.focus();
  };
  var onHandleFocus = function onHandleFocus() {
    if (!focus) {
      onFocus(true);
    }
  };
  var resultValue = value || defaultValue;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      ref: containerRef,
      className: classNames(
        {
          'label-range-number': true,
          'label-range-number-disabled': disabled,
          'label-range-number-focused': focus,
          'label-range-number-label-scale':
            focus || resultValue.endInterval || resultValue.startInterval,
        },
        className,
      ),
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        'className': 'a-number a-number-range',
        'aria-required': 'true',
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'a-number-input',
        },
        /*#__PURE__*/ React.createElement(
          NumberInput,
          __assign(
            {
              bordered: false,
              enableMinus: enableMinus,
              numberType: numberType,
              precision: precision,
              dataType: dataType,
            },
            endNumberInputProps,
            {
              ref: startNumberRef,
              onFocus: onHandleFocus,
              onChange: onStartChange,
              value: resultValue.startInterval,
            },
          ),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'a-number-range-separator',
        },
        connector || '–',
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'a-number-input',
        },
        /*#__PURE__*/ React.createElement(
          NumberInput,
          __assign(
            {
              bordered: false,
              enableMinus: enableMinus,
              onFocus: onFocus,
              numberType: numberType,
              precision: precision,
              dataType: dataType,
            },
            startNumberInputProps,
            {
              onChange: onEndChange,
              value: resultValue.endInterval,
            },
          ),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      'label',
      {
        className: 'label-range-number-text',
        onClick: handleLabelClick,
      },
      label,
    ),
  );
};
export default LabelDatePicker;
