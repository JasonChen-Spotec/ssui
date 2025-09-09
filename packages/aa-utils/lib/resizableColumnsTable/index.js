"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
// @ts-nocheck
/* eslint-disable no-param-reassign */
var isElement_1 = __importDefault(require("lodash/isElement"));
var colResizable_1 = __importDefault(require("./colResizable"));
var createColResizable = function createColResizable(domEleTable, options) {
  if ((0, isElement_1["default"])(domEleTable) && domEleTable.nodeName === 'TABLE') {
    return domEleTable.__resizable || (domEleTable.__resizable = new colResizable_1["default"](domEleTable, options));
  }
  return null;
};
exports["default"] = createColResizable;