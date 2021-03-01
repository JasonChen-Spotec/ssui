import React from 'react';
import classNames from 'classnames';
import getRanges from './getRanges';
import extractSpansOfClasses from './extractSpansOfClasses';
import './styles/index.less';

const HighlighedContents = React.forwardRef(({ value, highlight }, ref) => {

  const ranges = getRanges(value, highlight);
  const parts = extractSpansOfClasses(value, ranges);

  return (
    <div ref={ref} className={classNames('highlight-textarea-highlighter', 'highlight-content')}>
      {parts.map(part => part.render())}
    </div>
  );
});

export default HighlighedContents;
