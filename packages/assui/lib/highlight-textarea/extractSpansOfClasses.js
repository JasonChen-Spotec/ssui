"use strict";

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = extractSpansOfClasses;
var jsx_runtime_1 = require("react/jsx-runtime");
var Span = /*#__PURE__*/function () {
  function Span(text, beginIndex) {
    this.beginIndex = void 0;
    this.endIndex = void 0;
    this.markClasses = void 0;
    this.isMark = void 0;
    this.text = void 0;
    this.beginIndex = beginIndex;
    this.endIndex = beginIndex + text.length;
    this.text = text;
    this.isMark = false;
    this.markClasses = new Set();
  }
  var _proto = Span.prototype;
  _proto.setMark = function setMark(className) {
    var _this = this;
    this.isMark = true;
    if (className) {
      className.split(' ').forEach(function (cls) {
        _this.markClasses.add(cls);
      });
    }
  };
  _proto.carve = function carve(beginIndex2) {
    var rightText = this.text.slice(beginIndex2 - this.beginIndex);
    this.text = this.text.slice(0, beginIndex2 - this.beginIndex);
    this.endIndex = beginIndex2;
    var right = new Span(rightText, beginIndex2);
    right.isMark = this.isMark;
    right.markClasses = new Set([].concat(this.markClasses));
    return right;
  };
  _proto.render = function render() {
    if (this.isMark) {
      var className = this.className;
      if (className) {
        return (0, jsx_runtime_1.jsx)("mark", {
          className: className,
          children: this.text
        }, this.beginIndex);
      }
      return (0, jsx_runtime_1.jsx)("mark", {
        children: this.text
      }, this.beginIndex);
    }
    return (0, jsx_runtime_1.jsx)("span", {
      children: this.text
    }, this.beginIndex);
  };
  return _createClass(Span, [{
    key: "className",
    get: function get() {
      if (this.markClasses && this.markClasses.size > 0) {
        return [].concat(this.markClasses).sort().join(' ');
      }
      return '';
    }
  }]);
}();
function extractSpansOfClasses(value, ranges) {
  var spans = [new Span(value, 0)];
  ranges.forEach(function (range) {
    var beginIndex = range[0];
    var endIndex = range[1];
    var rangeOption = range[2];
    var _ref = rangeOption || {},
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
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
          var _span = span.carve(beginIndex);
          var span3 = _span.carve(endIndex);
          _span.setMark(className);
          spans.splice(i + 1, 0, _span, span3);
          beginIndex = endIndex;
          i += 2;
        } else {
          //   [range]  or     [range]
          // [s p a n]       [span]
          var _span2 = span.carve(beginIndex);
          _span2.setMark(className);
          spans.splice(i + 1, 0, _span2);
          beginIndex = _span2.endIndex;
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