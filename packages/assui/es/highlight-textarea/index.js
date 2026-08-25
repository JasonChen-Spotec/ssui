var _excluded = ["prefixCls", "value", "onChange", "highlight", "className", "textAreaClassName"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import useMount from "ahooks/es/useMount";
import classNames from 'classnames';
import trimStart from 'lodash/trimStart';
import HighlighedContents from './HighlighedContents';
var HighlightWithinTextarea = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'ant' : _props$prefixCls,
    value = props.value,
    onChange = props.onChange,
    _props$highlight = props.highlight,
    highlight = _props$highlight === void 0 ? '' : _props$highlight,
    className = props.className,
    textAreaClassName = props.textAreaClassName,
    textareaProps = _objectWithoutPropertiesLoose(props, _excluded);
  var _React$useState = React.useState(''),
    textAreaValue = _React$useState[0],
    setTextAreaValue = _React$useState[1];
  var resultValue = value || textAreaValue;
  var containerRef = React.useRef();
  var backdropRef = React.useRef();
  var handleScroll = function handleScroll() {
    var _containerRef$current;
    var textareaDom = (_containerRef$current = containerRef.current) == null ? void 0 : _containerRef$current.querySelector('textarea');
    if (backdropRef.current && textareaDom) {
      backdropRef.current.scrollLeft = textareaDom.scrollLeft;
      backdropRef.current.style.height = textareaDom.clientHeight + textareaDom.scrollTop + "px";
      backdropRef.current.style.top = 0 - textareaDom.scrollTop + "px";
    }
  };
  useMount(function () {
    handleScroll();
  });
  var onTextareaChange = function onTextareaChange(e) {
    var newValue = trimStart(e.target.value);
    if (onChange) {
      onChange(newValue, e);
    } else {
      setTextAreaValue(newValue);
    }
  };
  var textareaCls = classNames(prefixCls + "-input", 'highlight-textarea-input', 'highlight-content', textAreaClassName);
  return _jsxs("div", {
    className: classNames('highlight-textarea', className),
    ref: function ref(node) {
      containerRef.current = node;
    },
    children: [_jsx("div", {
      className: "highlight-textarea-backdrop highlight-content",
      ref: function ref(node) {
        backdropRef.current = node;
      },
      children: _jsx(HighlighedContents, {
        value: resultValue,
        highlight: highlight
      })
    }), _jsx("textarea", _extends({
      value: resultValue,
      onChange: onTextareaChange,
      className: textareaCls
    }, textareaProps, {
      onScroll: handleScroll,
      ref: ref
    }))]
  });
});
export default HighlightWithinTextarea;