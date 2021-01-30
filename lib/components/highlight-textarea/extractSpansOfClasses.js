"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = extractSpansOfClasses;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _react = _interopRequireDefault(require("react"));

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Span = /*#__PURE__*/function () {
  function Span(text, beginIndex) {
    this.beginIndex = beginIndex;
    this.endIndex = beginIndex + text.length; // Like String.slice, it is inclusive.

    this.text = text;
    this.isMark = false;
    this.markClasses = new Set();
  }

  var _proto = Span.prototype;

  _proto.setMark = function setMark(className) {
    this.isMark = true;

    if (className) {
      for (var _iterator = _createForOfIteratorHelperLoose(className.split(' ')), _step; !(_step = _iterator()).done;) {
        var c = _step.value;
        this.markClasses.add(c);
      }
    }
  };

  _proto.carve = function carve(beginIndex2) {
    // Carves self to take a bit off the right and returns that carving.
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
        return /*#__PURE__*/_react["default"].createElement("mark", {
          key: this.beginIndex,
          className: className
        }, this.text);
      }

      return /*#__PURE__*/_react["default"].createElement("mark", {
        key: this.beginIndex
      }, this.text);
    }

    return /*#__PURE__*/_react["default"].createElement("span", {
      key: this.beginIndex
    }, this.text);
  };

  (0, _createClass2["default"])(Span, [{
    key: "className",
    get: function get() {
      if (this.markClasses && this.markClasses.size > 0) {
        return [].concat(this.markClasses).sort().join(' ');
      }

      return '';
    }
  }]);
  return Span;
}();

function extractSpansOfClasses(value, ranges) {
  /* Returns value broken into a series of Span classes.  These
     * can be converted to JSX via the render command.
     */
  var spans = [new Span(value, 0)];

  for (var _iterator2 = _createForOfIteratorHelperLoose(ranges), _step2; !(_step2 = _iterator2()).done;) {
    var range = _step2.value;
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
  }

  return spans;
}