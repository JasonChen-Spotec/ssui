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
var isArray_1 = __importDefault(require("lodash/isArray"));
var input_1 = __importDefault(require("antd/lib/input"));
var isFunction_1 = __importDefault(require("lodash/isFunction"));
var useControllableValue_1 = __importDefault(require("ahooks/lib/useControllableValue"));
var parse2RegexOption_1 = __importDefault(require("./parse2RegexOption"));
var ConditionInput = React.forwardRef(function (props, ref) {
  var _a = __read((0, useControllableValue_1["default"])(props), 2),
    value = _a[0],
    setValue = _a[1];
  var regexp = props.regexp,
    formatter = props.formatter,
    onChange = props.onChange,
    rest = __rest(props, ["regexp", "formatter", "onChange"]);
  var handleChange = function handleChange(e) {
    var originalValue = e.target.value;
    var nextValue = originalValue;
    if (regexp) {
      var resultRegexp = (0, isArray_1["default"])(regexp) ? regexp : [regexp];
      nextValue = resultRegexp.reduce(function (cur, acc) {
        var regexOption = (0, parse2RegexOption_1["default"])(acc);
        if (regexOption.isValid) {
          return cur.replace(regexOption.pattern, regexOption.replacement);
        }
        return cur;
      }, originalValue);
    }
    if ((0, isFunction_1["default"])(formatter)) {
      nextValue = formatter(nextValue);
    }
    if (value !== nextValue) {
      setValue(nextValue);
    }
  };
  return React.createElement(input_1["default"], __assign({
    ref: ref,
    value: value,
    onChange: handleChange
  }, rest));
});
exports["default"] = ConditionInput;