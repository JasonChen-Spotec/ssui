"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var react_1 = __importDefault(require("react"));
var getRanges_1 = __importDefault(require("./getRanges"));
var extractSpansOfClasses_1 = __importDefault(require("./extractSpansOfClasses"));
var HighlighedContents = function HighlighedContents(_a) {
  var value = _a.value,
    _b = _a.highlight,
    highlight = _b === void 0 ? '' : _b;
  var ranges = (0, getRanges_1["default"])(value, highlight);
  var parts = (0, extractSpansOfClasses_1["default"])(value, ranges);
  return react_1["default"].createElement(react_1["default"].Fragment, null, parts.map(function (part) {
    return part.render();
  }));
};
exports["default"] = HighlighedContents;