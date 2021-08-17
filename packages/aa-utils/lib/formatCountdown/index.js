'use strict';

var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;

    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = {
        error: error,
      };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }

    return ar;
  };

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
exports.formatTimeStr = void 0;

var padStart_1 = __importDefault(require('lodash/padStart')); // Countdown

var timeUnits = [
  ['Y', 1000 * 60 * 60 * 24 * 365],
  ['M', 1000 * 60 * 60 * 24 * 30],
  ['D', 1000 * 60 * 60 * 24],
  ['H', 1000 * 60 * 60],
  ['m', 1000 * 60],
  ['s', 1000],
  ['S', 1],
];

function formatTimeStr(duration, format) {
  var leftDuration = duration;
  var escapeRegex = /\[[^\]]*]/g;
  var keepList = (format.match(escapeRegex) || []).map(function (str) {
    return str.slice(1, -1);
  });
  var templateText = format.replace(escapeRegex, '[]');
  var replacedText = timeUnits.reduce(function (current, _a) {
    var _b = __read(_a, 2),
      name = _b[0],
      unit = _b[1];

    if (current.indexOf(name) !== -1) {
      var value_1 = Math.floor(leftDuration / unit);
      leftDuration -= value_1 * unit;
      return current.replace(new RegExp(name + '+', 'g'), function (match) {
        var len = match.length;
        return padStart_1['default'](value_1.toString(), len, '0');
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

exports.formatTimeStr = formatTimeStr;

function formatCountdown(target, format) {
  var diff = Math.max(target, 0);
  return formatTimeStr(diff, format);
}

exports['default'] = formatCountdown;
