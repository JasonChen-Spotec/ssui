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
var trimStart_1 = __importDefault(require("lodash/trimStart"));
var useMount_1 = __importDefault(require("ahooks/lib/useMount"));
var HighlighedContents_1 = __importDefault(require("./HighlighedContents"));
var HighlightWithinTextarea = React.forwardRef(function (props, ref) {
  var _a = props.prefixCls,
    prefixCls = _a === void 0 ? 'ant' : _a,
    value = props.value,
    onChange = props.onChange,
    _b = props.highlight,
    highlight = _b === void 0 ? '' : _b,
    className = props.className,
    textAreaClassName = props.textAreaClassName,
    textareaProps = __rest(props, ["prefixCls", "value", "onChange", "highlight", "className", "textAreaClassName"]);
  var _c = __read(React.useState(''), 2),
    textAreaValue = _c[0],
    setTextAreaValue = _c[1];
  var resultValue = value || textAreaValue;
  var containerRef = React.useRef();
  var backdropRef = React.useRef();
  var handleScroll = function handleScroll() {
    var _a;
    var textareaDom = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.querySelector('textarea');
    if (backdropRef.current && textareaDom) {
      backdropRef.current.scrollLeft = textareaDom.scrollLeft;
      backdropRef.current.style.height = "".concat(textareaDom.clientHeight + textareaDom.scrollTop, "px");
      backdropRef.current.style.top = "".concat(0 - textareaDom.scrollTop, "px");
    }
  };
  (0, useMount_1["default"])(function () {
    handleScroll();
  });
  var onTextareaChange = function onTextareaChange(e) {
    var newValue = (0, trimStart_1["default"])(e.target.value);
    if (onChange) {
      onChange(newValue, e);
    } else {
      setTextAreaValue(newValue);
    }
  };
  var textareaCls = (0, classnames_1["default"])("".concat(prefixCls, "-input"), 'highlight-textarea-input', 'highlight-content', textAreaClassName);
  return React.createElement("div", {
    className: (0, classnames_1["default"])('highlight-textarea', className),
    ref: function ref(node) {
      containerRef.current = node;
    }
  }, React.createElement("div", {
    className: "highlight-textarea-backdrop highlight-content",
    ref: function ref(node) {
      backdropRef.current = node;
    }
  }, React.createElement(HighlighedContents_1["default"], {
    value: resultValue,
    highlight: highlight
  })), React.createElement("textarea", __assign({
    value: resultValue,
    onChange: onTextareaChange,
    className: textareaCls
  }, textareaProps, {
    onScroll: handleScroll,
    ref: ref
  })));
});
exports["default"] = HighlightWithinTextarea;