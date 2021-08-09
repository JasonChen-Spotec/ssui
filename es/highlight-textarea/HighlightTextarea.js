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

import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import trimStart from 'lodash/trimStart';
import useMount from 'ahooks/lib/useMount';
import HighlighedContents from './HighlighedContents';
var HighlightWithinTextarea = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
      value = props.value,
      onChange = props.onChange,
      highlight = props.highlight,
      className = props.className,
      containerClassName = props.containerClassName,
      onScroll = props.onScroll,
      textareaProps = __rest(props, ["prefixCls", "value", "onChange", "highlight", "className", "containerClassName", "onScroll"]);

  var _a = __read(useState(''), 2),
      textAreaValue = _a[0],
      setTextAreaValue = _a[1];

  var resultValue = value || textAreaValue;
  var textareaRef = useRef(ref);
  var backdropRef = useRef(null);

  var handleScroll = function handleScroll() {
    backdropRef.current.scrollLeft = textareaRef.current.scrollLeft;
    backdropRef.current.style.height = textareaRef.current.clientHeight + textareaRef.current.scrollTop + "px";
    backdropRef.current.style.top = 0 - textareaRef.current.scrollTop + "px";
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

  var getTextAreaNode = function getTextAreaNode(el) {
    textareaRef.current = el;

    if (ref) {
      ref.current = el;
    }
  };

  var textareaCls = classNames(prefixCls + "-input", 'highlight-textarea-input', 'highlight-content', className);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('highlight-textarea', containerClassName)
  }, /*#__PURE__*/React.createElement("div", {
    className: "highlight-textarea-backdrop highlight-content",
    ref: backdropRef
  }, /*#__PURE__*/React.createElement(HighlighedContents, {
    value: resultValue,
    highlight: highlight
  })), /*#__PURE__*/React.createElement("textarea", __assign({
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
export default HighlightWithinTextarea;