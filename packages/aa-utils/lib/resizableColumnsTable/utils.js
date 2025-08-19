'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.tryParseInt = void 0;
exports.addClass = addClass;
exports.removeClass = removeClass;
/* eslint-disable no-param-reassign */
var tryParseInt = function tryParseInt(value, defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = 0;
  }
  var resultValue = parseInt(''.concat(value), 10);
  if (isNaN(resultValue)) {
    return defaultValue;
  }
  return resultValue;
};
exports.tryParseInt = tryParseInt;
function addClass(elm, className) {
  if (!className) return;
  var els = Array.isArray(elm) ? elm : [elm];
  els.forEach(function (el) {
    if (el.classList) {
      el.classList.add(className.split(' '));
    } else {
      el.className += ' '.concat(className);
    }
  });
}
function removeClass(elm, className) {
  if (!className) return;
  var els = Array.isArray(elm) ? elm : [elm];
  els.forEach(function (el) {
    if (el.classList) {
      el.classList.remove(className.split(' '));
    } else {
      el.className = el.className.replace(
        new RegExp('(^|\\b)'.concat(className.split(' ').join('|'), '(\\b|$)'), 'gi'),
        ' ',
      );
    }
  });
}
