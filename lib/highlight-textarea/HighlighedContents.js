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

var HighlighedContents = react_1["default"].forwardRef(function (_a) {
  var value = _a.value,
      highlight = _a.highlight;
  var ranges = getRanges_1["default"](value, highlight);
  var parts = extractSpansOfClasses_1["default"](value, ranges);
  return parts.map(function (part) {
    return part.render();
  });
});
exports["default"] = HighlighedContents;