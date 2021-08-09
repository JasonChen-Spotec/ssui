import React from 'react';
import getRanges from './getRanges';
import extractSpansOfClasses from './extractSpansOfClasses';
var HighlighedContents = /*#__PURE__*/React.forwardRef(function (_a) {
  var value = _a.value,
      highlight = _a.highlight;
  var ranges = getRanges(value, highlight);
  var parts = extractSpansOfClasses(value, ranges);
  return parts.map(function (part) {
    return part.render();
  });
});
export default HighlighedContents;