"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _trimStart = _interopRequireDefault(require("lodash/trimStart"));

var _useMount = _interopRequireDefault(require("ahooks/lib/useMount"));

var _HighlighedContents = _interopRequireDefault(require("./HighlighedContents"));

require("./styles/index.less");

var _excluded = ["prefixCls", "value", "onChange", "highlight", "className", "containerClassName", "onScroll"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HighlightWithinTextarea = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
      value = props.value,
      onChange = props.onChange,
      highlight = props.highlight,
      className = props.className,
      containerClassName = props.containerClassName,
      onScroll = props.onScroll,
      textareaProps = (0, _objectWithoutPropertiesLoose2["default"])(props, _excluded);

  var _useState = (0, _react.useState)(''),
      textAreaValue = _useState[0],
      setTextAreaValue = _useState[1];

  var resultValue = value || textAreaValue;
  var textareaRef = (0, _react.useRef)(ref);
  var backdropRef = (0, _react.useRef)(null);

  var handleScroll = function handleScroll() {
    backdropRef.current.scrollLeft = textareaRef.current.scrollLeft;
    backdropRef.current.style.height = textareaRef.current.clientHeight + textareaRef.current.scrollTop + "px";
    backdropRef.current.style.top = 0 - textareaRef.current.scrollTop + "px";
  };

  (0, _useMount["default"])(function () {
    handleScroll();
  });

  var onTextareaChange = function onTextareaChange(e) {
    var newValue = (0, _trimStart["default"])(e.target.value);

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

  var textareaCls = (0, _classnames["default"])(prefixCls + "-input", 'highlight-textarea-input', 'highlight-content', className);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('highlight-textarea', containerClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "highlight-textarea-backdrop highlight-content",
    ref: backdropRef
  }, /*#__PURE__*/_react["default"].createElement(_HighlighedContents["default"], {
    value: resultValue,
    highlight: highlight
  })), /*#__PURE__*/_react["default"].createElement("textarea", (0, _extends2["default"])({
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
var _default = HighlightWithinTextarea;
exports["default"] = _default;