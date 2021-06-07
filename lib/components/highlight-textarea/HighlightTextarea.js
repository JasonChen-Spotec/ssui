"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var HighlightWithinTextarea = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
      value = props.value,
      onChange = props.onChange,
      highlight = props.highlight,
      className = props.className,
      containerClassName = props.containerClassName,
      onScroll = props.onScroll,
      textareaProps = (0, _objectWithoutPropertiesLoose2["default"])(props, ["prefixCls", "value", "onChange", "highlight", "className", "containerClassName", "onScroll"]);

  var _useState = (0, _react.useState)(''),
      textAreaValue = _useState[0],
      setTextAreaValue = _useState[1];

  var resultValue = value || textAreaValue;
  var textareaRef = (0, _react.useRef)(ref);
  var backdropRef = (0, _react.useRef)(null);
  (0, _useMount["default"])(function () {
    backdropRef.current.style.width = textareaRef.current.clientWidth + 2 + "px";
  });

  var onTextareaChange = function onTextareaChange(e) {
    var newValue = (0, _trimStart["default"])(e.target.value);

    if (onChange) {
      onChange(newValue, e);
    } else {
      setTextAreaValue(newValue);
    }
  };

  var handleScroll = function handleScroll() {
    backdropRef.current.scrollLeft = textareaRef.current.scrollLeft;
    backdropRef.current.style.height = textareaRef.current.clientHeight + textareaRef.current.scrollTop + "px";
    backdropRef.current.style.width = textareaRef.current.clientWidth + 2 + "px";
    backdropRef.current.style.top = 0 - textareaRef.current.scrollTop + "px";
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
    className: "highlight-textarea-backdrop"
  }, /*#__PURE__*/_react["default"].createElement(_HighlighedContents["default"], {
    value: resultValue,
    highlight: highlight,
    ref: backdropRef
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