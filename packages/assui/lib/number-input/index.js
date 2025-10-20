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
exports.dataTypeEnum = exports.numberTypeEnum = void 0;
var React = __importStar(require("react"));
var input_1 = __importDefault(require("antd/lib/input"));
var useControllableValue_1 = __importDefault(require("ahooks/lib/useControllableValue"));
var omit_1 = __importDefault(require("lodash/omit"));
var dataTypeEnum = __importStar(require("./const/dataTypeEnum"));
exports.dataTypeEnum = dataTypeEnum;
var numberTypeEnum = __importStar(require("./const/numberType"));
exports.numberTypeEnum = numberTypeEnum;
var utils_1 = require("./utils");
var NumberInput = React.forwardRef(function (props, ref) {
  var _a = __read((0, useControllableValue_1["default"])(props, {
      defaultValue: ''
    }), 2),
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
    restProps = __rest(props, ["onChange", "numberType", "dataType", "precision", "formatter", "parser", "enableMinus", "onBlur", "maxLength"]);
  var onNumberChange = function onNumberChange(e) {
    var newNumber;
    var newValue = e.target.value;
    if (numberType === numberTypeEnum.INT) {
      newNumber = (0, utils_1.filterInt)({
        value: newValue,
        preValue: "".concat(value),
        enableMinus: enableMinus
      });
    } else {
      newNumber = (0, utils_1.filterFloat)({
        value: newValue,
        preValue: "".concat(value),
        precision: precision !== null && precision !== void 0 ? precision : 2,
        enableMinus: enableMinus
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
        resultValue = parseInt("".concat(value), 10);
      }
    }
    setValue(resultValue);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(resultValue);
  };
  var finallyValue = formatter ? formatter("".concat(value)) : value;
  return React.createElement(input_1["default"], __assign({
    type: "text",
    ref: ref,
    value: finallyValue,
    onBlur: onNumberBlur,
    onChange: onNumberChange,
    maxLength: maxLength
  }, (0, omit_1["default"])(restProps, ['value'])));
});
exports["default"] = NumberInput;