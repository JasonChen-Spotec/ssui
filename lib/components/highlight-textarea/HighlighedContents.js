"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _getRanges = _interopRequireDefault(require("./getRanges"));

var _extractSpansOfClasses = _interopRequireDefault(require("./extractSpansOfClasses"));

require("./styles/index.less");

var HighlighedContents = /*#__PURE__*/_react["default"].forwardRef(function (_ref) {
  var value = _ref.value,
      highlight = _ref.highlight;
  var ranges = (0, _getRanges["default"])(value, highlight);
  var parts = (0, _extractSpansOfClasses["default"])(value, ranges);
  return parts.map(function (part) {
    return part.render();
  });
});

var _default = HighlighedContents;
exports["default"] = _default;