"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
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

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
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
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

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
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
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

var react_1 = __importStar(require("react"));

var prop_types_1 = __importDefault(require("prop-types"));

var input_1 = __importDefault(require("antd/lib/input"));

require("antd/lib/input/style");

var regexOptionConverter_1 = __importDefault(require("./regexOptionConverter"));

var regexPatterns = __importStar(require("./regexPattern"));

var RegexInput = function RegexInput(props) {
  var regexes = props.regexes,
      value = props.value,
      defaultValue = props.defaultValue,
      onChange = props.onChange,
      rest = __rest(props, ["regexes", "value", "defaultValue", "onChange"]);

  var isControlled = value !== undefined;

  var _a = __read(react_1.useState(isControlled ? value : defaultValue), 2),
      stateValue = _a[0],
      setStateValue = _a[1];

  var resultValue = isControlled ? value : stateValue;

  var handleChange = function handleChange(e) {
    var originalValue = e.target.value;
    var nextValue = regexes.reduce(function (cur, acc) {
      var regexOption = regexOptionConverter_1["default"](acc);

      if (regexOption.isValid) {
        return cur.replace(regexOption.pattern, regexOption.replacement);
      }

      return cur;
    }, originalValue);

    if (resultValue !== nextValue) {
      setStateValue(nextValue);
      onChange && onChange(nextValue);
    }
  };

  return react_1["default"].createElement(input_1["default"], __assign({
    value: resultValue,
    onChange: handleChange
  }, rest));
};

RegexInput.displayName = 'RegexInput';
RegexInput.propTypes = {
  regexes: prop_types_1["default"].arrayOf(prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]))
};
RegexInput.patterns = regexPatterns;
exports["default"] = RegexInput;