function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import useClickAway from "ahooks/es/useClickAway";
import useControllableValue from "ahooks/es/useControllableValue";
import classNames from 'classnames';
import NumberInput from '../number-input';
var defaultValue = {
  startInterval: '',
  endInterval: ''
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
  var _useControllableValue = useControllableValue(props, {
      valuePropName: 'focus',
      trigger: 'onFocus'
    }),
    focus = _useControllableValue[0],
    onFocus = _useControllableValue[1];
  var _useControllableValue2 = useControllableValue(props, {
      defaultValue: {
        startInterval: '',
        endInterval: ''
      }
    }),
    value = _useControllableValue2[0],
    onChangeValue = _useControllableValue2[1];
  useClickAway(function () {
    if (focus) {
      onBlur == null || onBlur(value);
    }
    onFocus(false);
  }, containerRef);
  var onStartChange = function onStartChange(startInterval) {
    onChangeValue(_extends({}, value, {
      startInterval: startInterval
    }));
  };
  var onEndChange = function onEndChange(endInterval) {
    onChangeValue(_extends({}, value, {
      endInterval: endInterval
    }));
  };
  var handleLabelClick = function handleLabelClick() {
    var _startNumberRef$curre;
    if (!focus) {
      onFocus(!focus);
    }
    (_startNumberRef$curre = startNumberRef.current) == null || _startNumberRef$curre.focus();
  };
  var onHandleFocus = function onHandleFocus() {
    if (!focus) {
      onFocus(true);
    }
  };
  var resultValue = value || defaultValue;
  return _jsxs("div", {
    ref: containerRef,
    className: classNames({
      'label-range-number': true,
      'label-range-number-disabled': disabled,
      'label-range-number-focused': focus,
      'label-range-number-label-scale': focus || resultValue.endInterval || resultValue.startInterval
    }, className),
    children: [_jsxs("div", {
      className: "a-number a-number-range",
      children: [_jsx("div", {
        className: "a-number-input",
        children: _jsx(NumberInput, _extends({
          bordered: false,
          enableMinus: enableMinus,
          numberType: numberType,
          precision: precision,
          dataType: dataType
        }, endNumberInputProps, {
          ref: startNumberRef,
          onFocus: onHandleFocus,
          onChange: onStartChange,
          value: resultValue.startInterval
        }))
      }), _jsx("div", {
        className: "a-number-range-separator",
        children: connector || '–'
      }), _jsx("div", {
        className: "a-number-input",
        children: _jsx(NumberInput, _extends({
          bordered: false,
          enableMinus: enableMinus,
          onFocus: onFocus,
          numberType: numberType,
          precision: precision,
          dataType: dataType
        }, startNumberInputProps, {
          onChange: onEndChange,
          value: resultValue.endInterval
        }))
      })]
    }), _jsx("label", {
      className: "label-range-number-text",
      onClick: handleLabelClick,
      children: label
    })]
  });
};
export default LabelDatePicker;