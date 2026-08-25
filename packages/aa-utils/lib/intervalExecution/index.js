"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tslib_1 = require("tslib");
var moment_1 = tslib_1.__importDefault(require("moment"));
var localStorage_1 = tslib_1.__importDefault(require("../localStorage"));
var dateUtils_1 = tslib_1.__importDefault(require("../dateUtils"));
var today = dateUtils_1["default"].getToday();
var setCurrentTime = function setCurrentTime() {
  return localStorage_1["default"].set('executionTime', "" + today.valueOf());
};
var intervalExecution = function intervalExecution(callback) {
  var executionTime = localStorage_1["default"].get('executionTime');
  if (executionTime) {
    var inInterval = (0, moment_1["default"])(+executionTime).isBetween(today.clone().startOf('day'), today.clone().endOf('day'));
    !inInterval && callback();
  } else {
    callback();
  }
  setCurrentTime();
};
exports["default"] = intervalExecution;