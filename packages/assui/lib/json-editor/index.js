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
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
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
var jsoneditor_1 = __importDefault(require("jsoneditor"));
var react_1 = __importStar(require("react"));
var useControllableValue_1 = __importDefault(require("ahooks/lib/useControllableValue"));
var useMount_1 = __importDefault(require("ahooks/lib/useMount"));
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var useUnmount_1 = __importDefault(require("ahooks/lib/useUnmount"));
var classnames_1 = __importDefault(require("classnames"));
var JsonEditor = function JsonEditor(props, ref) {
  var options = props.options,
    className = props.className;
  var _a = __read((0, useControllableValue_1["default"])(props), 2),
    value = _a[0],
    setValue = _a[1];
  var containerRef = react_1["default"].useRef();
  var editorInstanceRef = react_1["default"].useRef();
  (0, useMount_1["default"])(function () {
    editorInstanceRef.current = new jsoneditor_1["default"](containerRef.current, __assign(__assign({
      mode: 'code',
      indentation: 2
    }, options), {
      onChangeText: function onChangeText() {
        var _a;
        try {
          var currentJson = (_a = editorInstanceRef.current) === null || _a === void 0 ? void 0 : _a.get();
          setValue(currentJson);
        } catch (error) {
          console.log('error', error);
        }
      }
    }));
  });
  (0, react_1.useImperativeHandle)(ref, function () {
    return containerRef.current;
  });
  (0, react_1.useEffect)(function () {
    var _a, _b;
    if (value && !(0, isEqual_1["default"])(value, (_a = editorInstanceRef.current) === null || _a === void 0 ? void 0 : _a.get())) {
      (_b = editorInstanceRef.current) === null || _b === void 0 ? void 0 : _b.update(value);
    }
  }, [value]);
  (0, useUnmount_1["default"])(function () {
    var _a;
    (_a = editorInstanceRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
  });
  return react_1["default"].createElement("div", {
    ref: function ref(el) {
      return containerRef.current = el;
    },
    className: (0, classnames_1["default"])('a-jason-editor', className)
  });
};
var ForwardRefJsonEditor = react_1["default"].forwardRef(JsonEditor);
exports["default"] = ForwardRefJsonEditor;