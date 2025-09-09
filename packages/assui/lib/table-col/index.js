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
var TableCol = function TableCol(_a) {
  var children = _a.children,
    width = _a.width,
    className = _a.className;
  return react_1["default"].createElement("div", {
    style: {
      width: "".concat(width, "px")
    },
    className: (0, classnames_1["default"])('a-table-col', className)
  }, children);
};
exports["default"] = TableCol;