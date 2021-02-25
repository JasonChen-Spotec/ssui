"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _getRanges = _interopRequireDefault(require("./getRanges"));

var _extractSpansOfClasses = _interopRequireDefault(require("./extractSpansOfClasses"));

require("./styles/index.less");

var HighlighedContents = function HighlighedContents(_ref) {
  var value = _ref.value,
      highlight = _ref.highlight;
  var ranges = (0, _getRanges["default"])(value, highlight);
  var parts = (0, _extractSpansOfClasses["default"])(value, ranges);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('highlight-textarea-highlights', 'highlight-content')
  }, parts.map(function (part) {
    return part.render();
  }));
};

var _default = HighlighedContents;
exports["default"] = _default;