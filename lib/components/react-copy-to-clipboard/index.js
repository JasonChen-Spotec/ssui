"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

require("antd/lib/tooltip/style");

var _excluded = ["children", "text", "tooltipTitle", "onCopySuccess", "tooltipProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CopyToClipboardWrap = function CopyToClipboardWrap(_ref) {
  var children = _ref.children,
      text = _ref.text,
      tooltipTitle = _ref.tooltipTitle,
      onCopySuccess = _ref.onCopySuccess,
      tooltipProps = _ref.tooltipProps,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

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