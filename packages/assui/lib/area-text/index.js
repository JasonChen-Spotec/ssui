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
var classnames_1 = __importDefault(require("classnames"));
var AreaText = function AreaText(_a) {
  var value = _a.value,
    className = _a.className;
  return react_1["default"].createElement("div", {
    className: (0, classnames_1["default"])('area-text', className)
  }, value);
};
exports["default"] = AreaText;