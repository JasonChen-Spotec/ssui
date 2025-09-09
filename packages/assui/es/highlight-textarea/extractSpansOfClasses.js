var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
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
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
/* eslint-disable no-plusplus */
import React from 'react';
var Span = /** @class */function () {
  function Span(text, beginIndex) {
    this.beginIndex = beginIndex;
    this.endIndex = beginIndex + text.length;
    this.text = text;
    this.isMark = false;
    this.markClasses = new Set();
  }
  Span.prototype.setMark = function (className) {
    var _this = this;
    this.isMark = true;
    if (className) {
      className.split(' ').forEach(function (cls) {
        _this.markClasses.add(cls);
      });
    }
  };
  Span.prototype.carve = function (beginIndex2) {
    var rightText = this.text.slice(beginIndex2 - this.beginIndex);
    this.text = this.text.slice(0, beginIndex2 - this.beginIndex);
    this.endIndex = beginIndex2;
    var right = new Span(rightText, beginIndex2);
    right.isMark = this.isMark;
    right.markClasses = new Set(__spreadArray([], __read(this.markClasses), false));
    return right;
  };
  Object.defineProperty(Span.prototype, "className", {
    get: function get() {
      if (this.markClasses && this.markClasses.size > 0) {
        return __spreadArray([], __read(this.markClasses), false).sort().join(' ');
      }
      return '';
    },
    enumerable: false,
    configurable: true
  });
  Span.prototype.render = function () {
    if (this.isMark) {
      var className = this.className;
      if (className) {
        return /*#__PURE__*/React.createElement("mark", {
          key: this.beginIndex,
          className: className
        }, this.text);
      }
      return /*#__PURE__*/React.createElement("mark", {
        key: this.beginIndex
      }, this.text);
    }
    return /*#__PURE__*/React.createElement("span", {
      key: this.beginIndex
    }, this.text);
  };
  return Span;
}();
export default function extractSpansOfClasses(value, ranges) {
  var spans = [new Span(value, 0)];
  ranges.forEach(function (range) {
    var beginIndex = range[0];
    var endIndex = range[1];
    var rangeOption = range[2];
    var _a = (rangeOption || {}).className,
      className = _a === void 0 ? '' : _a;
    for (var i = 0; i < spans.length; i++) {
      var span = spans[i];
      // since spans are sorted, So this is always true: beginIndex >= span.beginIndex.
      if (beginIndex < span.endIndex) {
        if (beginIndex === span.beginIndex) {
          if (endIndex < span.endIndex) {
            // [range]
            // [s  p  a  n]
            var span2 = span.carve(endIndex);
            span.setMark(className);
            spans.splice(i + 1, 0, span2);
            beginIndex = endIndex;
            i += 1;
          } else {
            // [range]   or   [r a n g e]
            // [span-]        [span]
            span.setMark(className);
            beginIndex = span.endIndex;
          }
        } else if (endIndex < span.endIndex) {
          //   [range]
          // [s  p  a  n]
          var span2 = span.carve(beginIndex);
          var span3 = span2.carve(endIndex);
          span2.setMark(className);
          spans.splice(i + 1, 0, span2, span3);
          beginIndex = endIndex;
          i += 2;
        } else {
          //   [range]  or     [range]
          // [s p a n]       [span]
          var span2 = span.carve(beginIndex);
          span2.setMark(className);
          spans.splice(i + 1, 0, span2);
          beginIndex = span2.endIndex;
          i += 1;
        }
      }
      if (beginIndex === endIndex) {
        break;
      }
    }
  });
  return spans;
}