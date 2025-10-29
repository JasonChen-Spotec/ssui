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
import React from 'react';
import Tooltip from "antd/es/tooltip";
import classNames from 'classnames';
import omit from 'lodash/omit';
import ButtonModal from '../button-modal';
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
  var ref = React.useRef(null);
  var _e = __read(React.useState(false), 2),
    isEllipsis = _e[0],
    setIsEllipsis = _e[1];
  React.useEffect(function () {
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
  }, [text, lines, onEllipsisChange]);
  var ellipsisNode = /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: classNames('ellipsis', className, {
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
    return /*#__PURE__*/React.createElement(ButtonModal, __assign({
      destroyOnClose: true,
      width: 325,
      footer: null
    }, omit(buttonModalProps, 'children'), {
      className: classNames('ellipsis-modal', buttonModalProps === null || buttonModalProps === void 0 ? void 0 : buttonModalProps.className),
      trigger: ellipsisNode
    }), (buttonModalProps === null || buttonModalProps === void 0 ? void 0 : buttonModalProps.children) || /*#__PURE__*/React.createElement("div", {
      className: "ellipsis-modal-content"
    }, text));
  }
  if (isEllipsis && tipType === 'tooltip') {
    return /*#__PURE__*/React.createElement(Tooltip, __assign({}, tooltipProps, {
      overlayClassName: classNames('ellipsis-tooltip', tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.overlayClassName),
      title: /*#__PURE__*/React.createElement("div", {
        className: "ellipsis-tooltip-content"
      }, text)
    }), ellipsisNode);
  }
  return ellipsisNode;
};
export default MultiLineEllipsisText;