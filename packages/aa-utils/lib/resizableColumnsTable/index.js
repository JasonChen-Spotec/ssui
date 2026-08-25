"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
// @ts-nocheck
var isElement_1 = tslib_1.__importDefault(require("lodash/isElement"));
var colResizable_1 = tslib_1.__importDefault(require("./colResizable"));
var createColResizable = function createColResizable(domEleTable, options) {
  if ((0, isElement_1["default"])(domEleTable) && domEleTable.nodeName === 'TABLE') {
    if (!domEleTable.__resizable) {
      domEleTable.__resizable = new colResizable_1["default"](domEleTable, options);
    }
    return domEleTable.__resizable;
  }
  return null;
};
exports["default"] = createColResizable;