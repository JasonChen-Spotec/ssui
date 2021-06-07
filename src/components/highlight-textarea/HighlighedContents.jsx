import React from 'react';
import getRanges from './getRanges';
import extractSpansOfClasses from './extractSpansOfClasses';
import './styles/index.less';

const HighlighedContents = React.forwardRef(({ value, highlight }) => {

  const ranges = getRanges(value, highlight);
  const parts = extractSpansOfClasses(value, ranges);

  return parts.map(part => part.render());
});

export default HighlighedContents;
