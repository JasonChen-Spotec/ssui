"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var isUndefined_1 = __importDefault(require("lodash/isUndefined"));
var useControllableValue_1 = __importDefault(require("ahooks/lib/useControllableValue"));
var DisabledContext_1 = __importDefault(require("antd/lib/config-provider/DisabledContext"));
var numberType_1 = require("./const/numberType");
var countType_1 = require("./const/countType");
var number_input_1 = __importDefault(require("../number-input"));
var StepNumberInput = function StepNumberInput(props) {
  var _a = __read((0, useControllableValue_1["default"])(props, {
      defaultValue: ''
    }), 2),
    value = _a[0],
    setValue = _a[1];
  var onChange = props.onChange,
    onBlur = props.onBlur,
    _b = props.numberType,
    numberType = _b === void 0 ? numberType_1.INT : _b,
    _c = props.precision,
    precision = _c === void 0 ? 2 : _c,
    _d = props.step,
    step = _d === void 0 ? 1 : _d,
    max = props.max,
    min = props.min,
    customDisabled = props.disabled,
    _e = props.enableMinus,
    enableMinus = _e === void 0 ? false : _e,
    restProps = __rest(props, ["onChange", "onBlur", "numberType", "precision", "step", "max", "min", "disabled", "enableMinus"]);
  var isEmpty = (0, isUndefined_1["default"])(value) || value === '';
  var plusNumber = new bignumber_js_1["default"](value).plus(step).toString();
  var minusNumber = new bignumber_js_1["default"](value).minus(step).toString();
  var maxCondition = (0, isUndefined_1["default"])(max) ? false : max === Number(value) || Number(max) < Number(plusNumber);
  var minCondition = (0, isUndefined_1["default"])(min) ? false : min === Number(value) || Number(min) > Number(minusNumber);
  // ===================== Disabled =====================
  var disabled = React.useContext(DisabledContext_1["default"]);
  var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
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
      newNumber = maxCondition ? "".concat(max) : plusNumber;
    } else {
      newNumber = minCondition ? "".concat(min) : minusNumber;
    }
    setValue(newNumber);
  };
  var onNumberBlur = function onNumberBlur() {
    var resultValue = value;
    if (value === '-' || value === '.') {
      resultValue = '';
    }
    if (!(0, isUndefined_1["default"])(max) && Number(value) > max) {
      resultValue = "".concat(max);
    }
    if (!(0, isUndefined_1["default"])(min) && Number(value) < min) {
      resultValue = "".concat(min);
    }
    setValue(resultValue);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(resultValue);
  };
  return React.createElement("div", {
    className: "number-range-input"
  }, React.createElement(number_input_1["default"], __assign({
    addonBefore: React.createElement("span", {
      onClick: minusDisabled ? undefined : function () {
        return onClickCount(countType_1.MINUS);
      },
      className: (0, classnames_1["default"])('count-minus-btn', {
        'disabled-btn': minusDisabled
      })
    }, "-"),
    addonAfter: React.createElement("span", {
      onClick: addDisabled ? undefined : function () {
        return onClickCount(countType_1.PLUS);
      },
      className: (0, classnames_1["default"])('count-add-btn', {
        'disabled-btn': addDisabled
      })
    }, "+"),
    value: "".concat(value),
    onChange: onNumberChange,
    onBlur: onNumberBlur,
    numberType: numberType,
    precision: precision,
    disabled: mergedDisabled,
    enableMinus: enableMinus
  }, restProps)));
};
exports["default"] = StepNumberInput;