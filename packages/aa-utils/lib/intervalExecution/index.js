'use strict';

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule
      ? mod
      : {
          default: mod,
        };
  };
Object.defineProperty(exports, '__esModule', {
  value: true,
});
var moment_1 = __importDefault(require('moment'));
var localStorage_1 = __importDefault(require('../localStorage'));
var dateUtils_1 = __importDefault(require('../dateUtils'));
var today = dateUtils_1['default'].getToday();
var setCurrentTime = function setCurrentTime() {
  return localStorage_1['default'].set('executionTime', ''.concat(today.valueOf()));
};
var intervalExecution = function intervalExecution(callback) {
  var executionTime = localStorage_1['default'].get('executionTime');
  if (executionTime) {
    var inInterval = (0, moment_1['default'])(+executionTime).isBetween(
      today.clone().startOf('day'),
      today.clone().endOf('day'),
    );
    !inInterval && callback();
  } else {
    callback();
  }
  setCurrentTime();
};
exports['default'] = intervalExecution;
