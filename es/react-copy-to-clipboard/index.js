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

import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style';

var CopyToClipboardWrap = function CopyToClipboardWrap(_a) {
  var children = _a.children,
      text = _a.text,
      tooltipTitle = _a.tooltipTitle,
      onCopySuccess = _a.onCopySuccess,
      tooltipProps = _a.tooltipProps,
      restProps = __rest(_a, ["children", "text", "tooltipTitle", "onCopySuccess", "tooltipProps"]);

  var _b = __read(useState(false), 2),
      tooltipVisible = _b[0],
      setTooltipVisible = _b[1];

  var handleCopySuccess = function handleCopySuccess() {
    setTooltipVisible(true);
    onCopySuccess && onCopySuccess();
    setTimeout(function () {
      setTooltipVisible(false);
    }, 1000);
  };

  return /*#__PURE__*/React.createElement(CopyToClipboard, __assign({}, restProps, {
    text: text,
    onCopy: handleCopySuccess
  }), /*#__PURE__*/React.createElement(Tooltip, __assign({
    placement: "topLeft",
    visible: tooltipVisible,
    title: tooltipTitle
  }, tooltipProps), children));
};

CopyToClipboardWrap.defaultProps = {
  tooltipProps: {}
};
export default CopyToClipboardWrap;