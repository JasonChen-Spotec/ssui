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
var react_1 = __importDefault(require("react"));
var tooltip_1 = __importDefault(require("antd/lib/tooltip"));
var classnames_1 = __importDefault(require("classnames"));
var omit_1 = __importDefault(require("lodash/omit"));
var useSize_1 = __importDefault(require("ahooks/lib/useSize"));
var button_modal_1 = __importDefault(require("../button-modal"));
var MultiLineEllipsisText = function MultiLineEllipsisText(_a) {
  var _b = _a.text,
    text = _b === void 0 ? '' : _b,
    _c = _a.lines,
    lines = _c === void 0 ? 3 : _c,
    _d = _a.className,
    className = _d === void 0 ? '' : _d,
    tipType = _a.tipType,
    buttonModalProps = _a.buttonModalProps,
    tooltipProps = _a.tooltipProps,
    onEllipsisChange = _a.onEllipsisChange,
    onClick = _a.onClick;
  var ref = react_1["default"].useRef(null);
  // 监听容器宽度变化，重新计算是否需要省略
  var containerSize = (0, useSize_1["default"])(ref);
  var _e = __read(react_1["default"].useState(false), 2),
    isEllipsis = _e[0],
    setIsEllipsis = _e[1];
  react_1["default"].useEffect(function () {
    var el = ref.current;
    if (!el) {
      return;
    }
    // 等待浏览器渲染完再计算高度
    requestAnimationFrame(function () {
      var style = window.getComputedStyle(el);
      var lineHeight = parseFloat(style.lineHeight);
      var maxHeight = lineHeight * lines;
      var overflow = el.scrollHeight > maxHeight + 1; // +1 容差
      setIsEllipsis(overflow);
      onEllipsisChange === null || onEllipsisChange === void 0 ? void 0 : onEllipsisChange(overflow);
    });
  }, [text, lines, onEllipsisChange, containerSize === null || containerSize === void 0 ? void 0 : containerSize.width]);
  var ellipsisNode = react_1["default"].createElement("div", {
    ref: ref,
    className: (0, classnames_1["default"])('ellipsis', className, {
      cursor: isEllipsis && tipType
    }),
    style: {
      WebkitLineClamp: lines,
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-all'
    },
    title: isEllipsis ? text : undefined,
    onClick: isEllipsis ? onClick : undefined
  }, text);
  if (isEllipsis && tipType === 'modal') {
    return react_1["default"].createElement(button_modal_1["default"], __assign({
      destroyOnClose: true,
      width: 325,
      footer: null
    }, (0, omit_1["default"])(buttonModalProps, 'children'), {
      className: (0, classnames_1["default"])('ellipsis-modal', buttonModalProps === null || buttonModalProps === void 0 ? void 0 : buttonModalProps.className),
      trigger: ellipsisNode
    }), (buttonModalProps === null || buttonModalProps === void 0 ? void 0 : buttonModalProps.children) || react_1["default"].createElement("div", {
      className: "ellipsis-modal-content"
    }, text));
  }
  if (isEllipsis && tipType === 'tooltip') {
    return react_1["default"].createElement(tooltip_1["default"], __assign({}, tooltipProps, {
      overlayClassName: (0, classnames_1["default"])('ellipsis-tooltip', tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.overlayClassName),
      title: react_1["default"].createElement("div", {
        className: "ellipsis-tooltip-content"
      }, text)
    }), ellipsisNode);
  }
  return ellipsisNode;
};
exports["default"] = MultiLineEllipsisText;