"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importStar(require("react"));
var copy_to_clipboard_1 = tslib_1.__importDefault(require("copy-to-clipboard"));
var tooltip_1 = tslib_1.__importDefault(require("antd/lib/tooltip"));
var CopyToClipboard = function CopyToClipboard(props) {
  var text = props.text,
    onCopy = props.onCopy,
    children = props.children,
    options = props.options,
    tooltipTitle = props.tooltipTitle,
    tooltipProps = props.tooltipProps;
  var _ref = (0, react_1.useState)(false),
    tooltipVisible = _ref[0],
    setTooltipVisible = _ref[1];
  var handleCopySuccess = function handleCopySuccess() {
    setTooltipVisible(true);
    setTimeout(function () {
      setTooltipVisible(false);
    }, 1000);
  };
  var onClick = function onClick(event) {
    var elem = react_1["default"].Children.only(children);
    var result = (0, copy_to_clipboard_1["default"])(text, options);
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
  return tooltipTitle ? (0, jsx_runtime_1.jsx)(tooltip_1["default"], _extends({
    placement: "topLeft",
    open: tooltipVisible,
    title: tooltipTitle
  }, tooltipProps, {
    children: (0, jsx_runtime_1.jsx)("span", {
      onClick: onClick,
      children: children
    })
  })) : react_1["default"].cloneElement(children, {
    onClick: onClick
  });
};
exports["default"] = react_1["default"].memo(CopyToClipboard);