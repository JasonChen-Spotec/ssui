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
import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import Tooltip from "antd/es/tooltip";
var CopyToClipboard = function CopyToClipboard(props) {
  var text = props.text,
    onCopy = props.onCopy,
    children = props.children,
    options = props.options,
    tooltipTitle = props.tooltipTitle,
    tooltipProps = props.tooltipProps;
  var _a = __read(useState(false), 2),
    tooltipVisible = _a[0],
    setTooltipVisible = _a[1];
  var handleCopySuccess = function handleCopySuccess() {
    setTooltipVisible(true);
    setTimeout(function () {
      setTooltipVisible(false);
    }, 1000);
  };
  var onClick = function onClick(event) {
    var elem = React.Children.only(children);
    var result = copy(text, options);
    if (onCopy) {
      onCopy(text, result);
    }
    if (tooltipTitle) {
      handleCopySuccess();
    }
    if (elem && elem.props && typeof elem.props.onClick === 'function') {
      elem.props.onClick(event);
    }
  };
  return tooltipTitle ? /*#__PURE__*/React.createElement(Tooltip, __assign({
    placement: "topLeft",
    open: tooltipVisible,
    title: tooltipTitle
  }, tooltipProps), /*#__PURE__*/React.createElement("span", {
    onClick: onClick
  }, children)) : /*#__PURE__*/React.cloneElement(children, {
    onClick: onClick
  });
};
export default /*#__PURE__*/React.memo(CopyToClipboard);