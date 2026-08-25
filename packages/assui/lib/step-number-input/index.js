"use strict";

var _excluded = ["onChange", "onBlur", "numberType", "precision", "step", "max", "min", "disabled", "enableMinus"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var React = tslib_1.__importStar(require("react"));
var useControllableValue_1 = tslib_1.__importDefault(require("ahooks/lib/useControllableValue"));
var DisabledContext_1 = tslib_1.__importDefault(require("antd/lib/config-provider/DisabledContext"));
var bignumber_js_1 = tslib_1.__importDefault(require("bignumber.js"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var isUndefined_1 = tslib_1.__importDefault(require("lodash/isUndefined"));
var number_input_1 = tslib_1.__importDefault(require("../number-input"));
var countType_1 = require("./const/countType");
var numberType_1 = require("./const/numberType");
var StepNumberInput = function StepNumberInput(props) {
  var _ref = (0, useControllableValue_1["default"])(props, {
      defaultValue: ''
    }),
    value = _ref[0],
    setValue = _ref[1];
  var onChange = props.onChange,
    onBlur = props.onBlur,
    _props$numberType = props.numberType,
    numberType = _props$numberType === void 0 ? numberType_1.INT : _props$numberType,
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
  var isEmpty = (0, isUndefined_1["default"])(value) || value === '';
  var plusNumber = new bignumber_js_1["default"](value).plus(step).toString();
  var minusNumber = new bignumber_js_1["default"](value).minus(step).toString();
  var maxCondition = (0, isUndefined_1["default"])(max) ? false : max === Number(value) || Number(max) < Number(plusNumber);
  var minCondition = (0, isUndefined_1["default"])(min) ? false : min === Number(value) || Number(min) > Number(minusNumber);
  // ===================== Disabled =====================
  var disabled = React.useContext(DisabledContext_1["default"]);
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
    if (symbol === countType_1.PLUS) {
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
    if (!(0, isUndefined_1["default"])(max) && Number(value) > max) {
      resultValue = "" + max;
    }
    if (!(0, isUndefined_1["default"])(min) && Number(value) < min) {
      resultValue = "" + min;
    }
    setValue(resultValue);
    onBlur == null || onBlur(resultValue);
  };
  return (0, jsx_runtime_1.jsx)("div", {
    className: "number-range-input",
    children: (0, jsx_runtime_1.jsx)(number_input_1["default"], _extends({
      addonBefore: (0, jsx_runtime_1.jsx)("span", {
        onClick: minusDisabled ? undefined : function () {
          return onClickCount(countType_1.MINUS);
        },
        className: (0, classnames_1["default"])('count-minus-btn', {
          'disabled-btn': minusDisabled
        }),
        children: "-"
      }),
      addonAfter: (0, jsx_runtime_1.jsx)("span", {
        onClick: addDisabled ? undefined : function () {
          return onClickCount(countType_1.PLUS);
        },
        className: (0, classnames_1["default"])('count-add-btn', {
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
exports["default"] = StepNumberInput;