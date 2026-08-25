"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var useSize_1 = tslib_1.__importDefault(require("ahooks/lib/useSize"));
var tooltip_1 = tslib_1.__importDefault(require("antd/lib/tooltip"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var omit_1 = tslib_1.__importDefault(require("lodash/omit"));
var button_modal_1 = tslib_1.__importDefault(require("../button-modal"));
var MultiLineEllipsisText = function MultiLineEllipsisText(_ref) {
  var _ref$text = _ref.text,
    text = _ref$text === void 0 ? '' : _ref$text,
    _ref$lines = _ref.lines,
    lines = _ref$lines === void 0 ? 3 : _ref$lines,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    tipType = _ref.tipType,
    buttonModalProps = _ref.buttonModalProps,
    tooltipProps = _ref.tooltipProps,
    onEllipsisChange = _ref.onEllipsisChange,
    onClick = _ref.onClick;
  var ref = react_1["default"].useRef(null);
  // 监听容器宽度变化，重新计算是否需要省略
  var containerSize = (0, useSize_1["default"])(ref);
  var _react_1$default$useS = react_1["default"].useState(false),
    isEllipsis = _react_1$default$useS[0],
    setIsEllipsis = _react_1$default$useS[1];
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
      onEllipsisChange == null || onEllipsisChange(overflow);
    });
  }, [text, lines, onEllipsisChange, containerSize == null ? void 0 : containerSize.width]);
  var ellipsisNode = (0, jsx_runtime_1.jsx)("div", {
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
      wordBreak: 'break-word'
    },
    onClick: onClick,
    children: text
  });
  if (isEllipsis && tipType === 'modal') {
    return (0, jsx_runtime_1.jsx)(button_modal_1["default"], _extends({
      destroyOnClose: true,
      width: 325,
      footer: null
    }, (0, omit_1["default"])(buttonModalProps, 'children'), {
      className: (0, classnames_1["default"])('ellipsis-modal', buttonModalProps == null ? void 0 : buttonModalProps.className),
      trigger: ellipsisNode,
      children: (buttonModalProps == null ? void 0 : buttonModalProps.children) || (0, jsx_runtime_1.jsx)("div", {
        className: "ellipsis-modal-content",
        children: text
      })
    }));
  }
  if (isEllipsis && tipType === 'tooltip') {
    return (0, jsx_runtime_1.jsx)(tooltip_1["default"], _extends({}, tooltipProps, {
      overlayClassName: (0, classnames_1["default"])('ellipsis-tooltip', tooltipProps == null ? void 0 : tooltipProps.overlayClassName),
      title: (0, jsx_runtime_1.jsx)("div", {
        className: "ellipsis-tooltip-content",
        children: text
      }),
      children: ellipsisNode
    }));
  }
  return ellipsisNode;
};
exports["default"] = MultiLineEllipsisText;