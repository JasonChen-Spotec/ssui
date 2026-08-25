"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var react_1 = require("react");
var zh_CN_1 = tslib_1.__importDefault(require("../messages/zh_CN"));
var LocaleContext = (0, react_1.createContext)(zh_CN_1["default"].lang);
exports["default"] = LocaleContext;