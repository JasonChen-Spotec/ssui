"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

require("antd/lib/tooltip/style");

var CopyToClipboardWrap = function CopyToClipboardWrap(_ref) {
  var children = _ref.children,
      text = _ref.text,
      tooltipTitle = _ref.tooltipTitle,
      onCopySuccess = _ref.onCopySuccess,
      tooltipProps = _ref.tooltipProps,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["children", "text", "tooltipTitle", "onCopySuccess", "tooltipProps"]);

  var _useState = (0, _react.useState)(false),
      tooltipVisible = _useState[0],
      setTooltipVisible = _useState[1];

  var handleCopySuccess = function handleCopySuccess() {
    setTooltipVisible(true);
    onCopySuccess && onCopySuccess();
    setTimeout(function () {
      setTooltipVisible(false);
    }, 1000);
  };

  return /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard.CopyToClipboard, (0, _extends2["default"])({}, restProps, {
    text: text,
    onCopy: handleCopySuccess
  }), /*#__PURE__*/_react["default"].createElement(_tooltip["default"], (0, _extends2["default"])({
    placement: "topLeft",
    visible: tooltipVisible,
    title: tooltipTitle
  }, tooltipProps), children));
};

CopyToClipboardWrap.defaultProps = {
  tooltipProps: {}
};
var _default = CopyToClipboardWrap;
exports["default"] = _default;