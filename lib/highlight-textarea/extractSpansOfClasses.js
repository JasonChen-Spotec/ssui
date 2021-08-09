"use strict";

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

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

var __spreadArray = this && this.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var Span =
/** @class */
function () {
  function Span(text, beginIndex) {
    this.beginIndex = beginIndex;
    this.endIndex = beginIndex + text.length; // Like String.slice, it is inclusive.

    this.text = text;
    this.isMark = false;
    this.markClasses = new Set();
  }

  Span.prototype.setMark = function (className) {
    var e_1, _a;

    this.isMark = true;

    if (className) {
      try {
        for (var _b = __values(className.split(' ')), _c = _b.next(); !_c.done; _c = _b.next()) {
          var c = _c.value;
          this.markClasses.add(c);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }
  };

  Span.prototype.carve = function (beginIndex2) {
    // Carves self to take a bit off the right and returns that carving.
    var rightText = this.text.slice(beginIndex2 - this.beginIndex);
    this.text = this.text.slice(0, beginIndex2 - this.beginIndex);
    this.endIndex = beginIndex2;
    var right = new Span(rightText, beginIndex2);
    right.isMark = this.isMark;
    right.markClasses = new Set(__spreadArray([], __read(this.markClasses)));
    return right;
  };

  Object.defineProperty(Span.prototype, "className", {
    get: function get() {
      if (this.markClasses && this.markClasses.size > 0) {
        return __spreadArray([], __read(this.markClasses)).sort().join(' ');
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
        return react_1["default"].createElement("mark", {
          key: this.beginIndex,
          className: className
        }, this.text);
      }

      return react_1["default"].createElement("mark", {
        key: this.beginIndex
      }, this.text);
    }

    return react_1["default"].createElement("span", {
      key: this.beginIndex
    }, this.text);
  };

  return Span;
}();

function extractSpansOfClasses(value, ranges) {
  /* Returns value broken into a series of Span classes.  These
     * can be converted to JSX via the render command.
     */
  var e_2, _a;

  var spans = [new Span(value, 0)];

  try {
    for (var ranges_1 = __values(ranges), ranges_1_1 = ranges_1.next(); !ranges_1_1.done; ranges_1_1 = ranges_1.next()) {
      var range = ranges_1_1.value;
      var beginIndex = range[0];
      var endIndex = range[1];
      var className = range.className;

      for (var i = 0; i < spans.length; i++) {
        var span = spans[i]; // since spans are sorted, So this is always true: beginIndex >= span.beginIndex.

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
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (ranges_1_1 && !ranges_1_1.done && (_a = ranges_1["return"])) _a.call(ranges_1);
    } finally {
      if (e_2) throw e_2.error;
    }
  }

  return spans;
}

exports["default"] = extractSpansOfClasses;