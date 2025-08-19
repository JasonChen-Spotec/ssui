import React from 'react';
import extractSpansOfClasses from './extractSpansOfClasses';
import getRanges from './getRanges';
var HighlighedContents = function HighlighedContents(_a) {
  var value = _a.value,
    _b = _a.highlight,
    highlight = _b === void 0 ? '' : _b;
  var ranges = getRanges(value, highlight);
  var parts = extractSpansOfClasses(value, ranges);
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    parts.map(function (part) {
      return part.render();
    }),
  );
};
export default HighlighedContents;
