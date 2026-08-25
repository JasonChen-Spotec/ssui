"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var extractSpansOfClasses_1 = tslib_1.__importDefault(require("./extractSpansOfClasses"));
var getRanges_1 = tslib_1.__importDefault(require("./getRanges"));
var HighlighedContents = function HighlighedContents(_ref) {
  var value = _ref.value,
    _ref$highlight = _ref.highlight,
    highlight = _ref$highlight === void 0 ? '' : _ref$highlight;
  var ranges = (0, getRanges_1["default"])(value, highlight);
  var parts = (0, extractSpansOfClasses_1["default"])(value, ranges);
  return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {
    children: parts.map(function (part) {
      return part.render();
    })
  });
};
exports["default"] = HighlighedContents;