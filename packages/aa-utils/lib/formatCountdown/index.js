"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.formatTimeStr = formatTimeStr;
exports.formatCountdown = formatCountdown;

var _padStart = _interopRequireDefault(require("lodash/padStart"));

// Countdown
var timeUnits = [['Y', 1000 * 60 * 60 * 24 * 365], // years
['M', 1000 * 60 * 60 * 24 * 30], // months
['D', 1000 * 60 * 60 * 24], // days
['H', 1000 * 60 * 60], // hours
['m', 1000 * 60], // minutes
['s', 1000], // seconds
['S', 1] // million seconds
];

function formatTimeStr(duration, format) {
  var leftDuration = duration;
  var escapeRegex = /\[[^\]]*]/g;
  var keepList = (format.match(escapeRegex) || []).map(function (str) {
    return str.slice(1, -1);
  });
  var templateText = format.replace(escapeRegex, '[]');
  var replacedText = timeUnits.reduce(function (current, _ref) {
    var name = _ref[0],
        unit = _ref[1];

    if (current.indexOf(name) !== -1) {
      var value = Math.floor(leftDuration / unit);
      leftDuration -= value * unit;
      return current.replace(new RegExp(name + "+", 'g'), function (match) {
        var len = match.length;
        return (0, _padStart["default"])(value.toString(), len, '0');
      });
    }

    return current;
  }, templateText);
  var index = 0;
  return replacedText.replace(escapeRegex, function () {
    var match = keepList[index];
    index += 1;
    return match;
  });
}

function formatCountdown(target, format) {
  var diff = Math.max(target, 0);
  return formatTimeStr(diff, format);
}