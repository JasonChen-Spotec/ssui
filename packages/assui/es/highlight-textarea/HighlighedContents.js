import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import extractSpansOfClasses from './extractSpansOfClasses';
import getRanges from './getRanges';
var HighlighedContents = function HighlighedContents(_ref) {
  var value = _ref.value,
    _ref$highlight = _ref.highlight,
    highlight = _ref$highlight === void 0 ? '' : _ref$highlight;
  var ranges = getRanges(value, highlight);
  var parts = extractSpansOfClasses(value, ranges);
  return _jsx(_Fragment, {
    children: parts.map(function (part) {
      return part.render();
    })
  });
};
export default HighlighedContents;