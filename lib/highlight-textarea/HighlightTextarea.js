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

var classnames_1 = __importDefault(require("classnames"));

var trimStart_1 = __importDefault(require("lodash/trimStart"));

var useMount_1 = __importDefault(require("ahooks/lib/useMount"));

var HighlighedContents_1 = __importDefault(require("./HighlighedContents"));

var HighlightWithinTextarea = react_1["default"].forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
      value = props.value,
      onChange = props.onChange,
      highlight = props.highlight,
      className = props.className,
      containerClassName = props.containerClassName,
      onScroll = props.onScroll,
      textareaProps = __rest(props, ["prefixCls", "value", "onChange", "highlight", "className", "containerClassName", "onScroll"]);

  var _a = __read(react_1.useState(''), 2),
      textAreaValue = _a[0],
      setTextAreaValue = _a[1];

  var resultValue = value || textAreaValue;
  var textareaRef = react_1.useRef(ref);
  var backdropRef = react_1.useRef(null);

  var handleScroll = function handleScroll() {
    backdropRef.current.scrollLeft = textareaRef.current.scrollLeft;
    backdropRef.current.style.height = textareaRef.current.clientHeight + textareaRef.current.scrollTop + "px";
    backdropRef.current.style.top = 0 - textareaRef.current.scrollTop + "px";
  };

  useMount_1["default"](function () {
    handleScroll();
  });

  var onTextareaChange = function onTextareaChange(e) {
    var newValue = trimStart_1["default"](e.target.value);

    if (onChange) {
      onChange(newValue, e);
    } else {
      setTextAreaValue(newValue);
    }
  };

  var getTextAreaNode = function getTextAreaNode(el) {
    textareaRef.current = el;

    if (ref) {
      ref.current = el;
    }
  };

  var textareaCls = classnames_1["default"](prefixCls + "-input", 'highlight-textarea-input', 'highlight-content', className);
  return react_1["default"].createElement("div", {
    className: classnames_1["default"]('highlight-textarea', containerClassName)
  }, react_1["default"].createElement("div", {
    className: "highlight-textarea-backdrop highlight-content",
    ref: backdropRef
  }, react_1["default"].createElement(HighlighedContents_1["default"], {
    value: resultValue,
    highlight: highlight
  })), react_1["default"].createElement("textarea", __assign({
    value: resultValue,
    onChange: onTextareaChange,
    className: textareaCls
  }, textareaProps, {
    onScroll: handleScroll,
    ref: getTextAreaNode
  })));
});
HighlightWithinTextarea.defaultProps = {
  highlight: {},
  prefixCls: 'ant'
};
exports["default"] = HighlightWithinTextarea;