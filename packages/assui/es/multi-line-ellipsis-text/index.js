function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import useSize from "ahooks/es/useSize";
import Tooltip from "antd/es/tooltip";
import classNames from 'classnames';
import omit from 'lodash/omit';
import ButtonModal from '../button-modal';
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
  var ref = React.useRef(null);
  // 监听容器宽度变化，重新计算是否需要省略
  var containerSize = useSize(ref);
  var _React$useState = React.useState(false),
    isEllipsis = _React$useState[0],
    setIsEllipsis = _React$useState[1];
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
      onEllipsisChange == null || onEllipsisChange(overflow);
    });
  }, [text, lines, onEllipsisChange, containerSize == null ? void 0 : containerSize.width]);
  var ellipsisNode = _jsx("div", {
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
      wordBreak: 'break-word'
    },
    onClick: onClick,
    children: text
  });
  if (isEllipsis && tipType === 'modal') {
    return _jsx(ButtonModal, _extends({
      destroyOnClose: true,
      width: 325,
      footer: null
    }, omit(buttonModalProps, 'children'), {
      className: classNames('ellipsis-modal', buttonModalProps == null ? void 0 : buttonModalProps.className),
      trigger: ellipsisNode,
      children: (buttonModalProps == null ? void 0 : buttonModalProps.children) || _jsx("div", {
        className: "ellipsis-modal-content",
        children: text
      })
    }));
  }
  if (isEllipsis && tipType === 'tooltip') {
    return _jsx(Tooltip, _extends({}, tooltipProps, {
      overlayClassName: classNames('ellipsis-tooltip', tooltipProps == null ? void 0 : tooltipProps.overlayClassName),
      title: _jsx("div", {
        className: "ellipsis-tooltip-content",
        children: text
      }),
      children: ellipsisNode
    }));
  }
  return ellipsisNode;
};
export default MultiLineEllipsisText;