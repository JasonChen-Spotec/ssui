"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var useClickAway_1 = tslib_1.__importDefault(require("ahooks/lib/useClickAway"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var number_input_1 = tslib_1.__importDefault(require("../number-input"));
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
  var containerRef = react_1["default"].useRef(null);
  var startNumberRef = react_1["default"].useRef(null);
  var _ref = (0, useControllableValue_1["default"])(props, {
      valuePropName: 'focus',
      trigger: 'onFocus'
    }),
    focus = _ref[0],
    onFocus = _ref[1];
  var _ref2 = (0, useControllableValue_1["default"])(props, {
      defaultValue: {
        startInterval: '',
        endInterval: ''
      }
    }),
    value = _ref2[0],
    onChangeValue = _ref2[1];
  (0, useClickAway_1["default"])(function () {
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
  return (0, jsx_runtime_1.jsxs)("div", {
    ref: containerRef,
    className: (0, classnames_1["default"])({
      'label-range-number': true,
      'label-range-number-disabled': disabled,
      'label-range-number-focused': focus,
      'label-range-number-label-scale': focus || resultValue.endInterval || resultValue.startInterval
    }, className),
    children: [(0, jsx_runtime_1.jsxs)("div", {
      className: "a-number a-number-range",
      "aria-required": "true",
      children: [(0, jsx_runtime_1.jsx)("div", {
        className: "a-number-input",
        children: (0, jsx_runtime_1.jsx)(number_input_1["default"], _extends({
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
      }), (0, jsx_runtime_1.jsx)("div", {
        className: "a-number-range-separator",
        children: connector || '–'
      }), (0, jsx_runtime_1.jsx)("div", {
        className: "a-number-input",
        children: (0, jsx_runtime_1.jsx)(number_input_1["default"], _extends({
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
    }), (0, jsx_runtime_1.jsx)("label", {
      className: "label-range-number-text",
      onClick: handleLabelClick,
      children: label
    })]
  });
};
exports["default"] = LabelDatePicker;