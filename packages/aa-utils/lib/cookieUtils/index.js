"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cookies = void 0;
var tslib_1 = require("tslib");
var universal_cookie_1 = tslib_1.__importDefault(require("universal-cookie"));
exports.Cookies = universal_cookie_1["default"];
var cookieUtils = new universal_cookie_1["default"]();
exports["default"] = cookieUtils;