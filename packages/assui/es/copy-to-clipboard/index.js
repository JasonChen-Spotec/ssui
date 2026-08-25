function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState } from 'react';
import Tooltip from "antd/es/tooltip";
import copy from 'copy-to-clipboard';
var CopyToClipboard = function CopyToClipboard(props) {
  var text = props.text,
    onCopy = props.onCopy,
    children = props.children,
    options = props.options,
    tooltipTitle = props.tooltipTitle,
    tooltipProps = props.tooltipProps;
  var _useState = useState(false),
    tooltipVisible = _useState[0],
    setTooltipVisible = _useState[1];
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
    if (elem != null && elem.props && typeof elem.props.onClick === 'function') {
      elem.props.onClick(event);
    }
  };
  return tooltipTitle ? _jsx(Tooltip, _extends({
    placement: "topLeft",
    open: tooltipVisible,
    title: tooltipTitle
  }, tooltipProps, {
    children: _jsx("span", {
      onClick: onClick,
      children: children
    })
  })) : (/*#__PURE__*/React.cloneElement(children, {
    onClick: onClick
  }));
};
export default /*#__PURE__*/React.memo(CopyToClipboard);